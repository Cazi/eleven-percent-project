import React from 'react'
import {
    VictoryLine, VictoryChart,
    VictoryAxis, VictoryTheme, VictoryBar, VictoryLabel
} from 'victory';
import { useState } from 'react';
import TotalStudentsBarGraph from '../atoms/TotalStudentsBarGraph';
import TotalStudentPercentageGraph from '../atoms/TotalStudentPercentageGraph';
//Data
//Total Students at Brown
const totalBlackStudentsPercent = [
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
//Years array for independent axis on graph
const tickValuesYrs =
    [1980, 1984, 1986, 1988,
        1990, 1991, 1992, 1993, 1994,
        1995, 1996, 1997, 1998, 1999,
        2000, 2001, 2002, 2003, 2004,
        2005, 2006, 2007, 2008, 2009,
        2010, 2011, 2012, 2013, 2014,
        2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022
    ]
const tickValuesPercents = [
    5.56, 6.04, 6.31, 6.04,
    5.89, 5.79, 5.83, 5.54, 5.59, 5.81, 5.73, 5.91, 5.67, 5.49, 5.67, 5.51, 5.60, 5.81, 5.93, 6.08, 6.06, 5.96, 6.02, 5.16, 5.30, 5.36, 5.49, 5.74, 5.99, 5.97, 5.86, 5.84, 6.05, 6.50, 7.04, 7.40, 7.48
]

const tickValues2 = [1, 2, 3, 4, 5, 6, 7, 8.9, 10]
const DataVis = () => {
    const [graph, setGraph] = useState('totalStudents')
    if (graph === 'totalStudents') {
        return (
            <div>
                <TotalStudentPercentageGraph
                    tickValuesX={tickValuesYrs}
                    tickValuesY={tickValues2}
                    data={totalBlackStudentsPercent} />
             
                <button onClick={() => {
                    setGraph('totalPercentage')
                    console.log("clicked")
                }}>
                    See bar graph
                </button>
            </div>
        )
    } else {
        return (
            <div>
                <TotalStudentsBarGraph tickValues={tickValuesYrs} data={totalBlackStudentsPercent} />
                <button onClick={() => {
                    setGraph('totalStudents')
                    console.log("clicked")
                }}>
                    SEE Percents
                </button>
            </div>
        )
    }

}


export default DataVis