import React from 'react'

import { useState } from 'react';

import StudentBarGraph from '../atoms/StudentBarGraph';
import StudentPercentageGraph from '../atoms/StudentPercentageGraph';
import UgBarGraph from '../atoms/UgBarGraph';
import UgPercentageGraph from '../atoms/UgPercentageGraph'
import GraphButtons from './GraphButtons';

//Students Data
const studentData = [
    {
        "Year": 1980,
        "TOTAL STUDENTS": 6867,
        "TOTAL BLACK STUDENTS": 382,
        "Percentage": 5.56
    },
    {
        "Year": 1984,
        "TOTAL STUDENTS": 7099,
        "TOTAL BLACK STUDENTS": 429,
        "Percentage": 6.04
    },
    {
        "Year": 1986,
        "TOTAL STUDENTS": 7357,
        "TOTAL BLACK STUDENTS": 464,
        "Percentage": 6.31
    },
    {
        "Year": 1988,
        "TOTAL STUDENTS": 7612,
        "TOTAL BLACK STUDENTS": 460,
        "Percentage": 6.04
    },
    {
        "Year": 1990,
        "TOTAL STUDENTS": 7577,
        "TOTAL BLACK STUDENTS": 446,
        "Percentage": 5.89
    },
    {
        "Year": 1991,
        "TOTAL STUDENTS": 7532,
        "TOTAL BLACK STUDENTS": 436,
        "Percentage": 5.79
    },
    {
        "Year": 1992,
        "TOTAL STUDENTS": 7593,
        "TOTAL BLACK STUDENTS": 443,
        "Percentage": 5.83
    },
    {
        "Year": 1993,
        "TOTAL STUDENTS": 7655,
        "TOTAL BLACK STUDENTS": 424,
        "Percentage": 5.54
    },
    {
        "Year": 1994,
        "TOTAL STUDENTS": 7801,
        "TOTAL BLACK STUDENTS": 436,
        "Percentage": 5.59
    },
    {
        "Year": 1995,
        "TOTAL STUDENTS": 7641,
        "TOTAL BLACK STUDENTS": 444,
        "Percentage": 5.81
    },
    {
        "Year": 1996,
        "TOTAL STUDENTS": 7626,
        "TOTAL BLACK STUDENTS": 437,
        "Percentage": 5.73
    },
    {
        "Year": 1997,
        "TOTAL STUDENTS": 7579,
        "TOTAL BLACK STUDENTS": 448,
        "Percentage": 5.91
    },
    {
        "Year": 1998,
        "TOTAL STUDENTS": 7782,
        "TOTAL BLACK STUDENTS": 441,
        "Percentage": 5.67
    },
    {
        "Year": 1999,
        "TOTAL STUDENTS": 7758,
        "TOTAL BLACK STUDENTS": 426,
        "Percentage": 5.49
    },
    {
        "Year": 2000,
        "TOTAL STUDENTS": 7723,
        "TOTAL BLACK STUDENTS": 438,
        "Percentage": 5.67
    },
    {
        "Year": 2001,
        "TOTAL STUDENTS": 7774,
        "TOTAL BLACK STUDENTS": 428,
        "Percentage": 5.51
    },
    {
        "Year": 2002,
        "TOTAL STUDENTS": 7892,
        "TOTAL BLACK STUDENTS": 442,
        "Percentage": 5.6
    },
    {
        "Year": 2003,
        "TOTAL STUDENTS": 7882,
        "TOTAL BLACK STUDENTS": 458,
        "Percentage": 5.81
    },
    {
        "Year": 2004,
        "TOTAL STUDENTS": 8004,
        "TOTAL BLACK STUDENTS": 475,
        "Percentage": 5.93
    },
    {
        "Year": 2005,
        "TOTAL STUDENTS": 8261,
        "TOTAL BLACK STUDENTS": 502,
        "Percentage": 6.08
    },
    {
        "Year": 2006,
        "TOTAL STUDENTS": 8125,
        "TOTAL BLACK STUDENTS": 492,
        "Percentage": 6.06
    },
    {
        "Year": 2007,
        "TOTAL STUDENTS": 8167,
        "TOTAL BLACK STUDENTS": 487,
        "Percentage": 5.96
    },
    {
        "Year": 2008,
        "TOTAL STUDENTS": 8318,
        "TOTAL BLACK STUDENTS": 501,
        "Percentage": 6.02
    },
    {
        "Year": 2009,
        "TOTAL STUDENTS": 8574,
        "TOTAL BLACK STUDENTS": 442,
        "Percentage": 5.16
    },
    {
        "Year": 2010,
        "TOTAL STUDENTS": 8705,
        "TOTAL BLACK STUDENTS": 461,
        "Percentage": 5.3
    },
    {
        "Year": 2011,
        "TOTAL STUDENTS": 8768,
        "TOTAL BLACK STUDENTS": 470,
        "Percentage": 5.36
    },
    {
        "Year": 2012,
        "TOTAL STUDENTS": 8885,
        "TOTAL BLACK STUDENTS": 488,
        "Percentage": 5.49
    },
    {
        "Year": 2013,
        "TOTAL STUDENTS": 8943,
        "TOTAL BLACK STUDENTS": 513,
        "Percentage": 5.74
    },
    {
        "Year": 2014,
        "TOTAL STUDENTS": 9181,
        "TOTAL BLACK STUDENTS": 550,
        "Percentage": 5.99
    },
    {
        "Year": 2015,
        "TOTAL STUDENTS": 9458,
        "TOTAL BLACK STUDENTS": 565,
        "Percentage": 5.97
    },
    {
        "Year": 2016,
        "TOTAL STUDENTS": 9781,
        "TOTAL BLACK STUDENTS": 573,
        "Percentage": 5.86
    },
    {
        "Year": 2017,
        "TOTAL STUDENTS": 10095,
        "TOTAL BLACK STUDENTS": 590,
        "Percentage": 5.84
    },
    {
        "Year": 2018,
        "TOTAL STUDENTS": 10257,
        "TOTAL BLACK STUDENTS": 621,
        "Percentage": 6.05
    },
    {
        "Year": 2019,
        "TOTAL STUDENTS": 10333,
        "TOTAL BLACK STUDENTS": 672,
        "Percentage": 6.5
    },
    {
        "Year": 2020,
        "TOTAL STUDENTS": 9948,
        "TOTAL BLACK STUDENTS": 700,
        "Percentage": 7.04
    },
    {
        "Year": 2021,
        "TOTAL STUDENTS": 10696,
        "TOTAL BLACK STUDENTS": 791,
        "Percentage": 7.4
    },
    {
        "Year": 2022,
        "TOTAL STUDENTS": 11151,
        "TOTAL BLACK STUDENTS": 834,
        "Percentage": 7.48
    }
]

