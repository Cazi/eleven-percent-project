import React from 'react'
import {
    VictoryLine, VictoryChart,
    VictoryAxis, VictoryTheme, VictoryBar
} from 'victory';
//Data
//Total Students at Brown
const totalStudents = [
    {
        Year: 1980,
        Students: 6867
    },
    {
        Year: 1984,
        Students: 7099
    },
    {
        Year: 1986,
        Students: 7357
    },
    {
        Year: 1988,
        Students: 7612
    },
    {
        Year: 1990,
        Students: 7577
    },
    {
        Year: 1991,
        Students: 7532
    },
    {
        Year: 1992,
        Students: 7593
    },
    {
        Year: 1993,
        Students: 7655
    },
    {
        Year: 1994,
        Students: 7801
    },
    {
        Year: 1995,
        Students: 7641
    },
    {
        Year: 1996,
        Students: 7626
    },
    {
        Year: 1997,
        Students: 7579
    },
    {
        Year: 1998,
        Students: 7782
    },
    {
        Year: 1999,
        Students: 7758
    },
    {
        Year: 2000,
        Students: 7723
    },
    {
        Year: 2001,
        Students: 7774
    },
    {
        Year: 2002,
        Students: 7892
    },
    {
        Year: 2003,
        Students: 7882
    },
    {
        Year: 2004,
        Students: 8004
    },
    {
        Year: 2005,
        Students: 8261
    },
    {
        Year: 2006,
        Students: 8125
    },
    {
        Year: 2007,
        Students: 8167
    },
    {
        Year: 2008,
        Students: 8318
    },
    {
        Year: 2009,
        Students: 8574
    },
    {
        Year: 2010,
        Students: 8705
    },
    {
        Year: 2011,
        Students: 8768
    },
    {
        Year: 2012,
        Students: 8885
    },
    {
        Year: 2013,
        Students: 8943
    },
    {
        Year: 2014,
        Students: 9181
    },
    {
        Year: 2015,
        Students: 9458
    },
    {
        Year: 2016,
        Students: 9781
    },
    {
        Year: 2017,
        Students: 10095
    },
    {
        Year: 2018,
        Students: 10257
    },
    {
        Year: 2019,
        Students: 10333
    },
    {
        Year: 2020,
        Students: 9948
    },
    {
        Year: 2021,
        Students: 10696
    },
    {
        Year: 2022,
        Students: 11151
    }
]

const totalBlackStudents = [
    {
        Year: 1980,
        TotalBlackStudents: 382
    },
    {
        Year: 1984,
        TotalBlackStudents: 429
    },
    {
        Year: 1986,
        TotalBlackStudents: 464
    },
    {
        Year: 1988,
        TotalBlackStudents: 460
    },
    {
        Year: 1990,
        TotalBlackStudents: 446
    },
    {
        Year: 1991,
        TotalBlackStudents: 436
    },
    {
        Year: 1992,
        TotalBlackStudents: 443
    },
    {
        Year: 1993,
        TotalBlackStudents: 424
    },
    {
        Year: 1994,
        TotalBlackStudents: 436
    },
    {
        Year: 1995,
        TotalBlackStudents: 444
    },
    {
        Year: 1996,
        TotalBlackStudents: 437
    },
    {
        Year: 1997,
        TotalBlackStudents: 448
    },
    {
        Year: 1998,
        TotalBlackStudents: 441
    },
    {
        Year: 1999,
        TotalBlackStudents: 426
    },
    {
        Year: 2000,
        TotalBlackStudents: 438
    },
    {
        Year: 2001,
        TotalBlackStudents: 428
    },
    {
        Year: 2002,
        TotalBlackStudents: 442
    },
    {
        Year: 2003,
        TotalBlackStudents: 458
    },
    {
        Year: 2004,
        TotalBlackStudents: 475
    },
    {
        Year: 2005,
        TotalBlackStudents: 502
    },
    {
        Year: 2006,
        TotalBlackStudents: 492
    },
    {
        Year: 2007,
        TotalBlackStudents: 487
    },
    {
        Year: 2008,
        TotalBlackStudents: 501
    },
    {
        Year: 2009,
        TotalBlackStudents: 442
    },
    {
        Year: 2010,
        TotalBlackStudents: 461
    },
    {
        Year: 2011,
        TotalBlackStudents: 470
    },
    {
        Year: 2012,
        TotalBlackStudents: 488
    },
    {
        Year: 2013,
        TotalBlackStudents: 513
    },
    {
        Year: 2014,
        TotalBlackStudents: 550
    },
    {
        Year: 2015,
        TotalBlackStudents: 565
    },
    {
        Year: 2016,
        TotalBlackStudents: 573
    },
    {
        Year: 2017,
        TotalBlackStudents: 590
    },
    {
        Year: 2018,
        TotalBlackStudents: 621
    },
    {
        Year: 2019,
        TotalBlackStudents: 672
    },
    {
        Year: 2020,
        TotalBlackStudents: 700
    },
    {
        Year: 2021,
        TotalBlackStudents: 791
    },
    {
        Year: 2022,
        TotalBlackStudents: 834
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
        2015, 2016, 2017, 2018, 2019,
        2020, 2021, 2022]

const DataVis = () => {
    return (

        <VictoryChart
            theme={VictoryTheme.material}
            domain={{ x: [1980, 2022], y: [100, 12000] }}
            style={{ parent: { maxWidth: "75%" } }}
            width={1500}
            height={1000}
        >
            {/* X axis for years */}
            <VictoryAxis
                tickValues={tickValuesYrs}
            />
            {/* Y axis for student count */}
            <VictoryAxis dependentAxis />

            {/* Total students at Brown line */}
            <VictoryBar
                data={totalStudents}
                x="Year"
                y="Students"
            />
            {/* TotalBlackStudentss at Brown line */}
            <VictoryBar
                style={{ data: { fill: "#c43a31" } }}
                data={totalBlackStudents}
                x="Year"
                y="TotalBlackStudents"
            />
        </VictoryChart>
    )
}

export default DataVis