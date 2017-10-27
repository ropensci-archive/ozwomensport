
library(ggplot2)
library(dplyr)
library(readr)
library(plotly)

players <- read.csv("AFLW/data/players.csv")
players=data.frame(players)

#Calculating AFL Fantasy Points
for(i in 1:227){
  players$Fantasy_Point[i] <- 3*players$Kicks_AVG[i]+2*players$Handballs_AVG[i]+3*players$Marks_AVG[i]+4*players$Tackles_AVG[i]+players$Frees.For_AVG[i]-3*players$Frees.Agst_AVG[i]+players$Hit.outs_AVG[i]+6*players$Goals_AVG[i]+players$Behinds_AVG[i]
}

p <- ggplot(players, aes(Fantasy_Point,Player)) +
  geom_point(aes(size=Fantasy_Point,colour=Club))+
  scale_size_continuous(range = c(0,5))+
  xlab("AFL Fantasy Point") +
  theme(legend.position = "none",axis.text.y=element_blank())
ggplotly(p)


