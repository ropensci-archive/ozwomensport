# Function to pull all data from cricinfo
# Too slow to make a fetch function?

fetch_batting_data <- function(matchtype=c("Test","ODI","T20"),
                               sex=c("Men","Women"))
{
  matchtype <- match.arg(matchtype)
  sex <- match.arg(sex)

  matchclass <- match(matchtype, c("Test","ODI","T20")) + 7*(sex=="Women")

  page <- 1
  alldata <- NULL
  theend <- FALSE
  while(!theend)
  {
    print(paste("Page=",page))
    url <- paste("http://stats.espncricinfo.com/ci/engine/stats/index.html?class=",
             matchclass,
             ";page=",
             format(page, scientific=FALSE),
             ";template=results;type=batting;view=innings;wrappertype=print",
             sep="")
    raw <- xml2::read_html(url)
    # Grab relevant table
    tab <- rvest::html_table(raw)[[3]]
    if(identical(dim(tab), c(1L,1L)))
      theend <- TRUE
    else
    {
      # Make columns characters for now
      tab[,2:ncol(tab)] <- apply(tab[,2:ncol(tab)],2,as.character)
      alldata <- dplyr::bind_rows(alldata, tab)
      page <- page + 1
    }
  }

  # Remove redundant missings columns
  alldata <- tibble::as_tibble(alldata[, colSums(is.na(alldata)) != NROW(alldata)])
  # Convert "-" to NA
  alldata[alldata=="-"] <- NA

  return(alldata)
}

clean_batting_data <- function(x)
{
  # Add not out column
  notout <- seq(NROW(x)) %in% grep("*", x$Runs)
  x$Runs <- gsub("*", "", x$Runs, fixed=TRUE)
  dnbat <- c(grep("DNB", x$Runs), grep("absent", x$Runs))
  x$Runs[dnbat] <- NA

  # Convert some columns to numeric or Date
  x <- dplyr::mutate(x,
    Runs = as.numeric(Runs),
    NotOut = seq(NROW(x)) %in% notout,
    DidNotBat = seq(NROW(x)) %in% dnbat,
    Mins = as.numeric(Mins),
    BallsFaced = as.numeric(BF),
    Fours = as.numeric(`4s`),
    Sixes = as.numeric(`6s`),
    StrikeRate = as.numeric(SR),
    Innings = as.integer(Inns),
    Date = lubridate::dmy(`Start Date`))

  # Tim's code -----------------------------------------------------------------
  x <- x %>% 
    dplyr::mutate(Country = stringr::str_extract(Player, "\\([a-zA-Z \\-extends]+\\)"),
                  Country = stringr::str_replace_all(Country, "\\(|\\)|-W", ""),
                  Player = stringr::str_replace(Player, "\\([a-zA-Z  \\-]+\\)", ""),
                  Opposition = stringr::str_replace_all(Opposition, "v | Women| Wmn", ""),
                  Opposition = stringr::str_replace(Opposition, "Bdesh", "BD"),
                  Opposition = stringr::str_replace(Opposition, "India", "IND"),
                  Opposition = stringr::str_replace(Opposition, "Ire", "IRE"),
                  Opposition = stringr::str_replace(Opposition, "Neth", "NL"))

  x <- x[,c("Date","Player", "Country", "Runs", "NotOut", "DidNotBat", "Mins", "BallsFaced", "Fours", "Sixes",
             "StrikeRate","Innings","Opposition","Ground")]

  return(x)

  # ----------------------------------------------------------------------------
}

# Following code creates data objects
#WTest <- Cricket:::fetch_batting_data("Test","Women")
#WODI <- Cricket:::fetch_batting_data("ODI","Women")
#WT20 <- Cricket:::fetch_batting_data("T20","Women")
#MTest <- Cricket:::fetch_batting_data("Test","Men")
# Warning page 916. Closing unused connection???
#MODI <- Cricket:::fetch_batting_data("ODI","Men")
#MT20 <- Cricket:::fetch_batting_data("T20","Men")
#Cricket:::clean_batting_data(WTests)


