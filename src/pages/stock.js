import React from 'react'

function Stock(props) {
    const plshow = props.data.filter(stock =>
         stock.symbol === props.match.params.symbol)[0];
    return (
        <div>
            <h1>{plshow.name} | {plshow.lastPrice} | {plshow.change.toFixed(3)}</h1>
        </div>
    )
}


export default Stock
