import React from 'react'
import { VictoryChart, VictoryAxis, VictoryBar, VictoryLabel, VictoryTheme } from 'victory'
const UgBarGraph = ({ tickValues, data }) => {
    return (
        <div>
            <VictoryChart
                theme={VictoryTheme.material}
                style={{ parent: { maxWidth: "90%" } }}
                width={1500}
                height={1000}
                domainPadding={{ x: 50 }}
            >
                {/* X axis for years */}
                <VictoryAxis
                    tickValues={tickValues}
                    domain={{ x: [1980, 2022] }}
                />

                {/* Y axis for student count */}
                <VictoryAxis dependentAxis
                    orientation="left"
                    domain={{ y: [300, 8000] }}
                />
                {/* Total undergraduate students at Brown bar */}
                <VictoryBar
                    data={data}
                    x="YEAR"
                    y="TOTAL STUDENTS"
                />
                {/* Total Black undergraduate students at Brown bar */}
                <VictoryBar
                    style={{ data: { fill: "#c43a31" } }}
                    data={data}
                    x="YEAR"
                    y="TOTAL BLACK STUDENTS"
                />
            </VictoryChart>
        </div>
    )
}

export default UgBarGraph