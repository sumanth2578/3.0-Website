'use client';

import styles from './ContactForm.module.css';

const CONTACT_FORM_CONFIG = {
  colors: {
    label: '#8E8E8E',
    text: '#5F5F5F',
    border: '#E5E5E5',
    primary: '#E87C52',
    placeholder: '#A1A1AA',
  },
};

const ROLE_OPTIONS = ['Founder / CEO', 'Product Manager', 'Engineer', 'Agency Partner'];
const CONTACT_EMAIL = 'threepointolabs@gmail.com';

export default function ContactForm() {
  return (
    <section className={styles.section}>
      {/* Background Glow */}
      <div className={styles.bgWrap} />

      {/* Header */}
      <div className={styles.header}>
        <span className={styles.eyebrow}>Contact</span>
        <h2 className={styles.heading}>Let&apos;s Build Together</h2>
        <p className={styles.subtext}>
          We execute bold ideas with structured product management, strategic clarity, and fast delivery.
          Share your vision, and we&apos;ll turn it into a scalable, high-impact product.
        </p>
      </div>

      {/* Form Box */}
      <div className={styles.formOuter}>
        {/* Decorative Star */}
        <div className={styles.star}>
          <svg width="44" height="44" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 2L12 22M2 12L22 12M4.93 4.93L19.07 19.07M4.93 19.07L19.07 4.93"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <div className={styles.formBox} style={{ borderColor: CONTACT_FORM_CONFIG.colors.border }}>
          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <div className={styles.row}>
              <div className={styles.field}>
                <label className={styles.label}>Name</label>
                <input
                  type="text"
                  placeholder="Enter here"
                  className={styles.input}
                  style={{ borderColor: CONTACT_FORM_CONFIG.colors.border }}
                />
              </div>
              <div className={styles.field}>
                <label className={styles.label}>Role / Title</label>
                <div className={styles.selectWrap}>
                  <select
                    className={styles.select}
                    style={{ borderColor: CONTACT_FORM_CONFIG.colors.border, color: CONTACT_FORM_CONFIG.colors.placeholder }}
                  >
                    <option>Select option</option>
                    {ROLE_OPTIONS.map((opt) => (
                      <option key={opt}>{opt}</option>
                    ))}
                  </select>
                  <div className={styles.selectArrow}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.field}>
              <label className={styles.label}>Email</label>
              <div className={styles.inputIconWrap}>
                <span className={styles.inputIcon} style={{ color: CONTACT_FORM_CONFIG.colors.placeholder }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </span>
                <input
                  type="email"
                  placeholder="Input value"
                  className={`${styles.input} ${styles.inputWithIcon}`}
                  style={{ borderColor: CONTACT_FORM_CONFIG.colors.border }}
                />
              </div>
            </div>

            <div className={styles.field}>
              <label className={styles.label}>Message</label>
              <textarea
                rows={4}
                placeholder="Write few words"
                className={styles.textarea}
                style={{ borderColor: CONTACT_FORM_CONFIG.colors.border }}
              />
            </div>

            <button
              className={styles.submitBtn}
              style={{ backgroundColor: CONTACT_FORM_CONFIG.colors.primary }}
            >
              Submit
            </button>

            <div className={styles.emailRow}>
              <p>
                Say hello:{' '}
                <a href={`mailto:${CONTACT_EMAIL}`} className={styles.emailLink}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  {CONTACT_EMAIL}
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
