import React from 'react';
import Data from '../data/Data';
import {Link} from 'react-router-dom';
function Dashboard() {




    return (
        <div>
            <h1>Stocks</h1>
            {Data.map((stocks)=>{
            const {name, symbol, lastPrice, change } = stocks;
            return (
                <div>
                    <Link to={`/stocks/${symbol}`}>
                    <h2>{name} | Price: {lastPrice} | Change: {change.toFixed(3)}</h2>
                    </Link>
                </div>
            )
        })}

        </div>
    )
}

export default Dashboard