//Undergraduate Students Data
const undergraduateData = [{
    "YEAR": 1980,
    "TOTAL STUDENTS": 5414,
    "TOTAL BLACK STUDENTS": 335,
    "PERCENTAGE": 6.19
},
{
    "YEAR": 1984,
    "TOTAL STUDENTS": 5569,
    "TOTAL BLACK STUDENTS": 380,
    "PERCENTAGE": 6.82
},
{
    "YEAR": 1986,
    "TOTAL STUDENTS": 5747,
    "TOTAL BLACK STUDENTS": 410,
    "PERCENTAGE": 7.13
},
{
    "YEAR": 1988,
    "TOTAL STUDENTS": 5957,
    "TOTAL BLACK STUDENTS": 414,
    "PERCENTAGE": 6.95
},
{
    "YEAR": 1990,
    "TOTAL STUDENTS": 5922,
    "TOTAL BLACK STUDENTS": 393,
    "PERCENTAGE": 6.64
},
{
    "YEAR": 1991,
    "TOTAL STUDENTS": 5906,
    "TOTAL BLACK STUDENTS": 384,
    "PERCENTAGE": 6.5
},
{
    "YEAR": 1992,
    "TOTAL STUDENTS": 5906,
    "TOTAL BLACK STUDENTS": 385,
    "PERCENTAGE": 6.52
},
{
    "YEAR": 1993,
    "TOTAL STUDENTS": 5992,
    "TOTAL BLACK STUDENTS": 370,
    "PERCENTAGE": 6.17
},
{
    "YEAR": 1994,
    "TOTAL STUDENTS": 6127,
    "TOTAL BLACK STUDENTS": 374,
    "PERCENTAGE": 6.1
},
{
    "YEAR": 1995,
    "TOTAL STUDENTS": 5942,
    "TOTAL BLACK STUDENTS": 371,
    "PERCENTAGE": 6.24
},
{
    "YEAR": 1996,
    "TOTAL STUDENTS": 5963,
    "TOTAL BLACK STUDENTS": 362,
    "PERCENTAGE": 6.07
},
{
    "YEAR": 1997,
    "TOTAL STUDENTS": 5958,
    "TOTAL BLACK STUDENTS": 368,
    "PERCENTAGE": 6.18
},
{
    "YEAR": 1998,
    "TOTAL STUDENTS": 6112,
    "TOTAL BLACK STUDENTS": 375,
    "PERCENTAGE": 6.14
},
{
    "YEAR": 1999,
    "TOTAL STUDENTS": 6108,
    "TOTAL BLACK STUDENTS": 362,
    "PERCENTAGE": 5.93
},
{
    "YEAR": 2000,
    "TOTAL STUDENTS": 6029,
    "TOTAL BLACK STUDENTS": 363,
    "PERCENTAGE": 6.02
},
{
    "YEAR": 2001,
    "TOTAL STUDENTS": 5999,
    "TOTAL BLACK STUDENTS": 350,
    "PERCENTAGE": 5.83
},
{
    "YEAR": 2002,
    "TOTAL STUDENTS": 6030,
    "TOTAL BLACK STUDENTS": 356,
    "PERCENTAGE": 5.9
},
{
    "YEAR": 2003,
    "TOTAL STUDENTS": 5906,
    "TOTAL BLACK STUDENTS": 374,
    "PERCENTAGE": 6.33
},
{
    "YEAR": 2004,
    "TOTAL STUDENTS": 6014,
    "TOTAL BLACK STUDENTS": 383,
    "PERCENTAGE": 6.37
},
{
    "YEAR": 2005,
    "TOTAL STUDENTS": 6176,
    "TOTAL BLACK STUDENTS": 411,
    "PERCENTAGE": 6.65
},
{
    "YEAR": 2006,
    "TOTAL STUDENTS": 6010,
    "TOTAL BLACK STUDENTS": 402,
    "PERCENTAGE": 6.69
},
{
    "YEAR": 2007,
    "TOTAL STUDENTS": 6008,
    "TOTAL BLACK STUDENTS": 395,
    "PERCENTAGE": 6.57
},
{
    "YEAR": 2008,
    "TOTAL STUDENTS": 6095,
    "TOTAL BLACK STUDENTS": 402,
    "PERCENTAGE": 6.6
},
{
    "YEAR": 2009,
    "TOTAL STUDENTS": 6244,
    "TOTAL BLACK STUDENTS": 340,
    "PERCENTAGE": 5.45
},
{
    "YEAR": 2010,
    "TOTAL STUDENTS": 6318,
    "TOTAL BLACK STUDENTS": 368,
    "PERCENTAGE": 5.82
},
{
    "YEAR": 2011,
    "TOTAL STUDENTS": 6380,
    "TOTAL BLACK STUDENTS": 367,
    "PERCENTAGE": 5.75
},
{
    "YEAR": 2012,
    "TOTAL STUDENTS": 6435,
    "TOTAL BLACK STUDENTS": 377,
    "PERCENTAGE": 5.86
},
{
    "YEAR": 2013,
    "TOTAL STUDENTS": 6455,
    "TOTAL BLACK STUDENTS": 402,
    "PERCENTAGE": 6.23
},
{
    "YEAR": 2014,
    "TOTAL STUDENTS": 6548,
    "TOTAL BLACK STUDENTS": 422,
    "PERCENTAGE": 6.44
},
{
    "YEAR": 2015,
    "TOTAL STUDENTS": 6652,
    "TOTAL BLACK STUDENTS": 426,
    "PERCENTAGE": 6.4
},
{
    "YEAR": 2016,
    "TOTAL STUDENTS": 6926,
    "TOTAL BLACK STUDENTS": 434,
    "PERCENTAGE": 6.27
},
{
    "YEAR": 2017,
    "TOTAL STUDENTS": 6988,
    "TOTAL BLACK STUDENTS": 433,
    "PERCENTAGE": 6.2
},
{
    "YEAR": 2018,
    "TOTAL STUDENTS": 7043,
    "TOTAL BLACK STUDENTS": 441,
    "PERCENTAGE": 6.26
},
{
    "YEAR": 2019,
    "TOTAL STUDENTS": 7160,
    "TOTAL BLACK STUDENTS": 468,
    "PERCENTAGE": 6.54
},
{
    "YEAR": 2020,
    "TOTAL STUDENTS": 6792,
    "TOTAL BLACK STUDENTS": 482,
    "PERCENTAGE": 7.1
},
{
    "YEAR": 2021,
    "TOTAL STUDENTS": 7349,
    "TOTAL BLACK STUDENTS": 545,
    "PERCENTAGE": 7.42
},
{
    "YEAR": 2022,
    "TOTAL STUDENTS": 7665,
    "TOTAL BLACK STUDENTS": 572,
    "PERCENTAGE": 7.46
}]

