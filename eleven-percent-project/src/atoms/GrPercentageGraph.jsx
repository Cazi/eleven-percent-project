import React from 'react'
import { VictoryChart, VictoryAxis, VictoryBar, VictoryLabel, VictoryTheme, VictoryLine } from 'victory'
const GrPercentageGraph = ({ tickValuesX, tickValuesY, data }) => {
    return (
        <div>
            <VictoryChart
                theme={VictoryTheme.material}
                style={{ parent: { maxWidth: "90%" } }}
                width={1500}
                height={1000}
                domain={{ x: [1980, 2022] }}
                domainPadding={{ x: 25 }}
            >
                {/* X axis for years */}
                <VictoryAxis
                    tickValues={tickValuesX}
                    domain={{ x: [1980, 2022] }} />

                <VictoryAxis dependentAxis
                    orientation='left'
                    tickValues={tickValuesY}
                    domain={{ y: [0, 10] }} />

                <VictoryLine
                    data={data}
                    x="YEAR"
                    y="PERCENTAGE" />
            </VictoryChart>
        </div>
    )
}

export default GrPercentageGraph