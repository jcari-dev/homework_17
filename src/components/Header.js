import React from 'react'
import {Link} from 'react-router-dom';
function Header() {
    return (
        <div className="nav">
            <Link to='/'>
                <div>Home</div>
            </Link>
            <Link to='/about'>
                <div>About</div>
            </Link>
            <Link to='/stocks'>
                <div>Dashboard</div>
            </Link>
        </div>
    )
}

export default Header
