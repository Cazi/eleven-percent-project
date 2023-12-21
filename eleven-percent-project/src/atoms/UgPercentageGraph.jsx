import React from 'react'
import { VictoryChart, VictoryAxis, VictoryBar, VictoryLabel, VictoryTheme, VictoryLine } from 'victory'
const UgPercentageGraph = ({ tickValuesX, tickValuesY, data }) => {
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
          domain={{ y: [5, 10] }} />

        <VictoryLine
          data={data}
          x="YEAR"
          y="PERCENTAGE" />
      </VictoryChart>
      <p className='label'>Undergraduate Black Students vs Total Undergraduates by Percentage</p>
    </div>
    
  )
}

export default UgPercentageGraph