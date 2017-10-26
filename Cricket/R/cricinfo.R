#' Fetch Player Data
#'
#' Fetch individual player data from all matches played
#'
#' @param playerid The player ID as given in Cricinfo
#' @param matchtype

fetch_player_data <- function(playerid,
        matchtype=c("Tests","ODI","T20"))
{
  matchtype <- match.arg(matchtype)

  # First figure out if player is female or male
  profile <- paste("http://www.espncricinfo.com/australia/content/player/",
                   playerid, ".html", sep="")
  raw <- read_html(profile)
  female <- length(grep("format=women", as.character(raw))) > 0
  # Grab relevant table
  tab <- html_table(raw)[[4]]

  matchclass <- match(matchtype, c("Tests","ODI","T20")) + (female * 7)
  url <- paste("http://stats.espncricinfo.com/ci/engine/player/",
               playerid,
               ".html?class=",
               matchclass,
              ";template=results;type=allround;view=innings;wrappertype=print",
               sep="")
  raw <- read_html(url)
  # Grab relevant table
  tab <- html_table(raw)[[4]]
  # Remove redundant missings columns
  tab <- tab[, colSums(is.na(tab)) != NROW(tab)] %>% as_tibble
  # Convert "-" to NA
  tab[tab=="-"] <- NA
  # Rename columns
  colnames(tab)[10] <- "Date"
  # Add not out column
  no <- seq(NROW(tab)) %in% grep("*",tab$Score)
  dnb <- seq(NROW(tab)) %in% grep("DNB",tab$Score)
  tab$Score <- gsub("*","",tab$Score, fixed=TRUE)
  tab$Score <- gsub("DNB","",tab$Score, fixed=TRUE)
  dnb <- dnb | (seq(NROW(tab)) %in% grep("DNB",tab$Overs))
  tab$Overs[tab$Overs=="DNB"] <- NA
  # Convert some columns to numeric or Date
  tab <- mutate(tab,
    Score = as.numeric(Score),
    NotOut = seq(NROW(tab)) %in% no,
    DNB = dnb,
    Overs = as.numeric(Overs),
    Conc = as.numeric(Conc),
    Wkts = as.integer(Wkts),
    Ct = as.integer(Ct),
    St = as.integer(St),
    Date = lubridate::dmy(Date))
  # Reorder columns
  return(
  tab[,c("Date","Opposition","Ground","Inns",
         "Score","NotOut","DNB","Overs","Conc","Wkts","Ct","St")]
  )
}

ep <- fetch_player_data(275487)
ml <- fetch_player_data(329336)
ss <- fetch_player_data(267192)
