import React, { Component } from 'react'
import './style.css';

export default class Footer extends Component {
    render() {
        return (
            <div className="footer-container">
                <div className="footer-container__left">
                    <p>Neba 2021?</p>
                </div>
                <div className="footer-container__right">
                    <div className="social-media-content">
                        <ul>
                            <a href="/#"><li><i className="fab fa-facebook-f"></i></li></a>
                            <a href="/#"><li><i className="fab fa-instagram"></i></li></a>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
