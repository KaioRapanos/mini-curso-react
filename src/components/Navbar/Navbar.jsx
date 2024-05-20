import React, {useState} from "react";

import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils"

export const Navbar = () =>{
    const[menuOpen, setMenuOpen] = useState(false);
    const pdfUrl = getImageUrl('documents/KaioRapanos.pdf');

    return(
        <nav className={styles.navbar}>
            <a className={styles.title} href="/">
                Portfolio
            </a>
            <div className={styles.menu}>
                <img 
                    className={styles.menuBtn} 
                    src={menuOpen 
                        ?  getImageUrl("nav/closeIcon.png") 
                        :  getImageUrl("nav/menuIcon.png")
                    }
                    alt="menu-button"
                    onClick={() =>setMenuOpen(!menuOpen)}
                    style={{ width: '40px', height: '40px' }}
                />
                <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
                    onClick={()=> setMenuOpen(false)}
                >
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#experience">Experience</a>
                    </li>
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                    <li>
                        <a href={pdfUrl} target="_blank" rel="noopener noreferrer">Resume</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}