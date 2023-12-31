import React from 'react'
import { VictoryChart, VictoryAxis, VictoryBar, VictoryLabel, VictoryTheme } from 'victory'
const StudentBarGraph = ({ tickValues, data }) => {
    return (
        <div>
            <VictoryChart
                theme={VictoryTheme.material}
                style={{ parent: { maxWidth: "90%" } }}
                width={1500}
                height={1000}
                domainPadding={{ x: 25 }}
            >
                {/* X axis for years */}
                <VictoryAxis
                    tickValues={tickValues}
                    domain={{ x: [1980, 2022] }}
                />

                {/* Y axis for student count */}
                <VictoryAxis dependentAxis
                    orientation="left"
                    domain={{ y: [100, 12000] }}
                />
                {/* Total students at Brown bar */}
                <VictoryBar
                    data={data}
                    x="Year"
                    y="TOTAL STUDENTS"
                />
                {/* Total Black Students at Brown bar */}
                <VictoryBar
                    style={{ data: { fill: "#c43a31" } }}
                    data={data}
                    x="Year"
                    y="TOTAL BLACK STUDENTS"
                />
            </VictoryChart>
            <p className='label'>Total Black Students vs Total Students Bar Graph</p>
        </div>
    )
}

export default StudentBarGraph