import React from 'react'

const GraphButton = ({ setGraph, graphName }) => {
    return (
        <div className='graph-button'>
            <button onClick={
                () => {
                    setGraph(graphName)
                    console.log(graphName)
                }}>
                {graphName}
            </button>
        </div>
    )
}

export default GraphButton