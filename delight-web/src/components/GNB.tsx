'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './GNB.module.css';

/* ---- Figma 에셋 (7일 유효) ---- */
const FIGMA = {
  salesforce:  'https://www.figma.com/api/mcp/asset/b1a85ea4-6ca2-4eeb-9364-898ddd647fdf',
  zendesk:     'https://www.figma.com/api/mcp/asset/f28801bc-f040-424f-a256-a7ab795a6fcd',
  freshworks:  'https://www.figma.com/api/mcp/asset/7ac50c18-3e28-4311-853f-e5d1dbfffc09',
  sprinklr:    'https://www.figma.com/api/mcp/asset/f8b0cae7-f421-4560-991c-2855eb50b085',
  confluence:  'https://www.figma.com/api/mcp/asset/02a48095-9bc9-461d-b5a1-43e4a2f8b140',
  googleDrive: 'https://www.figma.com/api/mcp/asset/033d1feb-9450-44ce-90eb-38286adc07f7',
  notion:      'https://www.figma.com/api/mcp/asset/bfb62e83-7840-44cc-b31d-c8dbae177910',
  intercom:    'https://www.figma.com/api/mcp/asset/68bb1217-3be5-4db5-baf6-e9d8b44d3942',
  sparkEvent:  'https://www.figma.com/api/mcp/asset/65fdd80b-27d1-4d9a-b878-de23bdfe8384',
};

/* ---- SVG Icons ---- */
const DelightLogo = () => (
  <svg width="32" height="32" viewBox="0 0 22 22" fill="none">
    <path d="M12.5254 9.47461H22V12.5254H14.683L19.8569 17.6993L17.7001 19.8569L12.5254 14.6815V22H9.47461V14.6823L4.30071 19.8569L2.14307 17.7001L7.31773 12.5254H0V9.47461H7.3185L2.14383 4.29994L4.30071 2.14307L9.47461 7.31696V0H12.5254V9.47461Z" fill="black"/>
    <path d="M19.4737 4.44604C19.4737 5.5246 18.5994 6.39894 17.5208 6.39894C16.4423 6.39894 15.5679 5.5246 15.5679 4.44604C15.5679 3.36749 16.4423 2.49315 17.5208 2.49315C18.5994 2.49315 19.4737 3.36749 19.4737 4.44604Z" fill="black"/>
  </svg>
);

const SendbirdLogo = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <path fillRule="evenodd" clipRule="evenodd" d="M22 11C22 4.92476 17.0751 0 11 0H10.9964H0V5.5C0 8.49977 2.40269 10.934 5.38822 10.9942H0C0 17.0694 4.92493 21.9942 11 21.9942V22C17.0751 22 22 17.0751 22 11Z" fill="#0E1017"/>
  </svg>
);

const ChevronIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const LanguageIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path d="M11.9902 2.09961C17.465 2.09974 21.9004 6.53537 21.9004 12C21.9004 17.4646 17.465 21.9003 11.9902 21.9004C6.52559 21.9004 2.09961 17.4649 2.09961 12C2.09961 6.5351 6.52559 2.09961 11.9902 2.09961ZM9.99414 16.0283C10.4272 17.4686 11.0822 18.8083 11.918 20.0166L12 20.1357L12.082 20.0166C12.9178 18.8083 13.5728 17.4686 14.0059 16.0283L14.0449 15.9004H9.95508L9.99414 16.0283ZM4.99316 16.0498C5.96517 17.7306 7.51493 19.0164 9.37793 19.6543L9.61914 19.7373L9.49805 19.5127C8.90226 18.4105 8.44506 17.2181 8.12695 15.9756L8.10742 15.9004H4.90625L4.99316 16.0498ZM15.873 15.9756C15.5549 17.2181 15.0977 18.4105 14.502 19.5127L14.3809 19.7373L14.6221 19.6543C16.4853 19.0163 18.035 17.7202 19.0068 16.0498L19.0938 15.9004H15.8926L15.873 15.9756ZM4.16309 9.97559C4.0015 10.6219 3.90039 11.3003 3.90039 12C3.90039 12.6997 4.0015 13.3781 4.16309 14.0244L4.18164 14.0996H7.75293L7.73926 13.9883C7.65948 13.3301 7.59961 12.6743 7.59961 12C7.59961 11.3257 7.65948 10.6699 7.73926 10.0117L7.75293 9.90039H4.18164L4.16309 9.97559ZM9.56055 9.98633C9.47028 10.6383 9.40039 11.3134 9.40039 12C9.40039 12.6867 9.47032 13.352 9.56055 14.0137L9.57227 14.0996H14.4277L14.4395 14.0137C14.5297 13.352 14.5996 12.6867 14.5996 12C14.5996 11.3134 14.5297 10.6383 14.4395 9.98633L14.4268 9.90039H9.57324L9.56055 9.98633ZM16.2607 10.0117C16.3405 10.6699 16.4004 11.3257 16.4004 12C16.4004 12.6743 16.3405 13.3301 16.2607 13.9883L16.2471 14.0996H19.8184L19.8369 14.0244C19.9985 13.3781 20.0996 12.6997 20.0996 12C20.0996 11.3003 19.9985 10.6219 19.8369 9.97559L19.8184 9.90039H16.2471L16.2607 10.0117ZM9.37793 4.3457C7.51493 4.98358 5.96517 6.26944 4.99316 7.9502L4.90625 8.09961H8.10742L8.12695 8.02441C8.44506 6.78191 8.90226 5.58951 9.49805 4.4873L9.61914 4.2627L9.37793 4.3457ZM11.918 3.9834C11.0822 5.19174 10.4272 6.53143 9.99414 7.97168L9.95508 8.09961H14.0449L14.0059 7.97168C13.5728 6.53143 12.9178 5.19174 12.082 3.9834L12 3.86426L11.918 3.9834ZM14.502 4.4873C15.0977 5.58951 15.5549 6.78191 15.873 8.02441L15.8926 8.09961H19.0938L19.0068 7.9502C18.035 6.27983 16.4853 4.98366 14.6221 4.3457L14.3809 4.2627L14.502 4.4873Z" fill="#1A1612"/>
  </svg>
);

const LoginIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <mask id="mask_login" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
      <rect width="24" height="24" fill="#D9D9D9"/>
    </mask>
    <g mask="url(#mask_login)">
      <circle cx="12" cy="7.5" r="4.5" stroke="#1A1612" strokeWidth="2"/>
      <path d="M12 12C7.33285 12 3.49543 15.9473 3.04434 21.0011C2.99524 21.5512 3.44772 22 4 22H20C20.5523 22 21.0048 21.5512 20.9557 21.0011C20.5046 15.9473 16.6672 12 12 12Z" stroke="#1A1612" strokeWidth="2"/>
    </g>
  </svg>
);

/* ---- Types ---- */
type OpenMenu = 'capabilities' | 'solutions' | 'resources' | 'lang' | 'covert' | null;

/* ---- Component ---- */
export default function GNB() {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<OpenMenu>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const capDropRef = useRef<HTMLDivElement>(null);
  const capTriggerRef = useRef<HTMLSpanElement>(null);
  const gnbRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
      setOpenMenu(null);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onOutsideClick = (e: MouseEvent) => {
      if (gnbRef.current && !gnbRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    };
    document.addEventListener('click', onOutsideClick);
    return () => document.removeEventListener('click', onOutsideClick);
  }, []);

  // Position capabilities mega menu
  useEffect(() => {
    if (openMenu === 'capabilities' && capDropRef.current && capTriggerRef.current && gnbRef.current) {
      const trigRect = capTriggerRef.current.getBoundingClientRect();
      const gnbRect = gnbRef.current.getBoundingClientRect();
      capDropRef.current.style.left = `${trigRect.left - gnbRect.left}px`;
    }
  }, [openMenu]);

  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setOpenMenu(null), 160);
  };

  const open = (menu: OpenMenu) => {
    cancelClose();
    setOpenMenu(menu);
  };

  const isScrolledOrOpen = scrolled || openMenu !== null;

  return (
    <>
      <div className={styles.gnbWrap}>
        <header
          ref={gnbRef}
          className={`${styles.gnb} ${isScrolledOrOpen ? styles.scrolled : ''}`}
        >
          <div className={styles.gnbInner}>

            {/* ---- Left ---- */}
            <div className={styles.gnbLeft}>

              {/* Logo Switcher */}
              <div
                className={`${styles.gnbLogoSwitcher} ${openMenu === 'covert' ? styles.active : ''}`}
                onMouseEnter={() => open('covert')}
                onMouseLeave={scheduleClose}
              >
                <DelightLogo />
                <span className={`${styles.gnbChevron} ${openMenu === 'covert' ? styles.chevronOpen : ''}`}>
                  <ChevronIcon />
                </span>

                {openMenu === 'covert' && (
                  <div
                    className={styles.gnbCovertPop}
                    onMouseEnter={cancelClose}
                    onMouseLeave={scheduleClose}
                  >
                    <div className={`${styles.gnbCovertItem} ${styles.gnbCovertItemActive}`}>
                      <img src="https://www.figma.com/api/mcp/asset/b54c8e90-e523-4907-b509-9bcd39f756e0" alt="delight.ai" className={styles.gnbCovertThumb} />
                      <span className={styles.gnbCovertLabel}>delight.ai</span>
                    </div>
                    <div className={styles.gnbCovertItem}>
                      <div className={styles.gnbCovertIconWrap}>
                        <img src="https://www.figma.com/api/mcp/asset/382df1bb-5b1e-4ed0-8b38-9c76365608d6" alt="Sendbird" width="22" height="22" />
                      </div>
                      <span className={styles.gnbCovertLabel}>sendbird</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Nav */}
              <nav className={styles.gnbMenu}>

                {/* Capabilities */}
                <span
                  ref={capTriggerRef}
                  className={`${styles.gnbMenuItem} ${openMenu === 'capabilities' ? styles.gnbMenuItemActive : ''}`}
                  onMouseEnter={() => open('capabilities')}
                  onMouseLeave={scheduleClose}
                >
                  Capabilities
                  <span className={`${styles.gnbChevron} ${openMenu === 'capabilities' ? styles.chevronOpen : ''}`}>
                    <ChevronIcon />
                  </span>
                </span>

                {/* Solutions */}
                <div
                  className={styles.gnbItemWrap}
                  onMouseEnter={() => open('solutions')}
                  onMouseLeave={scheduleClose}
                >
                  <span className={`${styles.gnbMenuItem} ${openMenu === 'solutions' ? styles.gnbMenuItemActive : ''}`}>
                    Solutions
                    <span className={`${styles.gnbChevron} ${openMenu === 'solutions' ? styles.chevronOpen : ''}`}>
                      <ChevronIcon />
                    </span>
                  </span>
                  {openMenu === 'solutions' && (
                    <div className={styles.gnbDropPanel} onMouseEnter={cancelClose} onMouseLeave={scheduleClose}>
                      <div className={styles.dropSolutionsLayout}>
                        <div className={styles.dropSolutionsCol}>
                          <span className={styles.dropSolutionsLabel}>Industries</span>
                          <a className={styles.dropSolLink} href="#">Retail</a>
                          <a className={styles.dropSolLink} href="#">B2B</a>
                          <a className={styles.dropSolLink} href="#">On-demand</a>
                          <a className={styles.dropSolLink} href="#">Travel &amp; hospitality</a>
                        </div>
                        <div className={styles.dropSolutionsCol}>
                          <span className={styles.dropSolutionsLabel}>Use Cases</span>
                          <a className={styles.dropSolLink} href="#">Customer service</a>
                          <a className={styles.dropSolLink} href="#">Enterprise</a>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Resources */}
                <div
                  className={styles.gnbItemWrap}
                  onMouseEnter={() => open('resources')}
                  onMouseLeave={scheduleClose}
                >
                  <span className={`${styles.gnbMenuItem} ${openMenu === 'resources' ? styles.gnbMenuItemActive : ''}`}>
                    Resources
                    <span className={`${styles.gnbChevron} ${openMenu === 'resources' ? styles.chevronOpen : ''}`}>
                      <ChevronIcon />
                    </span>
                  </span>
                  {openMenu === 'resources' && (
                    <div
                      className={`${styles.gnbDropPanel} ${styles.gnbDropPanelResources}`}
                      onMouseEnter={cancelClose}
                      onMouseLeave={scheduleClose}
                    >
                      <div className={styles.dropResourcesList}>
                        {['Customer stories', 'Ebooks & guides', 'Webinars & podcasts', 'ROI Calculator', 'Delight AI Perspectives', 'Documentation', 'Community'].map((item) => (
                          <a key={item} className={styles.dropResLink} href="#">
                            <span className={styles.dropResLabel}>{item}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

              </nav>
            </div>

            {/* ---- Right ---- */}
            <div className={styles.gnbRight}>
              <div className={styles.gnbUtility}>

                {/* Lang */}
                <div
                  className={styles.gnbItemWrap}
                  onMouseEnter={() => open('lang')}
                  onMouseLeave={scheduleClose}
                >
                  <span className={`${styles.gnbLang} ${openMenu === 'lang' ? styles.active : ''}`}>
                    <LanguageIcon /> EN
                    <span className={`${styles.gnbChevron} ${openMenu === 'lang' ? styles.chevronOpen : ''}`}>
                      <ChevronIcon />
                    </span>
                  </span>
                  {openMenu === 'lang' && (
                    <div
                      className={styles.gnbDropPop}
                      style={{ right: 0, left: 'auto' }}
                      onMouseEnter={cancelClose}
                      onMouseLeave={scheduleClose}
                    >
                      <div className={`${styles.gnbDropPopItem} ${styles.selected}`}>
                        EN — English <span className={styles.dropCheck}>✓</span>
                      </div>
                      <div className={styles.gnbDropPopItem}>
                        KO — 한국어 <span className={styles.dropCheck} />
                      </div>
                    </div>
                  )}
                </div>

                {/* Login */}
                <span className={styles.gnbLogin}>
                  <LoginIcon /> Log in
                </span>
              </div>

              <button className={styles.gnbCta}>Contact sales</button>

              {/* Hamburger (mobile) */}
              <button className={styles.gnbHamburger} aria-label="Open menu">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M3 5h14M3 10h14M3 15h14" stroke="#1A1612" strokeWidth="1.8" strokeLinecap="round"/>
                </svg>
              </button>
            </div>
          </div>

          {/* ---- Capabilities Mega Menu ---- */}
          {openMenu === 'capabilities' && (
            <div
              ref={capDropRef}
              className={styles.gnbDrop}
              style={{ position: 'absolute', top: '72px' }}
              onMouseEnter={cancelClose}
              onMouseLeave={scheduleClose}
            >
              <div className={styles.dropProductsGrid}>
                {/* Col 1 — Product overview */}
                <div className={styles.dropCol}>
                  <div className={styles.dropColHeader}>Product overview</div>
                  <a className={styles.dropLink} href="#">
                    <span className={styles.dropLinkTitle}>Agent memory platform</span>
                    <span className={styles.dropLinkDesc}>A living memory of each customer</span>
                  </a>
                  <a className={styles.dropLink} href="#">
                    <span className={styles.dropLinkTitle}>Omnipresent</span>
                    <span className={styles.dropLinkDesc}>Proactive, omnichannel AI</span>
                  </a>
                  <a className={`${styles.dropLink} ${styles.dropLinkHighlight}`} href="#">
                    <span className={styles.dropLinkTitle}>Trust OS</span>
                    <span className={styles.dropLinkDesc}>The foundation for responsible AI</span>
                  </a>
                </div>
                {/* Col 2 */}
                <div className={`${styles.dropCol} ${styles.dropCol2}`}>
                  <a className={styles.dropLink} href="#">
                    <span className={styles.dropLinkTitle}>For you conversations</span>
                    <span className={styles.dropLinkDesc}>Make every interaction feel personal</span>
                  </a>
                  <a className={styles.dropLink} href="#">
                    <span className={styles.dropLinkTitle}>Voice AI agent</span>
                    <span className={styles.dropLinkDesc}>Fast, human-like voice support</span>
                  </a>
                  <a className={styles.dropLink} href="#">
                    <span className={styles.dropLinkTitle}>AI Copilot</span>
                    <span className={styles.dropLinkDesc}>Your AI partner for faster support</span>
                  </a>
                </div>
                {/* Right promo */}
                <div className={styles.dropRight}>
                  <div className={styles.dropRightTop}>
                    <a className={styles.dropPromoCard} href="#">
                      <div className={styles.dropPromoEyebrow}>What&apos;s new</div>
                      <div className={styles.dropPromoImg} />
                      <div className={styles.dropPromoTitle}>Product releases</div>
                      <div className={styles.dropPromoDesc}>Catch up on the latest updates from Delight.</div>
                    </a>
                    <a className={styles.dropPromoCard} href="#">
                      <div className={styles.dropPromoEyebrow}>Event</div>
                      <div className={styles.dropPromoImg} style={{ backgroundImage: `url(${FIGMA.sparkEvent})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                      <div className={styles.dropPromoTitle}>Delight Spark 2026</div>
                      <div className={styles.dropPromoDesc}>AI will finish what it starts on May 7, 2026</div>
                    </a>
                  </div>
                  <div className={styles.dropRightBottom}>
                    <span className={styles.dropIntLabel}>Integrations</span>
                    <div className={styles.dropIntLogos}>
                      {[
                        { key: 'salesforce',  src: FIGMA.salesforce,  size: 30 },
                        { key: 'zendesk',     src: FIGMA.zendesk,     size: 27 },
                        { key: 'freshworks',  src: FIGMA.freshworks,  size: 24 },
                        { key: 'sprinklr',    src: FIGMA.sprinklr,    size: 30 },
                        { key: 'confluence',  src: FIGMA.confluence,  size: 24 },
                        { key: 'googleDrive', src: FIGMA.googleDrive, size: 24 },
                        { key: 'notion',      src: FIGMA.notion,      size: 30 },
                        { key: 'intercom',    src: FIGMA.intercom,    size: 30 },
                      ].map(({ key, src, size }) => (
                        <div key={key} className={styles.dropIntIcon}>
                          <img src={src} alt={key} width={size} height={size} style={{ objectFit: 'contain' }} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </header>
      </div>
      <div className={styles.gnbSpacer} />
    </>
  );
}
