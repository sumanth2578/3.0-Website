import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.mainFooter}>
                <div className={styles.footerContainer}>
                    {/* Row 1: Logo & Nav Links */}
                    <div className={styles.footerTopRow}>
                        <img src="/images/logos/image 74.png" alt="3.0 Labs" className={styles.logo} />
                        <div className={styles.navLinks}>
                            <Link href="#about">About us</Link>
                            <Link href="#contact">Contact us</Link>
                            <Link href="#services">Services</Link>
                            <Link href="#terms">Terms & Conditions</Link>
                        </div>
                    </div>

                    <div className={styles.footerDivider}></div>

                    {/* Row 2: Copyright & Socials */}
                    <div className={styles.footerBottomRow}>
                        <p className={styles.copyright}>©2025 3.0 Labs. All Rights Reserved</p>
                        <div className={styles.socials}>
                            <Link href="#" aria-label="X">𝕏</Link>
                            <Link href="#" aria-label="LinkedIn">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                            </Link>
                            <Link href="#" aria-label="Globe">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="10" />
                                    <line x1="2" y1="12" x2="22" y2="12" />
                                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                                </svg>
                            </Link>
                            <Link href="#" aria-label="Instagram">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                </svg>
                            </Link>
                        </div>
                    </div>

                    <div className={styles.hugeBranding}>
                        <h3 className={styles.hugeText}>3.0 Labs</h3>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