//Graduate Students Data
const graduateData = [{
    "YEAR": 1980,
    "TOTAL STUDENTS": 1170,
    "TOTAL BLACK STUDENTS": 30,
    "PERCENTAGE": 2.56
},
{
    "YEAR": 1984,
    "TOTAL STUDENTS": 1234,
    "TOTAL BLACK STUDENTS": 24,
    "PERCENTAGE": 1.94
},
{
    "YEAR": 1986,
    "TOTAL STUDENTS": 1321,
    "TOTAL BLACK STUDENTS": 28,
    "PERCENTAGE": 2.12
},
{
    "YEAR": 1988,
    "TOTAL STUDENTS": 1368,
    "TOTAL BLACK STUDENTS": 32,
    "PERCENTAGE": 2.34
},
{
    "YEAR": 1990,
    "TOTAL STUDENTS": 1355,
    "TOTAL BLACK STUDENTS": 34,
    "PERCENTAGE": 2.51
},
{
    "YEAR": 1991,
    "TOTAL STUDENTS": 1320,
    "TOTAL BLACK STUDENTS": 35,
    "PERCENTAGE": 2.65
},
{
    "YEAR": 1992,
    "TOTAL STUDENTS": 1388,
    "TOTAL BLACK STUDENTS": 38,
    "PERCENTAGE": 2.74
},
{
    "YEAR": 1993,
    "TOTAL STUDENTS": 1352,
    "TOTAL BLACK STUDENTS": 35,
    "PERCENTAGE": 2.59
},
{
    "YEAR": 1994,
    "TOTAL STUDENTS": 1360,
    "TOTAL BLACK STUDENTS": 42,
    "PERCENTAGE": 3.09
},
{
    "YEAR": 1995,
    "TOTAL STUDENTS": 1368,
    "TOTAL BLACK STUDENTS": 48,
    "PERCENTAGE": 3.51
},
{
    "YEAR": 1996,
    "TOTAL STUDENTS": 1338,
    "TOTAL BLACK STUDENTS": 45,
    "PERCENTAGE": 3.36
},
{
    "YEAR": 1997,
    "TOTAL STUDENTS": 1298,
    "TOTAL BLACK STUDENTS": 45,
    "PERCENTAGE": 3.47
},
{
    "YEAR": 1998,
    "TOTAL STUDENTS": 1345,
    "TOTAL BLACK STUDENTS": 35,
    "PERCENTAGE": 2.6
},
{
    "YEAR": 1999,
    "TOTAL STUDENTS": 1334,
    "TOTAL BLACK STUDENTS": 33,
    "PERCENTAGE": 2.47
},
{
    "YEAR": 2000,
    "TOTAL STUDENTS": 1367,
    "TOTAL BLACK STUDENTS": 46,
    "PERCENTAGE": 3.37
},
{
    "YEAR": 2001,
    "TOTAL STUDENTS": 1450,
    "TOTAL BLACK STUDENTS": 47,
    "PERCENTAGE": 3.24
},
{
    "YEAR": 2002,
    "TOTAL STUDENTS": 1536,
    "TOTAL BLACK STUDENTS": 47,
    "PERCENTAGE": 3.06
},
{
    "YEAR": 2003,
    "TOTAL STUDENTS": 1635,
    "TOTAL BLACK STUDENTS": 47,
    "PERCENTAGE": 2.87
},
{
    "YEAR": 2004,
    "TOTAL STUDENTS": 1654,
    "TOTAL BLACK STUDENTS": 49,
    "PERCENTAGE": 2.96
},
{
    "YEAR": 2005,
    "TOTAL STUDENTS": 1734,
    "TOTAL BLACK STUDENTS": 49,
    "PERCENTAGE": 2.83
},
{
    "YEAR": 2006,
    "TOTAL STUDENTS": 1756,
    "TOTAL BLACK STUDENTS": 47,
    "PERCENTAGE": 2.68
},
{
    "YEAR": 2007,
    "TOTAL STUDENTS": 1786,
    "TOTAL BLACK STUDENTS": 58,
    "PERCENTAGE": 3.25
},
{
    "YEAR": 2008,
    "TOTAL STUDENTS": 1814,
    "TOTAL BLACK STUDENTS": 65,
    "PERCENTAGE": 3.58
},
{
    "YEAR": 2009,
    "TOTAL STUDENTS": 2330,
    "TOTAL BLACK STUDENTS": 102,
    "PERCENTAGE": 4.38
},
{
    "YEAR": 2010,
    "TOTAL STUDENTS": 2387,
    "TOTAL BLACK STUDENTS": 93,
    "PERCENTAGE": 3.9
},
{
    "YEAR": 2011,
    "TOTAL STUDENTS": 2388,
    "TOTAL BLACK STUDENTS": 103,
    "PERCENTAGE": 4.31
},
{
    "YEAR": 2012,
    "TOTAL STUDENTS": 2450,
    "TOTAL BLACK STUDENTS": 111,
    "PERCENTAGE": 4.53
},
{
    "YEAR": 2013,
    "TOTAL STUDENTS": 2359,
    "TOTAL BLACK STUDENTS": 107,
    "PERCENTAGE": 4.54
},
{
    "YEAR": 2014,
    "TOTAL STUDENTS": 2633,
    "TOTAL BLACK STUDENTS": 128,
    "PERCENTAGE": 4.86
},
{
    "YEAR": 2015,
    "TOTAL STUDENTS": 2806,
    "TOTAL BLACK STUDENTS": 139,
    "PERCENTAGE": 4.95
},
{
    "YEAR": 2016,
    "TOTAL STUDENTS": 2855,
    "TOTAL BLACK STUDENTS": 139,
    "PERCENTAGE": 4.87
},
{
    "YEAR": 2017,
    "TOTAL STUDENTS": 3107,
    "TOTAL BLACK STUDENTS": 157,
    "PERCENTAGE": 5.05
},
{
    "YEAR": 2018,
    "TOTAL STUDENTS": 3214,
    "TOTAL BLACK STUDENTS": 180,
    "PERCENTAGE": 5.6
},
{
    "YEAR": 2019,
    "TOTAL STUDENTS": 3173,
    "TOTAL BLACK STUDENTS": 204,
    "PERCENTAGE": 6.43
},
{
    "YEAR": 2020,
    "TOTAL STUDENTS": 3156,
    "TOTAL BLACK STUDENTS": 218,
    "PERCENTAGE": 6.91
},
{
    "YEAR": 2021,
    "TOTAL STUDENTS": 3347,
    "TOTAL BLACK STUDENTS": 246,
    "PERCENTAGE": 7.35
},
{
    "YEAR": 2022,
    "TOTAL STUDENTS": 3486,
    "TOTAL BLACK STUDENTS": 262,
    "PERCENTAGE": 7.52
}

]

