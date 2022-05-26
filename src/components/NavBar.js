import React from 'react';
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="actions-header__body">
            <ul className="actions-header__list">
                <li className="actions-header__item"><NavLink to="/entrance" className="actions-header__link">Свободный вход</NavLink></li>
                <li className="actions-header__item"><NavLink to="/kids" className="actions-header__link">Детям</NavLink></li>
                <li className="actions-header__item"><NavLink to="/music" className="actions-header__link">Музыка</NavLink></li>
                <li className="actions-header__item"><NavLink to="/fair" className="actions-header__link">Ярмарки</NavLink></li>
                <li className="actions-header__item"><NavLink to="/sport" className="actions-header__link">Спорт</NavLink></li>
                <li className="actions-header__item"><NavLink to="/performances" className="actions-header__link">Спектакли</NavLink></li>
                <li className="actions-header__item"><NavLink to="/concerts" className="actions-header__link">Концерты</NavLink></li>
                <li className="actions-header__item"><NavLink to="/movie" className="actions-header__link">Кино</NavLink></li>
                <li className="actions-header__item"><NavLink to="/exhibitions" className="actions-header__link">Выставки</NavLink></li>
                <li className="actions-header__item"><NavLink to="/miscellaneous" className="actions-header__link">Разное</NavLink></li>
                <li className="actions-header__item"><NavLink to="/painting" className="actions-header__link">Живопись</NavLink></li>
            </ul>
        </nav>
    );
};

export default NavBar;
