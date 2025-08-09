// src/sections/AboutSection/AboutSection.jsx
import React, { useContext, useEffect, useRef } from 'react';
import MagicBento from '../../components/MagicBento/MagicBento';
import ScrollStack, { ScrollStackItem } from '../../components/ScrollStack/ScrollStack';
import { ThemeContext } from '../../context/ThemeContext';
import GitHubCalendar from 'react-github-calendar';
import './AboutSection.css';
import '../../components/MagicBento/MagicBento.css';
import '../../components/ScrollStack/ScrollStack.css';
import './ProfileCard.css';

// --- Reusable & Child Components ---

const PillLabel = ({ text, iconSrc, iconAlt }) => {
  const { theme } = useContext(ThemeContext);
  const iconStyle = {
    width: '18px',
    height: '18px',
    filter: theme === 'dark' ? 'invert(1)' : 'none',
  };
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 15px', borderRadius: '20px', background: 'rgba(255, 255, 255, 0.1)', border: '1px solid rgba(255, 255, 255, 0.2)', color: 'var(--text-color-primary)', fontSize: '0.85em', fontWeight: '500', backdropFilter: 'blur(5px)' }}>
      {iconSrc && <img src={iconSrc} alt={iconAlt} style={iconStyle} />}
      {text}
    </div>
  );
};

const ProfileCard = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="profile-card" style={{ '--is-dark-theme': theme === 'dark' ? 1 : 0 }}>
      <div className="profile-card-photo" />
      <div className="profile-card-title">Bony Koshy <br />
        <span>Aspiring Software Engineer</span>
      </div>
      <div className="profile-card-socials">
        <a href="https://twitter.com/BonyKoshy" target="_blank" rel="noopener noreferrer" className="profile-card-socials-btn">
          <img src="/icons/twitter_icon.png" alt="Twitter" />
        </a>
        <a href="https://www.reddit.com/user/bonykoshy" target="_blank" rel="noopener noreferrer" className="profile-card-socials-btn">
          <img src="/icons/reddit_icon.png" alt="Reddit" />
        </a>
        <a href="https://t.me/bonykoshy" target="_blank" rel="noopener noreferrer" className="profile-card-socials-btn">
          <img src="/icons/telegram_icon.png" alt="Telegram" />
        </a>
      </div>
    </div>
  );
};

const LocationMapCard = () => {
  const { theme } = useContext(ThemeContext);
  // IMPORTANT: Replace these with your actual Snazzy Maps URLs
  const lightMapURL = "https://snazzymaps.com/embed/729994";
  const darkMapURL = "https://snazzymaps.com/embed/729997";
  const mapSrc = theme === 'dark' ? darkMapURL : lightMapURL;

  return (
    <div className="card-content-flex" style={{ padding: '0px' }}>
      <div className="card__header"><PillLabel text="Location" iconSrc="/icons/location_icon.png" /></div>
      <div className="card__content" style={{ flexGrow: 1, padding: '10px', overflow: 'hidden' }}>
        <iframe src={mapSrc} width="100%" height="100%" style={{ border: 0, borderRadius: '15px' }} loading="lazy" title="Location Map"></iframe>
      </div>
      <p style={{ fontSize: '0.9em', color: 'var(--text-color-secondary)', textAlign: 'center', padding: '10px 0' }}>
        Pandalam, Kerala, India.
      </p>
    </div>
  );
};