//Years array for independent axis on all graphs
const yearValues =
    [1980, 1984, 1986, 1988,
        1990, 1991, 1992, 1993, 1994,
        1995, 1996, 1997, 1998, 1999,
        2000, 2001, 2002, 2003, 2004,
        2005, 2006, 2007, 2008, 2009,
        2010, 2011, 2012, 2013, 2014,
        2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022
    ]
//Percentage point array for dependent axis on percentage graphs
const percentRange = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const DataVis = () => {
    const [graph, setGraph] = useState('studentsBar')
    let displayGraph;
    if (graph === "studentsBar") {
        displayGraph =
            <>
                <StudentBarGraph
                    tickValues={yearValues}
                    data={studentData} />
            </>
    } else if (graph === "studentsPercent") {
        displayGraph =
            <>
                <StudentPercentageGraph
                    tickValuesX={yearValues}
                    tickValuesY={percentRange}
                    data={studentData} />
            </>
    } else if (graph === "undergradBar") {
        displayGraph =
            <>
                <UgBarGraph />
            </>
    } else if (graph === "undergradPercent") {
        displayGraph =
            <>
                <UgPercentageGraph />
            </>
    } else if (graph === "gradBar") {
        return (<>Placeholder 1</>)
    } else if (graph === "gradPercent") {
        return (<>Placeholder 2</>)
    } else {
        displayGraph =
            <>
                <StudentPercentageGraph
                    tickValuesX={yearValues}
                    tickValuesY={percentRange}
                    data={studentData} />
            </>
    }
    return (
        <div>
            {displayGraph}
            <GraphButtons setGraph={setGraph} />
        </div>
    )
}


export default DataVis