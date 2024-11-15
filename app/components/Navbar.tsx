"use client"

import phone from "../../public/images/phone.svg";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import { useState } from "react";
function Navbar() {

  const [isSideMenuOpen,setIsSideMenuOpen] = useState(false);
  const toggleSideMenu = () => {
    setIsSideMenuOpen(!isSideMenuOpen);
  }
  return (
    <div>
       <nav className={styles.nav}>
        <div className={styles.humburger} onClick={toggleSideMenu}>☰</div>
        <div className={styles.logo}>Layan <span>.</span></div>
        <ul className={styles.navigation}>
           <li><Link href="/">Home</Link></li>
           <li><Link href="/about">About</Link></li>
           <li><Link href="/project">Projects</Link></li>
           <li><Link href="/contact">Contact</Link></li>
        </ul>
        
        <button className={styles.button}><Image src={phone} alt=""/></button>

        <div className={`${styles.sideMenu} ${isSideMenuOpen ? styles.sideMenuOpen : styles.sideMenuClosed}`}>
          <div className={styles.cut} onClick={toggleSideMenu}>x</div>
        <ul className={styles.navigation}>
           <li><Link onClick={toggleSideMenu} href="/">Home</Link></li>
           <li><Link onClick={toggleSideMenu} href="/about">About</Link></li>
           <li><Link onClick={toggleSideMenu} href="/project">Projects</Link></li>
           <li><Link onClick={toggleSideMenu} href="/contact">Contact</Link></li>
        </ul>
        </div>
        
       </nav>
    </div>
  )
}

export default Navbar;