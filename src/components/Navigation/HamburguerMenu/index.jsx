import './index.css'
import { useState } from 'react'
import { menuLinks } from '../menuLinks'
import { NavLink } from 'react-router-dom'

function HamburguerMenu() {
    const [open, setOpen] = useState(false)
    const links = menuLinks.map(link => {
        return (
            <li key={Math.random().toString().substr(2,8)} className="dropdown-item">
                <NavLink 
                    to={link.path}
                    className="item-label"
                    onClick={() => setOpen(!open)}
                >
                    {link.label}
                </NavLink>
            </li>
        )
    })
    return (
        <div className="dropdown">
            <div 
                className="menu-button"
                onClick={() => setOpen(!open)}
            >
                {open ? "Close" : "Menu"}
            </div>
            <ul className={open ? 'dropdown-items visible' : 'dropdown-items'}>
                <NavLink 
                    exact
                    to="/"
                    className="item-label"
                    onClick={() => setOpen(!open)}
                >
                    Home
                </NavLink>
                { links }
            </ul>
        </div>
    )
}

export default HamburguerMenu