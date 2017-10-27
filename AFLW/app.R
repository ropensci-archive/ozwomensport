library(shiny)
library(plotly)
library(readr)
library(tidyr)
library(dplyr)

players_tab <- read_csv("data/players.csv")
tidy_players_tab <- gather(players_tab,
                           key = Statistic,
                           value = Value,
                           -Player,
                           -Club)

nrow <- count(distinct(tidy_players_tab, Player)) %>% pull(n)

ui <- fluidPage(

  headerPanel("AFLW Explorer"),
  sidebarPanel(
    selectInput('x', 'X', choices = c("Player", "Club"), selected = "Player"),
    selectInput('y', 'Y', choices = c("Value"), selected = "Value"),
    selectInput('color', 'Color', choices = c("Club"), selected = "Club"),
    selectInput('statistic', 'Statistic',
                choices = unique(tidy_players_tab$Statistic),
                selected = "Kicks_TOT")
  ),
  mainPanel(
    plotlyOutput('trendPlot', height = "900px")
  )
)

server <- function(input, output) {

  # Add reactive data information
  dataset <- reactive({
    tidy_players_tab %>%
      filter(Statistic == input$statistic)
  })

  output$trendPlot <- renderPlotly({

    # Build graph with ggplot syntax
    p <- ggplot(dataset(),
                aes_string(x = input$x, y = input$y, color = input$color)) +
      geom_point() +
      ggtitle(input$statistic)
    p

    # Make a plotly version of the ggplot
    ggplotly(p) %>%
      layout(autosize = TRUE)

  })

}

shinyApp(ui, server)
