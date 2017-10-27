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
                  Country = rename_countries(Country),
                  Opposition = rename_countries(Opposition))

  x <- x[,c("Date","Player", "Country", "Runs", "NotOut", "DidNotBat", "Mins", "BallsFaced", "Fours", "Sixes",
             "StrikeRate","Innings","Opposition","Ground")]

  return(x)

  # ----------------------------------------------------------------------------
}

rename_countries <- function(dirty_countries){
  dirty_countries %>% 
    stringr::str_replace("AFG", "Afghanistan") %>%
    stringr::str_replace("AUS", "Australia") %>%
    stringr::str_replace("Bdesh|BDESH|BD", "Bangladesh") %>%
    stringr::str_replace("BMUDA", "Bermuda") %>%
    stringr::str_replace("CAN", "Canada") %>%
    stringr::str_replace("ENG", "England") %>%
    stringr::str_replace("HKG", "Hong Kong") %>%
    stringr::str_replace("INDIA|IND", "India") %>%
    stringr::str_replace("Ire|IRELAND|IRE", "Ireland") %>%
    stringr::str_replace("KENYA", "Kenya") %>%
    stringr::str_replace("Neth|NL", "Netherlands") %>%
    stringr::str_replace("NZ", "New Zealand") %>%
    stringr::str_replace("PAK", "Pakistan") %>%
    stringr::str_replace("SA", "South Africa") %>%
    stringr::str_replace("SL", "Sri Lanka") %>%
    stringr::str_replace("WI", "West Indies")
}


