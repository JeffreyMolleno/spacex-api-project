import React from 'react';
import spacexLogo from '../../graphics/spacexLogo.png';
import {Link} from 'react-router-dom'

export default function Navigation() {
    return (
        <section id='h-header' className="c-header prim-font j-header">
            <div className="logo-container">
                <img src={spacexLogo} alt="" className="c-spacex-logo"></img>
            </div>
            <div className="c-menu-links-container">
                <ul className="c-menu-links">

                    <Link to='/'>
                        <li className="c-home-link j-home-link">
                            HOME
                        </li>
                    </Link>

                    <Link to='/catalog'>
                        <li className="c-info-link j-info-link">
                            CATALOG
                        </li>
                    </Link>

                    <Link to='/api'>
                        <li className="c-search-link prim-color"><a target="_blank">
                            INFO
                        </a></li>
                    </Link>

                </ul> 
            </div>
        </section>
    )
}
