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
      tab[,2:8] <- apply(tab[,2:8],2,as.character)
      alldata <- dplyr::bind_rows(alldata, tab)
    }
  }

  # Remove redundant missings columns
  alldata <- tibble::as_tibble(alldata[, colSums(is.na(alldata)) != NROW(alldata)])
  # Convert "-" to NA
  alldata[alldata=="-"] <- NA
  # Add not out column
  notout <- seq(NROW(alldata)) %in% grep("*", alldata$Runs)
  alldata$Runs <- gsub("*", "", alldata$Runs, fixed=TRUE)
  dnbat <- grep("DNB", alldata$Runs)
  alldata$Runs[dnbat] <- NA

  # Convert some columns to numeric or Date
  alldata <- dplyr::mutate(alldata,
    Runs = as.numeric(Runs),
    NotOut = seq(NROW(alldata)) %in% notout,
    DidNotBat = seq(NROW(alldata)) %in% dnbat,
    Mins = as.numeric(Mins),
    BallsFaced = as.numeric(BF),
    Fours = as.numeric(`4s`),
    Sixes = as.numeric(`6s`),
    StrikeRate = as.numeric(SR),
    Innings = as.integer(Inns),
    Date = lubridate::dmy(`Start Date`))
  # Reorder columns
  return(alldata <- alldata[,c("Date","Player","Runs","Mins","BallsFaced","Fours","Sixes",
             "StrikeRate","Innings","Opposition","Ground")])
}

WTests <- fetch_batting_data("Test","Women")


