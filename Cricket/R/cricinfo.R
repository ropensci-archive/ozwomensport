#' Fetch Player Data
#'
#' Fetch individual player data from all matches played
#'
#' @param playerid The player ID as given in Cricinfo
#' @param matchtype Which type of cricket matches do you want? Tests, ODIs or T20s?
#'
#' @examples
#' ElyssePerry <- fetch_player_data(275487,"ODI")
#' MegLanning <- fetch_player_data(329336,"Test")
#' SteveSmith <- fetch_player_data(267192,"T20")
#'
#' @export
fetch_player_data <- function(playerid,
        matchtype=c("Test","ODI","T20"))
{
  matchtype <- match.arg(matchtype)

  # First figure out if player is female or male
  profile <- paste("http://www.espncricinfo.com/australia/content/player/",
                   playerid, ".html", sep="")
  raw <- xml2::read_html(profile)
  female <- length(grep("format=women", as.character(raw))) > 0
  # Grab relevant table
  tab <- rvest::html_table(raw)[[4]]

  matchclass <- match(matchtype, c("Test","ODI","T20")) + (female * 7)
  url <- paste("http://stats.espncricinfo.com/ci/engine/player/",
               playerid,
               ".html?class=",
               matchclass,
              ";template=results;type=allround;view=innings;wrappertype=print",
               sep="")
  raw <- xml2::read_html(url)
  # Grab relevant table
  tab <- rvest::html_table(raw)[[4]]
  # Remove redundant missings columns
  tab <- tibble::as_tibble(tab[, colSums(is.na(tab)) != NROW(tab)])
  # Convert "-" to NA
  tab[tab=="-"] <- NA
  # Rename columns
  colnames(tab)[10] <- "Date"
  # Add not out column
  notout <- seq(NROW(tab)) %in% grep("*",tab$Score)
  dnbat <- grep("DNB",tab$Score)
  tab$Score <- gsub("*","",tab$Score, fixed=TRUE)
  tab$Score[dnbat] <- NA
  dnbowl <- grep("DNB", tab$Overs)
  tab$Overs[dnbowl] <- NA
  # Convert some columns to numeric or Date
  tab <- dplyr::mutate(tab,
    Score = as.numeric(Score),
    NotOut = seq(NROW(tab)) %in% notout,
    DidNotBat = seq(NROW(tab)) %in% dnbat,
    DidNotBowl= seq(NROW(tab)) %in% dnbowl,
    Overs = as.numeric(Overs),
    Conc = as.numeric(Conc),
    Wkts = as.integer(Wkts),
    Ct = as.integer(Ct),
    St = as.integer(St),
    Date = lubridate::dmy(Date))
  # Reorder columns
  return(
  tab[,c("Date","Opposition","Ground","Inns",
         "Score","NotOut","DidNotBat","Overs","Conc","Wkts","DidNotBowl","Ct","St")]
  )
}

