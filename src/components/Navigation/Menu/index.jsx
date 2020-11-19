import { NavLink } from 'react-router-dom'
import { menuLinks } from '../menuLinks'
import './index.css'

function Menu() {
    const links = menuLinks.map(link => {
        return (
            <li className="menu-item">
                <NavLink to={link.path}>
                    {link.label}
                </NavLink>
            </li>
        )
    })

    return (
        <ul className="menu">
            <NavLink exact to="/">
                Home
            </NavLink>
            { links }
        </ul>
    )
}

export default Menu