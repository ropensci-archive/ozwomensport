#' Did not bat function.
#'
#' Convert bowling/batting batting category to a character variable.
#'
#' @param status A number, DNB, or TDNB.
#'

b_status <- function(status) {
  if (status != "DNB" & status != "TDNB") {
    return("B")
  } else {
    return(status)
    }
}
