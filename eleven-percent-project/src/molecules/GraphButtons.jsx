import React from 'react'
import GraphButton from '../atoms/GraphButton'
const GraphButtons = ({setGraph}) => {
  return (
    <div className='graph-buttons'>
        <GraphButton setGraph={setGraph} graphName={"studentsBar"}/>
        <GraphButton setGraph={setGraph} graphName={"studentsPercent"}/>
        <GraphButton setGraph={setGraph} graphName={"undergradBar"}/>
        <GraphButton setGraph={setGraph} graphName={"undergradPercent"}/>
        <GraphButton setGraph={setGraph} graphName={"gradBar"}/>
        <GraphButton setGraph={setGraph} graphName={"gradPercent"}/>

    </div>
  )
}

export default GraphButtons