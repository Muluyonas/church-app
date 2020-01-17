import React from 'react';
import {Link} from 'react-router-dom'

import './style.css'


class Nav extends React.Component {
    render(){
        return (
            <div className="navbar-container">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/service-news">Services & News</Link></li>
                    <li><Link to="/video-photo">Video & Photo</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        )
    }
}


export default Nav;