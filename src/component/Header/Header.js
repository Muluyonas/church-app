import React from 'react'
import {Link} from 'react-router-dom'

import './style.css'
import HeaderPic from '../../assets/logo1.png'


const Header = () => {
    return (
        <div className="header-container" >
            <Link to="/">
                <img src={HeaderPic} alt="header_logo"/>
            </Link>
        </div>
    )
}

export default Header;
