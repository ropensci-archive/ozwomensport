#' Get and clean bowling innings dataset.
#'
#' Retrieve bowling data for innings from the
#'
#' @param matchtype Character indicating test, odi, or t20.
#' @param sex Character indicating men or women.
#'
#' @examples
#' bowling_data <- get_bowling_innings("t20", "women")
#'
#' @export


fetch_bowling_innings <- function(matchtype = c("test", "odi", "t20"),
                                sex = c("men", "women")) {

  # Check arguments given by user match the type (class?) of the default
  # arguments of the function.
  matchtype <- match.arg(matchtype)
  sex <- match.arg(sex)

  # Get the data.
  this_data <- fetch_cricket_data(matchtype, sex, "bowling", "innings") %>%
    rename(Date = `Start Date`) %>%
    mutate(Date = lubridate::dmy(Date))

  # Remove after testing.
  original_data <- this_data

  this_data[, c(4, 5, 7)] <- apply(this_data[, c(4, 5, 7)], 2, as.integer)
  this_data[, c(2, 3, 6)] <- apply(this_data[, c(2, 3, 6)], 2, as.numeric)

}
