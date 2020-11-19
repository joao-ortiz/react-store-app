import HamburguerMenu from '../HamburguerMenu'
import './index.css'
import Menu from '../Menu'
import ShoppingCart from '../../ShoppingCart'
import { useState, useLayoutEffect } from 'react'

function Navbar() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    useLayoutEffect(() => {
        window.addEventListener('resize', () => setWindowWidth(window.innerWidth))
        return () => {
            window.removeEventListener('resize',() => setWindowWidth(window.innerWidth))
        }
    }, [])
    return (
        <nav className="navbar">
            {(windowWidth > 800) ? <Menu /> : <HamburguerMenu />}
            <h1 className="brand-name">Brand</h1>
            <ShoppingCart />
        </nav>
    )
}

export default Navbar