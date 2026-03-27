import styles from './Footer.module.css';

/* ---- Data ---- */
const LINK_COLUMNS = [
  {
    sections: [
      {
        header: 'AI Capabilities',
        links: [
          { label: 'Omnipresent' },
          { label: 'Voice AI agent', external: true },
          { label: 'AI copilot' },
          { label: 'AI agent integrations' },
          { label: 'Product releases' },
        ],
      },
      {
        header: 'delight.ai Overview',
        links: [
          { label: 'Why choose Delight AI' },
          { label: 'AI agent platform' },
          { label: 'AI agent builder' },
          { label: 'Performance' },
        ],
      },
    ],
  },
  {
    sections: [
      {
        header: 'Industry',
        links: [
          { label: 'Retail' },
          { label: 'B2B' },
          { label: 'On-demand' },
          { label: 'Travel & hospitality' },
        ],
      },
      {
        header: 'Use Case',
        links: [
          { label: 'Customer service' },
          { label: 'Enterprise' },
        ],
      },
    ],
  },
  {
    sections: [
      {
        header: 'Resources',
        links: [
          { label: 'Customer stories' },
          { label: 'Ebooks & guides' },
          { label: 'Webinars & podcasts' },
          { label: 'ROI Calculator' },
          { label: 'Delight AI Perspectives' },
        ],
      },
      {
        header: 'Developer',
        links: [
          { label: 'Documentation' },
          { label: 'Community' },
          { label: 'Server status' },
        ],
      },
    ],
  },
  {
    sections: [
      {
        header: 'Company',
        links: [
          { label: 'About' },
          { label: 'Customers' },
          { label: 'Careers' },
          { label: 'News' },
          { label: 'Partners' },
          { label: 'Security & compliance' },
          { label: 'RFP template' },
        ],
      },
      {
        header: 'Support',
        links: [{ label: 'Contact us' }],
      },
    ],
  },
];

const LEGAL_LINKS = ['Terms of Service', 'Privacy notice', 'Your privacy choices', 'Sub-processors'];

/* ---- Social Icons ---- */
const FacebookIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const XIcon = () => (
  <svg width="22" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const GitHubIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

const YouTubeIcon = () => (
  <svg width="24" height="17" viewBox="0 0 24 17" fill="currentColor">
    <path d="M23.495 2.656A3.016 3.016 0 0 0 21.41.557C19.545 0 12 0 12 0S4.455 0 2.59.557A3.016 3.016 0 0 0 .505 2.656C0 4.535 0 8.5 0 8.5s0 3.965.505 5.844a3.016 3.016 0 0 0 2.085 2.099C4.455 17 12 17 12 17s7.545 0 9.41-.557a3.016 3.016 0 0 0 2.085-2.099C24 12.465 24 8.5 24 8.5s0-3.965-.505-5.844zM9.545 12.066V4.934L15.818 8.5l-6.273 3.566z"/>
  </svg>
);

const SendbirdWordmark = () => (
  <svg width="80" height="14" viewBox="0 0 105 18" fill="none">
    <text x="0" y="14" fontFamily="Arial, sans-serif" fontSize="13" fontWeight="600" fill="#555869">sendbird</text>
  </svg>
);

/* ---- Component ---- */
export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Section 1 */}
      <div className={styles.section1}>
        <div className={styles.section1Content}>
          {/* Brand */}
          <div className={styles.brandCol}>
            <p className={styles.brandHeadline}>Enterprise AI customer experience</p>
            <button className={styles.ctaBtn}>Contact sales</button>
          </div>

          {/* Link columns */}
          <div className={styles.linkCols}>
            {LINK_COLUMNS.map((col, colIdx) => (
              <div key={colIdx} className={styles.linkColGroup}>
                {col.sections.map((section) => (
                  <div key={section.header} className={styles.linkSection}>
                    <span className={styles.colHeader}>{section.header}</span>
                    <div className={styles.links}>
                      {section.links.map((link) => (
                        <a key={link.label} href="#" className={styles.link}>
                          {link.label}
                          {link.external && (
                            <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                              <path d="M2 10L10 2M10 2H4M10 2v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          )}
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section 2 — bottom bar */}
      <div className={styles.section2}>
        <div className={styles.section2Content}>
          {/* G2 badge */}
          <div className={styles.g2Badge}>
            <div className={styles.g2BadgeIcon}>G2</div>
            <div className={styles.g2BadgeText}>
              <span className={styles.g2BadgeLabel}>Read G2 Reviews</span>
              <div className={styles.g2Stars}>
                {[...Array(5)].map((_, i) => <div key={i} className={styles.g2Star} />)}
              </div>
            </div>
          </div>

          {/* Social */}
          <div className={styles.social}>
            <a href="#" className={styles.socialIcon} aria-label="Facebook"><FacebookIcon /></a>
            <a href="#" className={styles.socialIcon} aria-label="LinkedIn"><LinkedInIcon /></a>
            <a href="#" className={styles.socialIcon} aria-label="X"><XIcon /></a>
            <a href="#" className={styles.socialIcon} aria-label="GitHub"><GitHubIcon /></a>
            <a href="#" className={styles.socialIcon} aria-label="YouTube"><YouTubeIcon /></a>
          </div>

          {/* Legal */}
          <div className={styles.legalLinks}>
            {LEGAL_LINKS.map((label) => (
              <a key={label} href="#" className={styles.legalLink}>{label}</a>
            ))}
          </div>

          {/* Copyright */}
          <div className={styles.copyright}>
            <span className={styles.copyrightText}>© 2025 Sendbird, Inc</span>
            <SendbirdWordmark />
          </div>
        </div>
      </div>
    </footer>
  );
}
