import React from 'react'
import {
    VictoryBar, VictoryChart,
    VictoryAxis, VictoryTheme
} from 'victory';

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
            domain={{x: [1980, 2022], y: [1000] } } 
            domainPadding={10}
            style={{ parent: { maxWidth: "75%" } }}
            width={2000}
            height={1000}
        >
            <VictoryAxis
                tickValues={tickValuesYrs}
            />

            {/* <VictoryLine
                data={totalStudents}
            // data accessor for x values
            x={Year}
            // data accessor for y values
            y={Students}
            /> */}
        </VictoryChart>
    )
}

export default DataVis