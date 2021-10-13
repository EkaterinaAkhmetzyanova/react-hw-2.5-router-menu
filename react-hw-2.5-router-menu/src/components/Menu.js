import { NavLink } from "react-router-dom";

export default function Menu() {
    return (
        <nav class="menu">
            <NavLink exact to='' class="menu__item" activeClassName='menu__item-active'>Главная</NavLink>
            <NavLink exact to='/drift' class="menu__item" activeClassName='menu__item-active'>Дрифт-такси</NavLink>
            <NavLink exact to='/timeattack' class="menu__item" activeClassName='menu__item-active'>Time Attack</NavLink>
            <NavLink exact to='/forza' class="menu__item" activeClassName='menu__item-active'>Forza Karting</NavLink>
        </nav>
    )
  }