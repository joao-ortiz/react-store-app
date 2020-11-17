import HamburguerMenu from '../HamburguerMenu'
import './index.css'
import Menu from '../Menu'
import { useState, useLayoutEffect } from 'react'

function Navbar() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    useLayoutEffect(() => {
        console.log("aaa");
        window.addEventListener('resize', () => setWindowWidth(window.innerWidth))
        return () => {
            window.removeEventListener('resize',() => setWindowWidth(window.innerWidth))
        }
    }, [])
    return (
        <nav className="navbar">
            <h1 className="brand-name">Brand</h1>
            {(windowWidth > 800) ? <Menu /> : <HamburguerMenu />}
        </nav>
    )
}

export default Navbar