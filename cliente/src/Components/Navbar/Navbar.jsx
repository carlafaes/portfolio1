import React,{useState} from 'react';
import {Link as Scroll} from 'react-scroll';
import style from './Navbar.module.css'


export default function Navbar(){

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    return(
        <div className={style.containerNav}>
            <ul >
                <li>
                    <Scroll to="portfolio"  smooth offset={100} duration={500} onClick={closeMenu} >Portfolio</Scroll>
                </li>
                <li>
                    <Scroll to="about"  smooth offset={-100} duration={500} onClick={closeMenu} >About</Scroll>
                </li>
                <li>
                    <Scroll to="contact"  smooth offset={-100} duration={500} onClick={closeMenu} >Contacto</Scroll>
                </li>
            </ul>
        </div>
    )
}