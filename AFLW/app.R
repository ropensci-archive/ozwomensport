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

team_cols_tab <- data_frame(Club = c("GWS", "WB", "COLL", "FRE", "ADEL", "BL",
                                     "CARL", "MELB"),
                            col = c("#f99446", "#e3173e", "#000000", "#7851c1",
                                    "#edca3e", "#a30046", "#7383b7", "#1b67da"))
inner_join(tidy_players_tab, team_cols_tab)

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
      filter(Statistic == input$statistic) %>%
      arrange(Value) %>%
      mutate(Player = factor(Player, levels = Player, ordered = TRUE))
  })

  output$trendPlot <- renderPlotly({

    # Build graph with ggplot syntax
    p <- ggplot(dataset(),
                aes_string(x = input$x, y = input$y, color = input$color)) +
      geom_point() +
      ggtitle(input$statistic) +
      theme(axis.text.x = element_blank(), axis.ticks.x = element_blank()) +
      # scale_colour_manual(values = setNames(team_cols_tab$col,
      #                                       team_cols_tab$Club))
      scale_color_brewer(palette = "Dark2")

    # Make a plotly version of the ggplot
    ggplotly(p) %>%
      layout(autosize = TRUE)

  })

}

shinyApp(ui, server)
