
library(ggplot2)
library(dplyr)
library(readr)
library(plotly)

players <- read.csv("AFLW/data/players.csv")
players=data.frame(players)

#Calculating AFL FAntacy Points
for(i in 1:227){
  players$Fantacy_Point[i] <- 3*Kicks_AVG[i]+2*Handballs_AVG[i]+3*Marks_AVG[i]+4*Tackles_AVG[i]+Frees.For_AVG[i]-3*Frees.Agst_AVG[i]+Hit.outs_AVG[i]+6*Goals_AVG[i]+Behinds_AVG[i]
}


p <- ggplot(players, aes(FantacyPoints,Player)) +
  geom_point(aes(size=FantacyPoints,colour=Club))+
  scale_size_continuous(range = c(0,5))+
  xlab("AFL Fantacy Point") +
  theme(legend.position = "none",axis.text.y=element_blank())
ggplotly(p)