const GitHubCalendarCard = () => {
  const { theme } = useContext(ThemeContext);
  const calendarContainerRef = useRef(null);

  useEffect(() => {
    if (calendarContainerRef.current) {
      const scrollEl = calendarContainerRef.current.querySelector('.react-activity-calendar__scroll-container');
      if (scrollEl) {
        scrollEl.scrollLeft = scrollEl.scrollWidth;
      }
    }
  }, []);

  const explicitTheme = {
    light: ['hsl(0, 0%, 92%)', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
    dark: ['hsl(240, 8%, 12%)', '#0e4429', '#006d32', '#26a641', '#39d353'],
  };

  return (
    <div className="card-content-flex" ref={calendarContainerRef}>
      <div className="card__header"><PillLabel text="GitHub Activity" iconSrc="/icons/github_icon.png" /></div>
      <div style={{ color: 'var(--text-color-secondary)', padding: '1rem 0' }}>
        <GitHubCalendar username="bonykoshy" blockSize={14} blockMargin={4} theme={explicitTheme} colorScheme={theme} fontSize={14} />
      </div>
      <a href="https://github.com/BonyKoshy" target="_blank" rel="noopener noreferrer" style={{ display: 'block', textAlign: 'center', color: 'var(--link-color)' }}>
        View Contributions on GitHub
      </a>
    </div>
  );
};

const TypingSpeedCard = () => (
  <div className="typing-speed-card">
    <div className="card__header"><PillLabel text="Typing speed" iconSrc="/icons/keyboard_icon.png" /></div>
    <div className="card__content">
      <div className="typing-display"><span className="wpm-value">30</span><span className="wpm-label">wpm</span></div>
      <div className="typing-stats">
        <span><img src="/icons/timer_icon.png" alt="Timer"/> 15s</span>
        <span><img src="/icons/target_icon.png" alt="Target"/> 100%</span>
        <span><img src="/icons/lang_id_icon.png" alt="Language"/> ID</span>
      </div>
    </div>
  </div>
);

// In src/sections/AboutSection/AboutSection.jsx

// Replace the entire EducationTimelineCard component with this new version
const EducationTimelineCard = () => {
  return (
    // The ScrollStack IS the card. It will fill the entire grid area of .div9
    <ScrollStack
      className="education-timeline-card"
      itemDistance={20}
      itemStackDistance={12}
      itemScale={0.02}
      blurAmount={3}
      baseScale={0.9}
      stackPosition="15%"
    >
      {/* Position the header absolutely inside the scroller */}
      <div style={{ position: 'absolute', top: '24px', left: '24px', zIndex: 2 }}>
        <PillLabel text="Academic Milestones" iconSrc="/icons/education_icon.png" />
      </div>

      <ScrollStackItem>
        <div className="education-content">
          <h4>10th Grade (State Board)</h4>
          <p>NSS Boys High School, Pathanamthitta</p>
          <p>2020 | Score: 96%</p>
        </div>
        <img src="/icons/school_icon.png" alt="School" className="education-icon" />
      </ScrollStackItem>
      <ScrollStackItem>
        <div className="education-content">
          <h4>12th Grade (Commerce & CS)</h4>
          <p>Grama Panchayat HSS, Pathanamthitta</p>
          <p>2022 | Score: 82%</p>
        </div>
        <img src="/icons/school_icon.png" alt="School" className="education-icon" />
      </ScrollStackItem>
      <ScrollStackItem>
        <div className="education-content">
          <h4>Bachelor of Computer Applications</h4>
          <p>CMS College of Science & Commerce</p>
          <p>2022 - 2025</p>
        </div>
        <img src="/icons/school_icon.png" alt="School" className="education-icon" />
      </ScrollStackItem>
       <ScrollStackItem>
        <div className="education-content">
          <h4>Placed in Accenture</h4>
          <p>Accenture, Banglore BDC14</p>
          <p>2025 - Present</p>
        </div>
        <img src="/icons/work_icon.png" alt="Work" className="education-icon" />
      </ScrollStackItem>
    </ScrollStack>
  );
};

// --- Main AboutSection ---

function AboutSection() {
  const { theme } = useContext(ThemeContext);
  const scrollToSection = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  const aboutCardsData = [
    { className: 'div1', content: <div className="card-content-flex"><div className="card__header"><PillLabel text="About" /></div><div className="card__content" style={{ justifyContent: 'center' }}><h2 style={{ fontSize: '2em', marginBottom: '15px' }}>Hi, I'm <br></br>Bony Koshy.</h2><p style={{ fontSize: '1em', lineHeight: '1.6' }}>I'm a recent BCA Graduate and aspiring Software Engineer with a passion for building scalable web applications and intuitive desktop utilities. With a strong foundation in Python, C++, and Java, I enjoy tackling challenges in real-time communication and system architecture. My journey is driven by a blend of creativity and code, always aiming to craft elegant, efficient solutions.<br></br> 🔭 Currently: Architecting real-time, AI-powered communication platforms.<br></br>🎓 Education: Bachelor of Computer Applications (BCA) from CMS College, Coimbatore.<br></br>💼 Next Step: Placed at Accenture, starting my professional journey in 2025.<br></br>🎨 Creative Side: Award-winning 3D animation artist with a knack for visual storytelling.</p></div></div> },
    { className: 'div2', component: <ProfileCard /> },
    { className: 'div3', component: <LocationMapCard /> },
    { className: 'div4 card-hover-effect', component: <a href="https://linkedin.com/in/bonykoshy" target="_blank" rel="noopener noreferrer" className="card-full-link"><img src="/icons/linkedin_icon.png" alt="LinkedIn" className="social-icon" /></a> },
    { className: 'div5 card-hover-effect', component: <a href="https://github.com/BonyKoshy" target="_blank" rel="noopener noreferrer" className="card-full-link"><img src="/icons/github_icon.png" alt="GitHub" className="social-icon github-icon" /></a> },
    { className: 'div6 discover-card', component: <div onClick={() => scrollToSection('projects')} className="card-full-link discover-card-content"><h3 className="discover-text">Discover More</h3><img src="/icons/view_more_icon.png" alt="View More" className="discover-icon" /></div> },
    { className: 'div7', component: <GitHubCalendarCard /> },
    { className: 'div8', component: <TypingSpeedCard /> },
    { className: 'div9', component: <EducationTimelineCard /> },
  ];

  return (
    <section id="about" className="about-section" style={{'--is-dark-theme': theme === 'dark' ? 1 : 0}}>
      <MagicBento cards={aboutCardsData} enableStars={false} spotlightRadius={300} glowColor="161, 161, 161" />
    </section>
  );
}

export default AboutSection;