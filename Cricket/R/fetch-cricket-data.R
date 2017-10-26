#' Get cricket data.
#'
#' Retrieve cricket data from stats cricinfo based on various categories.
#'
#' @param matchtype Character indicating test, odi, or t20.
#' @param sex Character indicating men or women.
#' @param activity Character indicating batting, bowling, or fielding.
#' @param view Character indicating innings or career.
#'
#' @examples


fetch_cricket_data <- function(matchtype = c("test", "odi", "t20"),
                               sex = c("men", "women"),
                               activity = c("batting", "bowling", "fielding"),
                               view = c("innings", "career"))
{
  # Check arguments given by user match the type (class?) of the default
  # arguments of the function.
  matchtype <- match.arg(matchtype)
  sex <- match.arg(sex)
  activity <- match.arg(activity)
  view <- match.arg(view)

  # Set view text.
  view_text <- if (view == "innings") {";view=innings"} else {NULL}

  # Define url signifier for match type.
  matchclass <-
    match(matchtype, c("test", "odi", "t20")) + 7 * (sex == "women")

  # Set starting page to read from.
  page <- 1

  # Don't know what this variable does yet.
  alldata <- NULL

  # Read each page in turn and bind the rows.
  theend <- FALSE # Initilise.
  while (!theend)
  {
    # ToDo: Remove counter once checked.
    print(paste("Page = ", page)) # Counter to make sure it hasn't crashed.

    # Create url string.
    # ToDo: Update url when I connect to the internet.
    # http://stats.espncricinfo.com/ci/engine/stats/index.html?class=10;page=2;template=results;type=bowling;view=innings
    # http://stats.espncricinfo.com/ci/engine/stats/index.html?class=10;page=2;template=results;type=bowling
    url <-
      paste(
        "http://stats.espncricinfo.com/ci/engine/stats/index.html?class=",
        matchclass,
        ";page=",
        format(page, scientific = FALSE),
        ";template=results;type=",
        activity,
        view_text,
        ";wrappertype=print",
        sep = ""
      )

    # Get raw page data from page using xml2::read_html() with url string.
    raw <- xml2::read_html(url)

    # Grab relevant table using rvest::html_table() on the raw page data.
    # Looks like it produces a list of things or tables.
    # ToDo: Update which element of the list it is for this dataset.
    tab <- rvest::html_table(raw)[[3]]

    # Check to see if the dataset extracted from the page data has nothing in
    # it.
    # NB: 1L is an integer; 1 is a numeric.
    # ToDo: See why the table has dimension 1 x 1.
    if (identical(dim(tab), c(1L, 1L)))
      theend <- TRUE

    else
    {
      # Make columns characters for now.
      tab <- apply(tab, 2, as.character) %>% as_tibble()

      # Bind the data extracted from this page to all data collected so far.
      alldata <- dplyr::bind_rows(alldata, tab)

      # Increment page counter.
      page <- page + 1
    }
  }

  # Remove redundant missings columns.
  alldata <-
    tibble::as_tibble(alldata[, colSums(is.na(alldata)) != NROW(alldata)])
  # Convert "-" to NA
  alldata[alldata == "-"] <- NA

  # ToDo: Return the relevant columns.
  return(alldata)
}

test <- fetch_cricket_data("t20","women", "bowling", "career")
