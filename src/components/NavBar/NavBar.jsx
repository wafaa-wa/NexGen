import { NavLink } from 'react-router-dom'
import './NavBar.css'
import { useEffect, useState } from 'react'

export default function NavBar({ Logo, items }) {
    const [menuOpen, setmenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <div className={`NavBar ${scrolled ? "scrolled" : ""}`}>
            <img src={Logo} className='Logo'alt='Logo' />
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
                <img src="/images/NavBar/Menu Icon.png"  alt='Menu'/>
            </button>
        </div>
    )
}
