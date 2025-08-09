// src/sections/AboutSection/AboutSection.jsx
import React, { useContext } from 'react'; // FIX: Added useContext import
import MagicBento from '../../components/MagicBento/MagicBento';
import ScrollStack, { ScrollStackItem } from '../../components/ScrollStack/ScrollStack';
import { ThemeContext } from '../../context/ThemeContext';
import './AboutSection.css';
import '../../components/MagicBento/MagicBento.css';
import '../../components/ScrollStack/ScrollStack.css';
import './ProfileCard.css'; // Import new CSS for the profile card
import GitHubCalendar from 'react-github-calendar';

// --- Child Components for About Section ---

// PillLabel: Now correctly uses theme context
const PillLabel = ({ text, iconSrc, iconAlt }) => {
  const { theme } = useContext(ThemeContext);
  const iconStyle = {
    width: '18px',
    height: '18px',
    filter: theme === 'dark' ? 'invert(1)' : 'none',
  };

  return (
    <div style={{
      display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 15px',
      borderRadius: '20px', background: 'rgba(255, 255, 255, 0.1)',
      border: '1px solid rgba(255, 255, 255, 0.2)', color: 'var(--text-color-primary)',
      fontSize: '0.85em', fontWeight: '500', backdropFilter: 'blur(5px)',
    }}>
      {iconSrc && <img src={iconSrc} alt={iconAlt} style={iconStyle} />}
      {text}
    </div>
  );
};

