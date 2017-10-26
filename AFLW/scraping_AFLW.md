Scraping AFLW data
================
Peter Hickey
26/10/2017

Here's a (amazingly) simple example to get the 'default' table that is shown when you visit <http://www.afl.com.au/womens/matches/stats>. The result is returned as a *data.frame*.

``` r
library(xml2)
library(rvest)

url <- "http://www.afl.com.au/womens/matches/stats"
aflw <- xml2::read_html(url)
tab <- rvest::html_node(aflw, "table")
x <- rvest::html_table(tab)
x
```

    ##                Club Kicks Kicks Handballs Handballs Disposals Disposals
    ## 1                     TOT   AVG       TOT       AVG       TOT       AVG
    ## 2    Adelaide Crows  1052 131.5       458      57.3      1510     188.8
    ## 3    Brisbane Lions   977 122.1       416      52.0      1393     174.1
    ## 4           Carlton   780 111.4       424      60.6      1204     172.0
    ## 5       Collingwood   838 119.7       335      47.9      1173     167.6
    ## 6         Fremantle   818 116.9       409      58.4      1227     175.3
    ## 7        GWS Giants   758 108.3       351      50.1      1109     158.4
    ## 8         Melbourne   911 130.1       575      82.1      1486     212.3
    ## 9  Western Bulldogs   706 100.9       510      72.9      1216     173.7
    ## 10           Totals  6840 117.6      3478      60.2     10318     177.8
    ##    Marks Marks Hit-outs Hit-outs Frees for Frees for Frees agnst
    ## 1    TOT   AVG      TOT      AVG       TOT       AVG         TOT
    ## 2    248  31.0      189     23.6       152      19.0         122
    ## 3    301  37.6      173     21.6       135      16.9         129
    ## 4    229  32.7      195     27.9        83      11.9          99
    ## 5    278  39.7      256     36.6       109      15.6          95
    ## 6    232  33.1      116     16.6        85      12.1         114
    ## 7    203  29.0      200     28.6       104      14.9          95
    ## 8    266  38.0      166     23.7       101      14.4         111
    ## 9    168  24.0      167     23.9       107      15.3         111
    ## 10  1925  33.1     1462     25.3       876        15         876
    ##    Frees agnst Tackles Tackles Goals Goals Behinds Behinds AFL Fantasy
    ## 1          AVG     TOT     AVG   TOT   AVG     TOT     AVG         TOT
    ## 2         15.3     445    55.6    45   5.6      38     4.8        6879
    ## 3         16.1     435    54.4    35   4.4      26     3.3        6563
    ## 4         14.1     346    49.4    39   5.6      19     2.7        5493
    ## 5         13.6     396    56.6    32   4.6      29     4.1        5903
    ## 6         16.3     418    59.7    25   3.6      34     4.9        5683
    ## 7         13.6     390    55.7    23   3.3      15     2.1        5317
    ## 8         15.9     386    55.1    37   5.3      31     4.4        6412
    ## 9         15.9     386    55.1    31   4.4      42     6.0        5355
    ## 10        15.1    3202    55.2   267   4.6     234       4       47605
    ##    AFL Fantasy
    ## 1          AVG
    ## 2        859.9
    ## 3        820.4
    ## 4        784.7
    ## 5        843.3
    ## 6        811.9
    ## 7        759.6
    ## 8        916.0
    ## 9        765.0
    ## 10       820.1
