import React from 'react';
import './Header.scss';
import Flag from '../../assets/images/flag.png';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="header">
            <div className="header-left">
                <Link className="header-right__link" to="/"><img className="header-left__flag" src={Flag} alt="Japan Flag"/></Link>
            </div>
            <div className="header-middle">
                <h2 className="header-middle__title">Chatto</h2>
            </div>
            <div className="header-right">
                <Link className="header-right__link" to="/"><h3 className="header-right__home">home</h3></Link>
                <Link className="header-right__link" to="/about"><h3 className="header-right__about">about</h3></Link>
            </div>
        </div>
    )
}

export default Header;