// ProfileCard (replaces old div2)
const ProfileCard = () => {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === 'dark';

  return (
    <div className="profile-card" style={{ '--is-dark-theme': isDark ? 1 : 0 }}>
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

// LocationMapCard with hover effect
const LocationMapCard = () => (
  <div className="card-content-flex" style={{ padding: '0px' }}>
    <div className="card__header">
      <PillLabel text="Location" iconSrc="/icons/location_icon.png" iconAlt="Location Icon" />
    </div>
    <div className="card__content" style={{ flexGrow: 1, padding: '10px', overflow: 'hidden', borderRadius: '15px' }}>
      <iframe
        className="location-map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15752.68651848101!2d76.68069188015504!3d9.20894508493354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0614833a6f7b1f%3A0x8a7065c524a14a7!2sPandalam%2C%20Kerala!5e0!3m2!1sen!2sin!4v1628243805362!5m2!1sen!2sin"
        width="100%" height="100%" style={{ border: 0 }}
        allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Location Map"
      ></iframe>
    </div>
    <p style={{ fontSize: '0.9em', color: 'var(--text-color-secondary)', textAlign: 'center', padding: '10px 0' }}>
      Currently in Pandalam, Kerala, India.
    </p>
  </div>
);

// GitHubCalendarCard with dynamic, theme-aware chart
const GitHubCalendarCard = () => {
  const { theme } = useContext(ThemeContext);

  // CORRECTED: The theme object must have `light` and/or `dark` keys,
  // each holding an array of 5 colors (for levels 0-4).
  const explicitTheme = {
    light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
    dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
  };

  return (
    <div className="card-content-flex" style={{ padding: '1.5rem', boxSizing: 'border-box' }}>
      <div className="card__header" style={{ marginBottom: '1rem' }}>
        <PillLabel text="GitHub Activity" iconSrc="/icons/github_icon.png" iconAlt="GitHub Icon" />
      </div>

      <div style={{ color: 'var(--text-color-secondary)' }}>
        <GitHubCalendar
          username="bonykoshy"
          blockSize={14}
          blockMargin={4}
          // Pass the entire theme object
          theme={explicitTheme}
          // And explicitly set which color scheme to use
          colorScheme={theme}
          fontSize={14}
        />
      </div>

      <a
        href="https://github.com/BonyKoshy"
        target="_blank"
        rel="noopener noreferrer"
        style={{ marginTop: '1rem', display: 'block', textAlign: 'center', color: 'var(--link-color)' }}
      >
        View Contributions on GitHub
      </a>
    </div>
  );
};

// TypingSpeedCard styled like the screenshot
const TypingSpeedCard = () => (
  <div className="typing-speed-card">
    <div className="card__header">
      <PillLabel text="Typing speed" iconSrc="/icons/keyboard_icon.png" iconAlt="Keyboard Icon" />
    </div>
    <div className="card__content" style={{ justifyContent: 'center', alignItems: 'center' }}>
      <div className="typing-display">
        <span className="wpm-value">30</span>
        <span className="wpm-label">wpm</span>
      </div>
      <div className="typing-stats">
        <span>⏱️ 15s</span>
        <span>🎯 100%</span>
        <span>#️⃣ ID</span>
      </div>
    </div>
  </div>
);

// EducationTimelineCard with increased blur and icons
const EducationTimelineCard = () => (
  <div className="card-content-flex" style={{ padding: '0px', height: '100%' }}>
    <div className="card__header">
      <PillLabel text="Academic Milestones" iconSrc="/icons/education_icon.png" iconAlt="Education Icon" />
    </div>
    <div className="card__content" style={{ flexGrow: 1, overflow: 'hidden' }}>
      <ScrollStack itemDistance={30} itemScale={0.02} itemStackDistance={10} blurAmount={4}>
        <ScrollStackItem itemClassName="education-card-item">
          <div className="education-content">
            <h4 style={{ margin: 0 }}>10th Grade (Kerala State Board)</h4>
            <p>NSS Boys High School, Pathanamthitta</p>
            <p>2020 | Score: 96%</p>
          </div>
          <img src="/icons/school_icon.png" alt="School" className="education-icon" />
        </ScrollStackItem>
        <ScrollStackItem itemClassName="education-card-item">
          <div className="education-content">
            <h4 style={{ margin: 0 }}>12th Grade (Commerce & CS)</h4>
            <p>Grama Panchayat HSS, Pathanamthitta</p>
            <p>2022 | Score: 82%</p>
          </div>
          <img src="/icons/school_icon.png" alt="School" className="education-icon" />
        </ScrollStackItem>
        <ScrollStackItem itemClassName="education-card-item">
          <div className="education-content">
            <h4 style={{ margin: 0 }}>Bachelor of Computer Applications</h4>
            <p>CMS College of Science & Commerce</p>
            <p>2022-2025</p>
          </div>
          <img src="/icons/school_icon.png" alt="School" className="education-icon" />
        </ScrollStackItem>
        <ScrollStackItem itemClassName="education-card-item">
          <div className="education-content">
            <h4 style={{ margin: 0 }}>Placed in Accenture</h4>
            <p>Accenture, Banglore BDC14</p>
            <p>2025 - Present</p>
          </div>
          <img src="/icons/work_icon.png" alt="Work" className="education-icon" />
        </ScrollStackItem>
      </ScrollStack>
    </div>
  </div>
);

// --- Main AboutSection Component ---

function AboutSection() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const aboutCardsData = [
    {
      className: 'div1',
      content: (
        <div className="card-content-flex">
          <div className="card__header"><PillLabel text="About" /></div>
          <div className="card__content" style={{ justifyContent: 'center' }}>
            <h2 style={{ fontSize: '2em', marginBottom: '15px' }}>Hi, I'm Bony Koshy.</h2>
            <p style={{ fontSize: '1em', lineHeight: '1.6' }}>
              I'm a passionate developer with a strong foundation in modern web technologies, turning complex problems into elegant, efficient code.
            </p>
          </div>
        </div>
      ),
    },
    { className: 'div2', component: <ProfileCard /> },
    { className: 'div3', component: <LocationMapCard /> },
    {
      className: 'div4 card-hover-effect',
      component: (
        <a href="https://linkedin.com/in/bonykoshy" target="_blank" rel="noopener noreferrer" className="card-full-link">
          <img src="/icons/linkedin_icon.png" alt="LinkedIn" className="social-icon" />
        </a>
      ),
    },
    {
      className: 'div5 card-hover-effect',
      component: (
        <a href="https://github.com/BonyKoshy" target="_blank" rel="noopener noreferrer" className="card-full-link">
          <img src="/icons/github_icon.png" alt="GitHub" className="social-icon" />
        </a>
      ),
    },
    {
      className: 'div6 discover-card',
      component: (
        <div onClick={() => scrollToSection('projects')} className="card-full-link" style={{ flexDirection: 'column', gap: '15px' }}>
          <h3 style={{ fontSize: '1.5em', margin: 0 }}>Discover More</h3>
          <img src="/icons/view_more_icon.png" alt="View More" style={{ width: '32px', filter: 'invert(1)' }} />
        </div>
      ),
    },
    { className: 'div7', component: <GitHubCalendarCard /> },
    { className: 'div8', component: <TypingSpeedCard /> },
    { className: 'div9', component: <EducationTimelineCard /> },
  ];

  return (
    <section id="about" className="about-section">
      <MagicBento
        cards={aboutCardsData}
        enableStars={false}
        enableSpotlight={true}
        enableBorderGlow={false}
        enableTilt={false}
        enableMagnetism={false}
        clickEffect={true}
        spotlightRadius={300}
        glowColor="161, 161, 161" // This will influence the glow/particle color
      />
    </section>
  );
}

export default AboutSection;