'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <Link href="/">
                        <img src="/images/logos/logo.png" alt="3.0 Labs" className={styles.logoImg} />
                    </Link>
                </div>

                <div className={styles.navGroup}>
                    <Link href="/" className={`${styles.navLink} ${styles.activeLink}`}>Home</Link>
                    <Link href="#services" className={styles.navLink}>Services</Link>
                    <Link href="#work" className={styles.navLink}>Portfolio</Link>
                    <Link href="#team" className={styles.navLink}>Teams</Link>
                    <Link href="/contact-us" className={styles.navLink}>Contact us</Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
