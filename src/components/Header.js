import React, {useEffect, useState} from 'react';
import {NavLink, Link} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import NavBar from "./NavBar";

const Header = () => {
    const [isActive, setIsActive] = useState(false);

    const handleClick = event => {
        // 👇️ toggle isActive state on click
        setIsActive(current => !current);
    };
    return (
        <header className="header">
            <div className="header__body body-header">
                <div className="body-header__container">
                    <Link to="" className="body-header__logo">AFISHA.KG</Link>
                    <form action="" className="body-header__form-search search-form">
                        <input type="text" className="search-form__input" placeholder="Поиск"/>
                        <FontAwesomeIcon icon={faSearch} className='search-form__button'/>
                    </form>
                    <div className="body-header__callback callback-header">
                        <a href="tel:+996555444333" className="callback-header__link">+996 (555) 444 333</a>
                        <a href="tel:+996502444333" className="callback-header__link">+996 (502) 444 333</a>
                    </div>
                    <button type="button" className={isActive ? 'menu-open icon-menu' : 'icon-menu'}  onClick={handleClick}><span></span></button>
                </div>
            </div>
            <div className="header__actions actions-header">
                <div className="actions-header__container">
                    {
                        <NavBar/>
                    }
                </div>
            </div>
        </header>
    );
};

export default Header;
