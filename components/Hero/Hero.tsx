'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Hero.module.css';

const words = [
    { text: 'design', icon: '⚙️' },
    { text: 'build', icon: '🛠️' },
    { text: 'ship', icon: '🚀' }
];

const Hero = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [muted, setMuted] = useState(true);
    const [wordIndex, setWordIndex] = useState(0);

    // Rotate words every 2.5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setWordIndex((prev) => (prev + 1) % words.length);
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    const toggleSound = () => {
        const video = videoRef.current;
        if (!video) return;
        video.muted = !video.muted;
        setMuted(video.muted);
    };

    return (
        <section className={styles.hero}>
            <div className={`${styles.container} container`}>
                <div className={styles.content}>
                    <h1 className={styles.title}>
                        Engineering Ideas Into <br />
                        <span className={styles.gradientText}>Intelligent Products</span>
                    </h1>
                    <div className={styles.description}>
                        We
                        <div className={styles.badgeWrapper}>
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={words[wordIndex].text}
                                    initial={{ y: 20, opacity: 0, rotateX: -90 }}
                                    animate={{ y: 0, opacity: 1, rotateX: 0 }}
                                    exit={{ y: -20, opacity: 0, rotateX: 90 }}
                                    transition={{ duration: 0.5, ease: "easeInOut" }}
                                    className={styles.designBadge}
                                >
                                    <span className={styles.icon}>{words[wordIndex].icon}</span>
                                    {words[wordIndex].text}
                                </motion.span>
                            </AnimatePresence>
                        </div>
                        AI-powered products.
                    </div>
                </div>

                <div className={styles.visual}>
                    <div className={styles.glassFrame}>
                        <div className={styles.innerContent}>
                            <video
                                ref={videoRef}
                                className={styles.heroVideo}
                                autoPlay
                                muted
                                loop
                                playsInline
                            >
                                <source src="/videos/hero-video.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>

                            <button
                                className={styles.soundBtn}
                                onClick={toggleSound}
                                aria-label={muted ? 'Unmute video' : 'Mute video'}
                            >
                                {muted ? (
                                    /* muted icon */
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                                        <line x1="23" y1="9" x2="17" y2="15" />
                                        <line x1="17" y1="9" x2="23" y2="15" />
                                    </svg>
                                ) : (
                                    /* unmuted icon */
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                                        <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                                        <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
