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

After looking more closely at the source, I realised there are in fact 2 tables on this page: `team-stats` and `player-stats`

``` r
tabs <- rvest::html_nodes(aflw, "table")
teams_tab <- rvest::html_table(tabs[[1]])
teams_tab
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

``` r
players_tab <- rvest::html_table(tabs[[2]], fill = TRUE)
players_tab
```

    ##                           Player Club Kicks Kicks Handballs Handballs
    ## 1                                  NA   TOT   AVG       TOT       AVG
    ## 2                  1Jess Hosking    0     0     0         0         0
    ## 3                  2Kate Sheahan    0     0     0         0         0
    ## 4              3Jasmine Anderson    0     0     0         0         0
    ## 5                 4Lauren O'Shea    0     0     0         0         0
    ## 6                   5Lisa Steane    0     0     0         0         0
    ## 7                  6Emily Bonser    0     0     0         0         0
    ## 8                  7Kiara Bowers    0     0     0         0         0
    ## 9                8Taryn Priestly    0     0     0         0         0
    ## 10         9Stephanie De Bortoli    0     0     0         0         0
    ## 11                10Pepa Randall    0     0     0         0         0
    ## 12             11Caitlin Collins    0     0     0         0         0
    ## 13                 12Renee Forth    0     0     0         0         0
    ## 14                 13Kendra Heil    0     0     0         0         0
    ## 15              14Jade Ransfield    0     0     0         0         0
    ## 16            15Isabella Rudolph    0     0     1         1         1
    ## 17               16Natalie Plane    1     1     0         0         1
    ## 18                17Romy Timmins    1     0     0         0         1
    ## 19                  18Kim Mickle    2     2     0         0         2
    ## 20              19Elise Strachan    2     2     0         0         2
    ## 21                20Codie Briggs    1     0     3         1         4
    ## 22                 21Helen Roden    3     3     1         1         4
    ## 23                 22Hannah Dunn    3     3     1         1         4
    ## 24                 23Kate Deegan    3     3     1         1         4
    ## 25                  24Lou Wotton    2     0     2         0         4
    ## 26             25Penny Cula-Reid    5     2     0         0         5
    ## 27           26Sophie Armitstead    3     3     2         2         5
    ## 28                27Shaleise Law    5     1     0         0         5
    ## 29                  28Kate Darby    5     2     1         0         6
    ## 30             29Beatrice Devlyn    6     3     0         0         6
    ## 31               30Kimberley Ebb    3     0     4         1         7
    ## 32            31Lauren Morecroft    4     2     3         1         7
    ## 33            32Delissa Kimmince    7     7     0         0         7
    ## 34              33Georgia Walker    5     2     3         1         8
    ## 35              34Hayley Trevean    6     6     3         3         9
    ## 36              35Hannah Wallett    6     1     4         1        10
    ## 37               36Brianna Green    5     2     6         3        11
    ## 38           37Alexandra Saundry    7     1     5         1        12
    ## 39                 38Sarah Jolly    6     2     6         2        12
    ## 40                39Kate Stanton   10     2     3         0        13
    ## 41            40Tarnica Golisano    7     1     6         1        13
    ## 42                 41Alicia Janz    4     1     9         3        13
    ## 43                 42Jordan Ivey   10     5     3         1        13
    ## 44                  43Sarah Last   10     3     4         1        14
    ## 45            44Stephanie Walker   11     3     3         1        14
    ## 46             45Ruby Schleicher    9     1     6         1        15
    ## 47           46Louise Stephenson   10     3     6         2        16
    ## 48                47Meg McDonald    9     2     7         1        16
    ## 49              48Jordan Membrey    8     1     8         1        16
    ## 50              49Selina Goodman    6     0    10         1        16
    ## 51               50Isabella Ayre   13     2     5         0        18
    ## 52                  51Mai Nguyen   17     5     1         0        18
    ## 53        52Kristy De Pellegrini    8     1    10         1        18
    ## 54                53Taylah Angel   14     3     4         1        18
    ## 55                54Tahni Nestor    8     2    10         3        18
    ## 56           55Courtney Clarkson   12     2     7         1        19
    ## 57              56Rebecca Neaves   11     2     8         1        19
    ## 58                  57Meg Downie   11     5     8         4        19
    ## 59                 58Tiah Haynes   13     4     6         2        19
    ## 60                59Sophie Casey    7     1    13         2        20
    ## 61            60Mia-Rae Clifford   15     2     6         0        21
    ## 62             61Monique Hollick   12     4     9         3        21
    ## 63            62Jessica Anderson   16     3     6         1        22
    ## 64                  63Demi Okely   18     2     4         0        22
    ## 65               64Ellyse Gamble   10     1    12         2        22
    ## 66              65Aliesha Newman   15     3     7         1        22
    ## 67              66Aasta O'Connor    9     2    14         3        23
    ## 68               67Kira Phillips   19     3     4         0        23
    ## 69               68Erin McKinnon    8     1    15         2        23
    ## 70               69Lisa Williams   10     1    14         2        24
    ## 71                 70Tayla Thorn   17     3     8         1        25
    ## 72                71Alison Brown   15     2    11         1        26
    ## 73               72Katie Brennan   19     9     7         3        26
    ## 74                73Jess Gardner    8     1    18         3        26
    ## 75                74Brooke Whyte   19     4     7         1        26
    ## 76                75Clare Lawton   17     2    10         1        27
    ## 77              76Tayla Bresland   21     3     7         1        28
    ## 78                77Kate Tyndall    7     1    21         3        28
    ## 79             78Harriet Cordner   18     2    11         1        29
    ## 80               79Kate Shierlaw   19     3    10         1        29
    ## 81             80Jessica Kennedy   18     4    12         3        30
    ## 82                81Ainslie Kemp   21     5     9         2        30
    ## 83                82Ashley Sharp   15     2    16         2        31
    ## 84           83Melissa Caulfield   18     3    15         3        33
    ## 85               84Justine Mules   17     3    17         3        34
    ## 86                85Kelly Clinch   14     2    20         3        34
    ## 87                86Breann Moody   24     3    10         1        34
    ## 88                87Laura Attard   25     3    10         1        35
    ## 89              88Madeleine Boyd   22     3    14         2        36
    ## 90             89Jacinda Barclay   27     4     9         1        36
    ## 91                  90Jess Bibby   20     2    16         2        36
    ## 92                   91Ella Ross   20     2    16         2        36
    ## 93                  92Moana Hope   29     4     7         1        36
    ## 94                 93Tara Morgan   29     4     8         1        37
    ## 95             94Rachael Killian   28     4     9         1        37
    ## 96            95Akec Makur Chuot   29     4     8         1        37
    ## 97              96Emma Humphries   27     3    10         1        37
    ## 98                 97Bailey Hunt   14     2    23         3        37
    ## 99               98Aimee Schmidt   21     3    17         2        38
    ## 100           99Cecilia McIntosh   21     3    17         2        38
    ## 101        100Rebecca Privitelli   29     5     9         1        38
    ## 102          101Brooke Patterson   23     5    15         3        38
    ## 103             102Nikki Wallace   18     2    21         2        39
    ## 104               103Sarah Allan   19     3    20         3        39
    ## 105              104Tiarna Ernst   11     1    30         4        41
    ## 106             105Alyssa Mifsud   28     4    13         1        41
    ## 107        106Christina Bernardi   35     5     7         1        42
    ## 108                 107Emma King   28     4    14         2        42
    ## 109            108Kirsten McLeod   26     4    16         2        42
    ## 110            109Stephanie Cain   23     3    19         3        42
    ## 111             110Anne Hatchard   20     2    22         3        42
    ## 112         111Phoebe McWilliams   25     3    17         2        42
    ## 113           112Cassie Davidson   37     5     5         0        42
    ## 114           113Jenna McCormick   29     4    14         2        43
    ## 115              114Laura Bailey   14     2    29         4        43
    ## 116            115Tahlia Randall   32     4    11         1        43
    ## 117         116Richelle Cranston   25     4    19         3        44
    ## 118                  117Nat Exon   24     4    20         4        44
    ## 119                118Emma Grant   35     5    10         1        45
    ## 120               119Ellie Brush   35     5    11         1        46
    ## 121           120Lauren Brazzale   39     5     7         1        46
    ## 122          121Lauren Tesoriero   24     4    22         4        46
    ## 123           122Katherine Smith   24     3    22         3        46
    ## 124               123Talia Radan   28     3    18         2        46
    ## 125               124Stacey Barr   34     4    13         1        47
    ## 126           125Gabriella Pound   35     5    13         1        48
    ## 127              126Deanna Berry   43     6     6         0        49
    ## 128            127Jaimee Lambert   34     5    15         2        49
    ## 129               128Sally Riley   30     3    20         2        50
    ## 130 129Katherine Gillespie-Jones   18     2    32         4        50
    ## 131              130Darcy Vescio   39     5    11         1        50
    ## 132             131Kate McCarthy   39     4    11         1        50
    ## 133             132Alison Downie   33     4    17         2        50
    ## 134        133Stacey Livingstone   43     6     8         1        51
    ## 135         134Rhiannon Metcalfe   35     4    16         2        51
    ## 136            135Breanna Koenen   34     4    17         2        51
    ## 137               136Libby Birch   24     3    28         4        52
    ## 138          137Heather Anderson   40     5    13         1        53
    ## 139          138Shannon Campbell   45     6     8         1        53
    ## 140         139Nicole Hildebrand   47     5     7         0        54
    ## 141            140Angelica Gogos   27     3    27         3        54
    ## 142             141Kellie Gibson   38     4    16         2        54
    ## 143             142Renee Tomkins   46     6     9         1        55
    ## 144                143Amy Lavell   34     4    21         3        55
    ## 145             144Hayley Wildes   39     5    16         2        55
    ## 146              145Melissa Kuys   47     7     9         1        56
    ## 147              146Lauren Spark   36     5    20         2        56
    ## 148             147Lauren Pearce   30     4    26         3        56
    ## 149              148Tayla Harris   45     5    11         1        56
    ## 150           149Caitlyn Edwards   37     5    19         2        56
    ## 151               150Sharni Webb   31     3    26         3        57
    ## 152           151Jessica Cameron   45     6    12         1        57
    ## 153               152Leah Kaslar   28     3    29         3        57
    ## 154            153Madeline Keryk   43     7    15         2        58
    ## 155             154Hayley Miller   48     6    10         1        58
    ## 156        155Alexandra Anderson   29     3    29         3        58
    ## 157          156Jessica Sedunary   41     5    17         2        58
    ## 158       157Stevie-Lee Thompson   41     5    17         2        58
    ## 159                158Bree White   32     4    28         4        60
    ## 160        159Jessica Wuetschner   44     5    17         2        61
    ## 161             160Maddy Collier   47     6    15         2        62
    ## 162            161Gemma Houghton   36     5    26         3        62
    ## 163            162Jasmine Garner   52     7    10         1        62
    ## 164               163Kirsty Lamb   47     7    15         2        62
    ## 165               164Shae Audley   35     5    28         4        63
    ## 166             165Sarah Hosking   35     5    28         4        63
    ## 167          166Bianca Jakobsson   37     5    26         3        63
    ## 168              167Katie Loynes   40     5    23         3        63
    ## 169           168Amanda Farrugia   49     7    14         2        63
    ## 170             169Sarah Lampard   30     4    33         4        63
    ## 171         170Danielle Hardiman   52     8    12         2        64
    ## 172          171Brittany Bonnici   46     6    18         2        64
    ## 173           172Brooke Lochland   47     6    17         2        64
    ## 174              173Laura Duryea   54     7    10         1        64
    ## 175             174Amelia Barden   36     5    29         4        65
    ## 176             175Georgia Bevan   53     6    12         1        65
    ## 177             176Shelley Scott   41     6    24         4        65
    ## 178                 177Dayna Cox   44     5    22         2        66
    ## 179              178Kate Lutkins   59     7     7         0        66
    ## 180             179Belinda Smith   44     6    22         3        66
    ## 181            180Nicola Stevens   50     7    17         2        67
    ## 182             181Alex Williams   47     6    20         2        67
    ## 183             182Sarah Perkins   43     5    24         3        67
    ## 184          183Gabby O'Sullivan   32     4    35         5        67
    ## 185         184Stephanie Chiocci   50     7    18         2        68
    ## 186           185Nicole Callinan   33     4    35         5        68
    ## 187            186Ashleigh Guest   46     6    22         3        68
    ## 188           187Courtney Cramey   60     7    10         1        70
    ## 189             188Ebony Antonio   45     7    25         4        70
    ## 190              189Meg Hutchins   57     8    13         1        70
    ## 191               190Britt Tully   53     7    19         2        72
    ## 192             191Kirby Bentley   48     6    24         3        72
    ## 193            192Rebecca Beeson   38     5    35         5        73
    ## 194              193Abbey Holmes   35     4    38         4        73
    ## 195           194Brittany Gibson   46     5    27         3        73
    ## 196          195Tilly Lucas-Rodd   49     7    24         3        73
    ## 197            196Deni Varnhagen   57     7    17         2        74
    ## 198             197Jamie Stanton   60     7    14         1        74
    ## 199           198Kaitlyn Ashmore   57     7    18         2        75
    ## 200              199Sarah D'Arcy   48     6    28         4        76
    ## 201          200Jasmine Grierson   48     6    29         4        77
    ## 202            201Samantha Virgo   52     6    26         3        78
    ## 203               202Nicola Barr   55     7    23         3        78
    ## 204              203Angela Foley   56     7    22         2        78
    ## 205        204Catherine Phillips   46     6    33         4        79
    ## 206                205Alicia Eva   63     9    16         2        79
    ## 207              206Emma Swanson   52    10    28         5        80
    ## 208                207Mel Hickey   36     5    45         6        81
    ## 209             208Lauren Arnell   60     8    24         3        84
    ## 210              209Hannah Scott   68     9    21         3        89
    ## 211                210Megan Hunt   61     7    28         3        89
    ## 212               211Emma Zielke   65     8    27         3        92
    ## 213   212Sabrina Frederick-Traub   72     9    22         2        94
    ## 214              213Jess Dal Pos   79    11    18         2        97
    ## 215            214Kara Donnellan   78    13    23         3       101
    ## 216             215Lara Filocamo   67     9    40         5       107
    ## 217           216Chelsea Randall   85    10    28         3       113
    ## 218               217Lily Mithen   67     9    46         6       113
    ## 219             218Brianna Davey   58     9    56         9       114
    ## 220               219Dana Hooker   87    12    34         4       121
    ## 221               220Emily Bates   84    10    41         5       125
    ## 222            221Ebony Marinoff   97    12    31         3       128
    ## 223               222Elise O'Dea   82    11    53         7       135
    ## 224           223Ellie Blackburn  101    14    35         5       136
    ## 225              224Emma Kearney   82    11    68         9       150
    ## 226              225Karen Paxman  102    14    50         7       152
    ## 227              226Daisy Pearce   79    11    74        10       153
    ## 228             227Erin Phillips  124    15    36         4       160
    ## 229                  All Players 6839   4.3  3478       2.1     10317
    ##     Disposals Disposals Marks Marks Hit-outs Hit-outs Frees for Frees for
    ## 1         TOT       AVG   TOT   AVG      TOT      AVG       TOT       AVG
    ## 2           0         0     0     0        0        0         0         0
    ## 3           0         0     0     0        0        0         0         0
    ## 4           0         0     0     0        0        0         0         0
    ## 5           0         0     0     0        0        0         0         0
    ## 6           0         0     0     0        0        0         0         0
    ## 7           0         0     0     0        0        0         0         0
    ## 8           0         0     0     0        0        0         0         0
    ## 9           0         0     0     0        0        0         0         0
    ## 10          0         0     0     0        0        0         0         0
    ## 11          0         0     0     0        0        0         0         0
    ## 12          0         0     0     0        0        0         0         0
    ## 13          0         0     0     0        0        0         0         0
    ## 14          0         0     0     0        0        0         0         0
    ## 15          0         0     0     0        0        0         0         0
    ## 16          1         0     0     0        0        0         0         0
    ## 17          1         0     0     0        0        0         0         0
    ## 18          0         0     0     0        0        0         0         0
    ## 19          2         0     0     0        0        2         2         1
    ## 20          2         1     1     0        0        0         0         0
    ## 21          1         0     0     0        0        0         0         1
    ## 22          4         1     1     0        0        0         0         0
    ## 23          4         1     1     0        0        0         0         3
    ## 24          4         0     0     0        0        0         0         0
    ## 25          1         1     0    33       11        0         0         1
    ## 26          2         1     0     0        0        0         0         1
    ## 27          5         1     1     0        0        1         1         0
    ## 28          1         1     0     0        0        0         0         0
    ## 29          3         1     0     0        0        0         0         0
    ## 30          3         0     0     0        0        0         0         0
    ## 31          1         0     0     0        0        1         0         2
    ## 32          3         1     0     0        0        1         0         0
    ## 33          7         3     3     0        0        0         0         0
    ## 34          4         0     0     0        0        1         0         0
    ## 35          9         2     2     0        0        1         1         1
    ## 36          2         3     0     0        0        1         0         2
    ## 37          5         2     1     0        0        0         0         3
    ## 38          3         2     0     0        0        1         0         5
    ## 39          4         1     0     0        0        1         0         1
    ## 40          3         1     0     0        0        5         1         2
    ## 41          3         4     1     0        0        1         0         4
    ## 42          4         1     0    47       15        2         0         1
    ## 43          6         4     2     0        0        2         1         1
    ## 44          4         1     0     0        0        0         0         1
    ## 45          4         2     0     0        0        3         1         3
    ## 46          3         0     0    21        4        2         0         3
    ## 47          5         4     1     6        2        1         0         2
    ## 48          4         9     2     7        1        1         0         0
    ## 49          3         3     0     0        0        2         0         2
    ## 50          2         2     0    39        4        2         0         2
    ## 51          3         7     1     0        0        0         0         3
    ## 52          6         5     1     0        0        3         1         1
    ## 53          3         1     0     1        0        3         0         3
    ## 54          4         0     0     0        0        5         1         2
    ## 55          6         3     1     0        0        0         0         1
    ## 56          3         4     0    34        5        1         0         3
    ## 57          3         6     1     0        0        1         0         1
    ## 58          9         5     2     0        0        4         2         2
    ## 59          6         2     0     0        0        0         0         2
    ## 60          4         7     1     0        0        2         0         9
    ## 61          3         1     0     0        0        4         0         3
    ## 62          7         3     1     0        0        1         0         0
    ## 63          4         7     1     4        0        3         0         2
    ## 64          3         5     0     0        0        1         0         8
    ## 65          3         5     0     1        0        1         0         3
    ## 66          5         6     1     0        0        1         0         2
    ## 67          5         4     1    24        6        1         0         3
    ## 68          4         8     1     0        0        1         0         6
    ## 69          3         1     0   154       22        3         0         3
    ## 70          4         0     0     1        0        1         0         3
    ## 71          5         2     0     3        0        2         0         6
    ## 72          3         6     0     0        0        2         0         0
    ## 73         13         7     3     2        1        3         1         3
    ## 74          5         1     0     0        0        4         0         6
    ## 75          6         6     1     0        0        2         0         2
    ## 76          3         5     0    27        3        7         1         4
    ## 77          4         8     1     0        0        1         0         7
    ## 78          4         4     0     0        0        1         0         9
    ## 79          4         4     0    16        2        1         0         8
    ## 80          4        11     1     7        1        4         0         3
    ## 81          7         4     1     0        0        3         0         3
    ## 82          7         8     2     0        0        1         0         2
    ## 83          4         4     0     0        0        0         0         5
    ## 84          6         4     0     0        0        3         0         2
    ## 85          6         0     0     0        0        2         0         3
    ## 86          5         2     0    37        6        2         0         4
    ## 87          4         1     0    83       11        3         0         2
    ## 88          5         7     1     0        0        1         0         5
    ## 89          5         8     1    39        5        2         0         5
    ## 90          6        13     2     1        0        3         0         5
    ## 91          5        12     1     0        0        3         0         0
    ## 92          5         3     0     0        0        2         0         6
    ## 93          5        14     2     0        0        4         0         4
    ## 94          5        11     1     0        0        6         0         3
    ## 95          6         8     1     1        0        4         0         1
    ## 96          6         2     0     6        1        0         0         2
    ## 97          5         6     0     0        0        7         1         2
    ## 98          5         4     0     0        0        2         0         4
    ## 99          5        15     2     0        0        1         0         3
    ## 100         6         6     1     0        0        7         1         4
    ## 101         7        11     2     0        0        1         0         0
    ## 102         9         8     2     0        0        0         0         0
    ## 103         4         5     0     0        0        2         0         6
    ## 104         6         9     1    18        3        3         0         3
    ## 105         5         2     0    90       12       10         1         8
    ## 106         5        10     1     2        0        4         0         6
    ## 107         7        13     2     0        0        3         0         1
    ## 108         6         7     1   199       28        3         0         4
    ## 109         7         3     0     0        0        5         0         2
    ## 110         7         9     1     0        0        4         0         8
    ## 111         6         9     1     4        0        9         1         3
    ## 112         6        13     1     8        1        6         0         3
    ## 113         6        14     2     0        0        5         0         3
    ## 114         6         6     0     0        0        3         0         5
    ## 115         7         6     1     0        0        5         0         8
    ## 116         6        14     2     3        0        3         0         4
    ## 117         7         9     1     2        0        2         0         6
    ## 118         8         9     1     2        0        2         0         4
    ## 119         6        17     2     1        0        3         0         3
    ## 120         7         8     1     0        0        2         0         2
    ## 121         6         8     1     0        0        2         0         4
    ## 122         9         7     1     1        0        2         0         5
    ## 123         6         3     0     0        0        5         0         4
    ## 124         5         7     0     0        0        5         0         6
    ## 125         6        21     3     6        0        4         0         7
    ## 126         6         6     0     0        0        6         0         6
    ## 127         7        11     1     0        0        4         0         4
    ## 128         8         6     1     0        0        8         1         1
    ## 129         6         7     0     0        0        5         0         3
    ## 130         7         7     1    11        1        2         0         6
    ## 131         7        13     1     0        0        6         0         4
    ## 132         6         9     1     0        0        3         0         4
    ## 133         7        15     2    89       12        7         1         6
    ## 134         7        16     2     0        0        1         0         3
    ## 135         6         9     1   136       17        1         0         3
    ## 136         6        13     1     0        0        7         0         2
    ## 137         7         3     0     1        0        2         0         5
    ## 138         6         7     0     1        0        1         0         2
    ## 139         7        14     2     0        0        4         0         4
    ## 140         6        18     2     0        0        3         0         6
    ## 141         7         2     0     0        0       11         1         1
    ## 142         6         9     1     0        0        8         1        10
    ## 143         7        14     2     0        0        1         0         6
    ## 144         7        14     2     0        0        2         0         1
    ## 145         7         6     0     0        0        3         0         1
    ## 146         9        13     2     0        0        5         0         7
    ## 147         8        21     3     7        1        3         0         4
    ## 148         8        13     1    99       14        6         0         4
    ## 149         7        23     2     5        0        8         1        19
    ## 150         8        10     1     0        0        6         0         7
    ## 151         7         8     1    61        7        8         1         8
    ## 152         8        27     3     0        0        3         0         2
    ## 153         7         7     0     0        0        4         0         4
    ## 154         9         5     0     0        0        2         0        13
    ## 155         8        15     2     0        0        4         0         2
    ## 156         7         6     0     1        0        4         0         5
    ## 157         7        10     1     0        0        5         0        12
    ## 158         7         2     0     1        0        3         0         5
    ## 159         8         6     0     0        0        3         0         2
    ## 160         7        16     2     0        0        5         0         3
    ## 161         8        15     2     0        0        8         1         9
    ## 162         8        11     1    19        2        6         0        10
    ## 163         8        23     3     0        0        5         0         1
    ## 164        10         6     1     0        0       10         1         7
    ## 165         9         4     0     0        0        8         1         4
    ## 166         9        11     1     0        0        8         1         7
    ## 167         9        26     3     2        0        2         0         4
    ## 168         9         8     1     0        0       10         1         4
    ## 169         9        14     2     0        0        5         0         5
    ## 170         9        12     1     0        0        4         0         3
    ## 171        10        15     2     0        0        2         0         2
    ## 172         9         8     1     0        0        6         0         5
    ## 173         9         7     1     0        0        7         1         8
    ## 174         9         7     1     0        0        2         0         7
    ## 175         9         8     1     0        0        9         1         5
    ## 176         8         8     1     0        0        8         1         1
    ## 177        10        16     2     0        0        4         0         4
    ## 178         8         9     1     0        0        5         0         4
    ## 179         8        12     1     4        0       10         1         6
    ## 180         9        13     1     0        0        3         0         1
    ## 181         9        23     3     0        0        7         1         6
    ## 182         9         6     0     0        0        8         1         1
    ## 183         8        18     2    21        2        7         0         5
    ## 184         9         6     0     0        0        1         0         6
    ## 185         9         9     1     0        0        8         1        11
    ## 186         9        12     1     0        0        3         0         4
    ## 187         9        13     1     3        0        7         1         4
    ## 188         8        16     2     0        0       13         1         3
    ## 189        11        19     3     0        0        7         1         2
    ## 190        10        16     2     1        0        5         0         1
    ## 191        10         5     0     0        0        3         0         3
    ## 192        10        19     2     0        0        6         0         6
    ## 193        10        10     1     0        0        6         0         8
    ## 194         9         9     1     0        0        8         1         2
    ## 195         9        14     1     0        0        5         0         8
    ## 196        10        10     1     1        0        1         0         3
    ## 197         9        17     2     0        0        4         0         4
    ## 198         9        15     1     0        0        4         0         5
    ## 199         9        22     2     1        0        8         1         5
    ## 200        10        18     2     0        0       11         1         2
    ## 201        11        17     2     0        0        5         0         4
    ## 202         9        14     1     0        0        8         1         6
    ## 203        11        10     1     0        0        9         1         3
    ## 204         9        16     2     0        0        8         1         7
    ## 205        11        17     2     2        0        4         0        10
    ## 206        11        16     2     0        0        7         1         5
    ## 207        16        13     2     0        0        6         1         5
    ## 208        11        19     2     0        0        4         0         6
    ## 209        12        11     1     0        0        6         0         3
    ## 210        12        15     2     0        0        4         0         8
    ## 211        11        23     2     0        0        8         1        13
    ## 212        11        18     2     1        0       13         1         3
    ## 213        11        20     2    58        7       12         1         5
    ## 214        13        14     2     0        0        7         1         3
    ## 215        16        11     1     1        0        9         1         8
    ## 216        15        12     1     0        0        9         1         5
    ## 217        14        24     3     3        0       11         1         9
    ## 218        16        14     2     0        0       16         2         5
    ## 219        19        23     3     0        0        2         0         9
    ## 220        17        19     2     0        0        5         0         5
    ## 221        15        21     2     0        0       12         1         9
    ## 222        16        19     2     0        0        8         1        16
    ## 223        19        20     2     1        0        6         0        10
    ## 224        19        17     2     0        0        7         1         8
    ## 225        21        17     2     0        0       11         1         8
    ## 226        21        27     3     1        0        7         1         6
    ## 227        21        16     2     0        0        4         0         5
    ## 228        20        23     2     1        0       27         3         8
    ## 229       6.8      1924     1  1462     25.3      876       0.3       873
    ##     Frees agnst Frees agnst Tackles Tackles Goals Goals Behinds Behinds
    ## 1           TOT         AVG     TOT     AVG   TOT   AVG     TOT     AVG
    ## 2             0           0       0       0     0     0       0       0
    ## 3             0           0       0       0     0     0       0       0
    ## 4             0           0       0       0     0     0       0       0
    ## 5             0           0       0       0     0     0       0       0
    ## 6             0           0       0       0     0     0       0       0
    ## 7             0           0       0       0     0     0       0       0
    ## 8             0           0       0       0     0     0       0       0
    ## 9             0           0       0       0     0     0       0       0
    ## 10            0           0       0       0     0     0       0       0
    ## 11            0           0       0       0     0     0       0       0
    ## 12            0           0       0       0     0     0       0       0
    ## 13            0           0       0       0     0     0       0       0
    ## 14            0           0       0       0     0     0       0       0
    ## 15            0           0       0       0     0     0       0       0
    ## 16            0           1       1       0     0     0       0       6
    ## 17            0           0       0       0     0     0       0       3
    ## 18            0           2       1       0     0     0       0      11
    ## 19            1           2       2       0     0     0       0      13
    ## 20            0           0       0       0     0     0       0       9
    ## 21            0           6       2       0     0     0       0      30
    ## 22            0           5       5       0     0     0       0      34
    ## 23            3           4       4       0     0     0       0      21
    ## 24            0           0       0       0     0     0       0      11
    ## 25            0           5       1       0     0     0       0      63
    ## 26            0           1       0       0     0     0       0      19
    ## 27            0           0       0       0     0     0       0      17
    ## 28            0           0       0       0     0     0       0      18
    ## 29            0           1       0       0     0     0       0      24
    ## 30            0           2       1       0     0     0       0      26
    ## 31            0           5       1       0     0     0       0      32
    ## 32            0           2       1       0     0     0       0      30
    ## 33            0           1       1       0     0     0       0      34
    ## 34            0           3       1       0     0     0       0      34
    ## 35            1           0       0       0     0     0       0      28
    ## 36            0           8       2       1     0     1       0      69
    ## 37            1           5       2       0     0     0       0      44
    ## 38            1           4       1       0     0     0       0      39
    ## 39            0           9       3       1     0     0       0      73
    ## 40            0           5       1       1     0     1       0      65
    ## 41            1           8       2       0     0     0       0      66
    ## 42            0          16       5       0     0     0       0     143
    ## 43            0           6       3       1     0     0       0      77
    ## 44            0           3       1       0     0     0       0      50
    ## 45            1           4       1       1     0     0       0      61
    ## 46            0          14       2       0     0     0       0     109
    ## 47            0           1       0       0     0     0       0      59
    ## 48            0           3       0       1     0     2       0      96
    ## 49            0           8       1       1     0     0       0      83
    ## 50            0          10       1       0     0     0       0     119
    ## 51            0           4       0       4     0     2       0     103
    ## 52            0           1       0       1     0     0       0      78
    ## 53            0           8       1       0     0     0       0      74
    ## 54            0          14       3       0     0     0       0     105
    ## 55            0           8       2       0     0     0       0      82
    ## 56            0          10       1       1     0     0       0     134
    ## 57            0           6       1       0     0     2       0      91
    ## 58            1           3       1       0     0     0       0      74
    ## 59            0           5       1       0     0     0       0      71
    ## 60            1          13       2       1     0     0       0     101
    ## 61            0          12       1       0     0     0       0     103
    ## 62            0           8       2       0     0     0       0      96
    ## 63            0          10       2       1     0     3       0     131
    ## 64            1           7       1       0     0     1       0      83
    ## 65            0           9       1       0     0     1       0      99
    ## 66            0           4       1       2     0     2       0     102
    ## 67            0           6       1       1     0     0       0     113
    ## 68            1           3       0       2     0     3       0      99
    ## 69            0           9       1       0     0     0       0     241
    ## 70            0          13       2       0     0     0       0     103
    ## 71            1          21       4       0     0     0       0     144
    ## 72            0          10       1       0     0     1       0     128
    ## 73            1           8       4       3     1     1       0     139
    ## 74            1          13       2       1     0     0       0     107
    ## 75            0           5       1       0     0     0       0     105
    ## 76            0          17       2       0     0     0       0     176
    ## 77            1          13       1       1     0     0       0     139
    ## 78            1          16       2       0     0     1       0     114
    ## 79            1          23       3       1     0     1       0     180
    ## 80            0           5       0       2     0     1       0     145
    ## 81            0           4       1       0     0     0       0     100
    ## 82            0           8       2       0     0     2       0     134
    ## 83            0          12       1       4     0     3       0     149
    ## 84            0          20       4       1     0     0       0     179
    ## 85            0          26       5       0     0     0       0     182
    ## 86            0          15       2       0     0     0       0     175
    ## 87            0           5       0       1     0     0       0     201
    ## 88            0           8       1       0     0     0       0     134
    ## 89            0          16       2       0     0     0       0     208
    ## 90            0          10       1       4     0     3       0     194
    ## 91            0          16       2       0     0     0       0     195
    ## 92            0          17       2       0     0     0       0     153
    ## 93            0           6       0       7     1     8       1     209
    ## 94            0          20       2       0     0     0       0     213
    ## 95            0           9       1       2     0     3       0     179
    ## 96            0          13       2       0     0     0       0     161
    ## 97            0          13       1       1     0     0       0     178
    ## 98            0          16       2       0     0     0       0     154
    ## 99            0           9       1       3     0     0       0     188
    ## 100           0          17       2       1     0     0       0     184
    ## 101           0           3       0       1     0     0       0     157
    ## 102           0           5       1       0     0     0       0     143
    ## 103           0          16       2       0     0     0       0     159
    ## 104           0           9       1       0     0     1       0     173
    ## 105           1          29       4       0     0     0       0     291
    ## 106           0          21       3       9     1     3       0     269
    ## 107           0           7       1       2     0     3       0     201
    ## 108           0           8       1       0     0     1       0     356
    ## 109           0          14       2       4     0     8       1     206
    ## 110           1          22       3       0     0     1       0     203
    ## 111           0           9       1       0     0     0       0     171
    ## 112           0           9       1       7     1     1       0     232
    ## 113           0          18       2       0     0     0       0     231
    ## 114           0          13       1       4     0     2       0     199
    ## 115           1          10       1       1     0     0       0     145
    ## 116           0          12       1       0     0     0       0     202
    ## 117           1          18       3       1     0     3       0     207
    ## 118           0          18       3       0     0     3       0     206
    ## 119           0          23       3       1     0     0       0     269
    ## 120           0          16       2       1     0     1       0     218
    ## 121           0          15       2       1     0     0       0     211
    ## 122           1          18       3       0     0     1       0     198
    ## 123           0          16       2       0     0     0       0     182
    ## 124           0           7       0       0     0     0       0     156
    ## 125           1           6       0       3     0     7       1     229
    ## 126           0          18       2       1     0     0       0     215
    ## 127           0           7       1       5     0     5       0     229
    ## 128           0          15       2       5     0     2       0     247
    ## 129           0          18       2       3     0     0       0     237
    ## 130           0          16       2       0     0     1       0     199
    ## 131           0          18       2      14     2     4       0     332
    ## 132           0          21       2       9     1     1       0     296
    ## 133           0          16       2       2     0     0       0     332
    ## 134           0           8       1       0     0     0       0     217
    ## 135           0           4       0       0     0     1       0     309
    ## 136           0          19       2       0     0     0       0     252
    ## 137           0          13       1       0     0     0       0     177
    ## 138           0           9       1       0     0     0       0     199
    ## 139           0           6       0       1     0     0       0     215
    ## 140           0          10       1       0     0     0       0     234
    ## 141           0          43       6       1     0     2       0     329
    ## 142           1          11       1       4     0     2       0     221
    ## 143           0          13       1       0     0     0       0     233
    ## 144           0          17       2       2     0     3       0     268
    ## 145           0          13       1       1     0     3       0     228
    ## 146           1          12       2       0     0     0       0     230
    ## 147           0           5       0       0     0     2       0     231
    ## 148           0          18       2       0     0     2       0     348
    ## 149           2          16       2       4     0     9       1     279
    ## 150           1          14       2       2     0     2       0     234
    ## 151           1          27       3       0     0     0       0     322
    ## 152           0          17       2       6     0     3       0     344
    ## 153           0          18       2       0     0     0       0     227
    ## 154           2          19       3       0     0     0       0     213
    ## 155           0          15       2       0     0     1       0     268
    ## 156           0          27       3       0     0     1       0     262
    ## 157           1          16       2       3     0     4       0     242
    ## 158           0          11       1       0     0     0       0     196
    ## 159           0          22       3       1     0     0       0     261
    ## 160           0          23       2       5     0     3       0     335
    ## 161           1          27       3       0     0     2       0     307
    ## 162           1          28       4       3     0     5       0     323
    ## 163           0          17       2       5     0     3       0     348
    ## 164           1          20       3       4     0     0       0     282
    ## 165           0          39       5       2     0     1       0     338
    ## 166           1          17       2       2     0     0       0     261
    ## 167           0          10       1       4     0     3       0     300
    ## 168           0          27       3       1     0     0       0     302
    ## 169           0          27       3       0     0     0       0     315
    ## 170           0          17       2       0     0     1       0     256
    ## 171           0          15       2       0     0     0       0     281
    ## 172           0          32       4       0     0     0       0     317
    ## 173           1          32       4       1     0     2       0     315
    ## 174           1          11       1       0     0     0       0     228
    ## 175           0          39       5       0     0     1       0     341
    ## 176           0          25       3       1     0     1       0     319
    ## 177           0          13       2       5     0     2       0     295
    ## 178           0          16       2       0     0     0       0     260
    ## 179           0          17       2       1     0     0       0     297
    ## 180           0          16       2       0     0     0       0     279
    ## 181           0          22       3       0     0     0       0     330
    ## 182           0          21       3       0     0     1       0     289
    ## 183           0          24       3      11     1     8       1     414
    ## 184           0          31       4       1     0     5       0     302
    ## 185           1          21       3       1     0     2       0     280
    ## 186           0          14       2       0     0     0       0     252
    ## 187           0          29       4       0     0     0       0     335
    ## 188           0          19       2       0     0     2       0     330
    ## 189           0          27       4       2     0     1       0     364
    ## 190           0           8       1       0     0     0       0     280
    ## 191           0          28       4       0     0     2       0     320
    ## 192           0           4       0       1     0     1       0     260
    ## 193           1          15       2       3     0     2       0     276
    ## 194           0          16       2       2     0     2       0     288
    ## 195           1          19       2       2     0     3       0     306
    ## 196           0          18       2       0     0     1       0     291
    ## 197           0          14       1       2     0     0       0     316
    ## 198           0          23       2       0     0     0       0     334
    ## 199           0          12       1       2     0     4       0     331
    ## 200           0          12       1       2     0     4       0     323
    ## 201           0          13       1       1     0     0       0     304
    ## 202           0          24       3       0     0     0       0     336
    ## 203           0          22       3       0     0     0       0     329
    ## 204           0          15       1       1     0     0       0     313
    ## 205           1          13       1       5     0     2       0     315
    ## 206           0          32       4       3     0     1       0     408
    ## 207           1          14       2       0     0     1       0     299
    ## 208           0          26       3       1     0     0       0     351
    ## 209           0          26       3       2     0     2       0     376
    ## 210           1          23       3       1     0     0       0     369
    ## 211           1          32       4       0     0     0       0     405
    ## 212           0          41       5       3     0     0       0     490
    ## 213           0          15       1       6     0     4       0     475
    ## 214           0          49       7       1     0     0       0     515
    ## 215           1          40       6       4     0     0       0     483
    ## 216           0          31       4       1     0     2       0     443
    ## 217           1          39       4       2     0     2       0     540
    ## 218           0          19       2       0     0     2       0     414
    ## 219           1          17       2       1     0     0       0     404
    ## 220           0          23       3       0     0     1       0     469
    ## 221           1          38       4       1     0     1       0     541
    ## 222           2          76       9       0     0     2       0     676
    ## 223           1          32       4       1     0     1       0     524
    ## 224           1          26       3       6     0    12       1     559
    ## 225           1          20       2       0     0     4       0     504
    ## 226           0          23       3       2     0     1       0     582
    ## 227           0          36       5       1     0     1       0     573
    ## 228           1          30       3      10     1     8       1     705
    ## 229         0.3        3202     1.9     267     0   234       0   47608
    ##     AFL Fantasy AFL Fantasy
    ## 1           TOT         AVG
    ## 2             0        <NA>
    ## 3             0        <NA>
    ## 4             0        <NA>
    ## 5             0        <NA>
    ## 6             0        <NA>
    ## 7             0        <NA>
    ## 8             0        <NA>
    ## 9             0        <NA>
    ## 10            0        <NA>
    ## 11            0        <NA>
    ## 12            0        <NA>
    ## 13            0        <NA>
    ## 14            0        <NA>
    ## 15            0        <NA>
    ## 16            6        <NA>
    ## 17            3        <NA>
    ## 18            5        <NA>
    ## 19           13        <NA>
    ## 20            9        <NA>
    ## 21           10        <NA>
    ## 22           34        <NA>
    ## 23           21        <NA>
    ## 24           11        <NA>
    ## 25           21        <NA>
    ## 26            9        <NA>
    ## 27           17        <NA>
    ## 28            6        <NA>
    ## 29           12        <NA>
    ## 30           13        <NA>
    ## 31            8        <NA>
    ## 32           15        <NA>
    ## 33           34        <NA>
    ## 34           17        <NA>
    ## 35           28        <NA>
    ## 36           17        <NA>
    ## 37           22        <NA>
    ## 38            9        <NA>
    ## 39           24        <NA>
    ## 40           16        <NA>
    ## 41           16        <NA>
    ## 42           47        <NA>
    ## 43           38        <NA>
    ## 44           16        <NA>
    ## 45           20        <NA>
    ## 46           21        <NA>
    ## 47           19        <NA>
    ## 48           24        <NA>
    ## 49           16        <NA>
    ## 50           14        <NA>
    ## 51           17        <NA>
    ## 52           26        <NA>
    ## 53           12        <NA>
    ## 54           26        <NA>
    ## 55           27        <NA>
    ## 56           22        <NA>
    ## 57           18        <NA>
    ## 58           37        <NA>
    ## 59           23        <NA>
    ## 60           20        <NA>
    ## 61           14        <NA>
    ## 62           32        <NA>
    ## 63           26        <NA>
    ## 64           11        <NA>
    ## 65           16        <NA>
    ## 66           25        <NA>
    ## 67           28        <NA>
    ## 68           19        <NA>
    ## 69           34        <NA>
    ## 70           17        <NA>
    ## 71           28        <NA>
    ## 72           18        <NA>
    ## 73           69        <NA>
    ## 74           21        <NA>
    ## 75           26        <NA>
    ## 76           25        <NA>
    ## 77           19        <NA>
    ## 78           16        <NA>
    ## 79           25        <NA>
    ## 80           24        <NA>
    ## 81           25        <NA>
    ## 82           33        <NA>
    ## 83           21        <NA>
    ## 84           35        <NA>
    ## 85           36        <NA>
    ## 86           29        <NA>
    ## 87           28        <NA>
    ## 88           19        <NA>
    ## 89           29        <NA>
    ## 90           32        <NA>
    ## 91           27        <NA>
    ## 92           21        <NA>
    ## 93           29        <NA>
    ## 94           30        <NA>
    ## 95           29        <NA>
    ## 96           26        <NA>
    ## 97           25        <NA>
    ## 98           22        <NA>
    ## 99           26        <NA>
    ## 100          30        <NA>
    ## 101          31        <NA>
    ## 102          35        <NA>
    ## 103          19        <NA>
    ## 104          28        <NA>
    ## 105          41        <NA>
    ## 106          38        <NA>
    ## 107          33        <NA>
    ## 108          50        <NA>
    ## 109          34        <NA>
    ## 110          33        <NA>
    ## 111          24        <NA>
    ## 112          33        <NA>
    ## 113          33        <NA>
    ## 114          28        <NA>
    ## 115          24        <NA>
    ## 116          28        <NA>
    ## 117          34        <NA>
    ## 118          41        <NA>
    ## 119          38        <NA>
    ## 120          36        <NA>
    ## 121          30        <NA>
    ## 122          39        <NA>
    ## 123          26        <NA>
    ## 124          19        <NA>
    ## 125          32        <NA>
    ## 126          30        <NA>
    ## 127          32        <NA>
    ## 128          41        <NA>
    ## 129          29        <NA>
    ## 130          28        <NA>
    ## 131          47        <NA>
    ## 132          37        <NA>
    ## 133          47        <NA>
    ## 134          31        <NA>
    ## 135          38        <NA>
    ## 136          31        <NA>
    ## 137          25        <NA>
    ## 138          24        <NA>
    ## 139          30        <NA>
    ## 140          29        <NA>
    ## 141          47        <NA>
    ## 142          27        <NA>
    ## 143          33        <NA>
    ## 144          38        <NA>
    ## 145          32        <NA>
    ## 146          38        <NA>
    ## 147          33        <NA>
    ## 148          49        <NA>
    ## 149          34        <NA>
    ## 150          33        <NA>
    ## 151          40        <NA>
    ## 152          49        <NA>
    ## 153          28        <NA>
    ## 154          35        <NA>
    ## 155          38        <NA>
    ## 156          32        <NA>
    ## 157          30        <NA>
    ## 158          24        <NA>
    ## 159          37        <NA>
    ## 160          41        <NA>
    ## 161          43        <NA>
    ## 162          46        <NA>
    ## 163          49        <NA>
    ## 164          47        <NA>
    ## 165          48        <NA>
    ## 166          37        <NA>
    ## 167          42        <NA>
    ## 168          43        <NA>
    ## 169          45        <NA>
    ## 170          36        <NA>
    ## 171          46        <NA>
    ## 172          45        <NA>
    ## 173          45        <NA>
    ## 174          32        <NA>
    ## 175          48        <NA>
    ## 176          39        <NA>
    ## 177          49        <NA>
    ## 178          32        <NA>
    ## 179          37        <NA>
    ## 180          39        <NA>
    ## 181          47        <NA>
    ## 182          41        <NA>
    ## 183          51        <NA>
    ## 184          43        <NA>
    ## 185          40        <NA>
    ## 186          36        <NA>
    ## 187          47        <NA>
    ## 188          41        <NA>
    ## 189          60        <NA>
    ## 190          40        <NA>
    ## 191          45        <NA>
    ## 192          37        <NA>
    ## 193          39        <NA>
    ## 194          36        <NA>
    ## 195          38        <NA>
    ## 196          41        <NA>
    ## 197          39        <NA>
    ## 198          41        <NA>
    ## 199          41        <NA>
    ## 200          46        <NA>
    ## 201          43        <NA>
    ## 202          42        <NA>
    ## 203          47        <NA>
    ## 204          39        <NA>
    ## 205          45        <NA>
    ## 206          58        <NA>
    ## 207          59        <NA>
    ## 208          50        <NA>
    ## 209          53        <NA>
    ## 210          52        <NA>
    ## 211          50        <NA>
    ## 212          61        <NA>
    ## 213          59        <NA>
    ## 214          73        <NA>
    ## 215          80        <NA>
    ## 216          63        <NA>
    ## 217          67        <NA>
    ## 218          59        <NA>
    ## 219          67        <NA>
    ## 220          67        <NA>
    ## 221          67        <NA>
    ## 222          84        <NA>
    ## 223          74        <NA>
    ## 224          79        <NA>
    ## 225          72        <NA>
    ## 226          83        <NA>
    ## 227          81        <NA>
    ## 228          88        <NA>
    ## 229        32.5        <NA>
