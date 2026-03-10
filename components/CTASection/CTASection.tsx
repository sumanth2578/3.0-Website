import Image from 'next/image';
import styles from './CTASection.module.css';

export default function CTASection() {
  return (
    <section className={styles.section}>
      {/* Background Glow */}
      <div className={styles.bgWrap}>
        <Image
          src="/images/backgrounds/contact 2.png"
          alt=""
          fill
          className={styles.bgImage}
          priority
        />
      </div>

      <div className={styles.content}>
        <h2 className={styles.heading}>
          Engineering intelligent systems <br /> for ambitious brands
        </h2>
        <p className={styles.description}>
          Ready to move beyond ordinary software? We design scalable products, AI-driven workflows, and autonomous agents
          that engage users, streamline operations, and turn bold ideas into lasting digital impact.
        </p>
        <button className={styles.button}>
          <span>Let&apos;s Collaborate</span>
          <div className={styles.buttonIcon}>
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
              <path
                d="M1.16663 12.8333L12.8333 1.16663M12.8333 1.16663H1.16663M12.8333 1.16663V12.8333"
                stroke="black"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </button>
      </div>
    </section>
  );
}
