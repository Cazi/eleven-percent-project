import React from 'react'

const GraphButton = ({ setGraph, graphName }) => {
    return (
        <div>
            <button onClick={
                () => {
                    setGraph({ graphName })
                    console.log({ graphName })
                }}>
                {graphName}
            </button>
        </div>
    )
}

export default GraphButton