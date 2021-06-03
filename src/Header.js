import React from 'react'
import { Link } from 'react-router-dom';
import "./Header.css";
import Logo from "./assets/Logo.png"
import CloseIcon from "@material-ui/icons/Close"
import MenuIcon from "@material-ui/icons/Menu"

function Header({isOpen, setIsMenuOpen}) {
    return (
        <div className="header">
            <div className="header__logo">
                <Link to="/">
                    <img className="header__logoImage"
                     src={Logo} alt="Logo"/>
                </Link>
            </div>
            <div className="header__links">
                <Link to="/">Model S</Link>
                <Link to="/">Model X</Link>
                <Link to="/">Model Y</Link>
                <Link to="/">Model 3</Link>
                <Link to="/">Solar Roof</Link>
                <Link to="/">Solar Panels</Link>
            </div>
            <div className="header__right">
                <Link to="/" className={isOpen && "header__link--hidden"}>Shop</Link>
                <Link to="/login" className={isOpen && "header__link--hidden"}>Tesla Account</Link>
                <div className="header__menu" onClick={()=>setIsMenuOpen(!isOpen)}>
                    {isOpen ? <CloseIcon/> : <MenuIcon/>}
                </div>
            </div>
        </div>
    )
}

export default Header;
