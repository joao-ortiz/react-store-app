import './index.css'
import { useState } from 'react'
import { menuLinks } from '../menuLinks'
import { NavLink } from 'react-router-dom'

function HamburguerMenu() {
    const [open, setOpen] = useState(false)
    const links = menuLinks.map(link => {
        return (
            <li className="dropdown-item">
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
                { links }
            </ul>
        </div>
    )
}

export default HamburguerMenu