import { NavLink } from 'react-router-dom'
import './NavBar.css'
import { useState } from 'react'

export default function NavBar({ Logo, items }) {
    const [menuOpen, setmenuOpen] = useState(false);
    return (
        <div className='NavBar'>
            <img src={Logo} className='Logo' />
            <ul className={`MenuLinks ${menuOpen ? "open" : ""}`}>
                {
                    items?.map((item, index) => {
                        return (
                            <li key={index}><NavLink to={item?.link} className={({ isActive }) =>
                                isActive ? "active" : ""
                            } >{item?.content}</NavLink></li>
                        )
                    })
                }
            </ul>
            <button className='MenuIcon' onClick={() => setmenuOpen(!menuOpen)}>
                <img src="/images/NavBar/Menu Icon.png" />
            </button>
        </div>
    )
}
