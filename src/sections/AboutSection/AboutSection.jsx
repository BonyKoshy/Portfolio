// src/sections/AboutSection/AboutSection.jsx
import React from 'react';
import MagicBento from '../../components/MagicBento/MagicBento';
import Button from '../../components/Button/Button';
import ScrollStack, { ScrollStackItem } from '../../components/ScrollStack/ScrollStack'; // Import ScrollStack
import './AboutSection.css';
import '../../components/MagicBento/MagicBento.css';
import '../../components/ScrollStack/ScrollStack.css'; // Import ScrollStack CSS

// Component for Pill-shaped labels (used in several cards)
const PillLabel = ({ text, iconSrc, iconAlt }) => (
  <div style={{
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '8px 15px',
    borderRadius: '20px', // Pill shape
    background: 'rgba(255, 255, 255, 0.1)', // Subtle background for the pill
    border: '1px solid rgba(255, 255, 255, 0.2)',
    color: 'var(--text-color-primary)',
    fontSize: '0.85em',
    fontWeight: '500',
    backdropFilter: 'blur(5px)',
    WebkitBackdropFilter: 'blur(5px)',
  }}>
    {iconSrc && <img src={iconSrc} alt={iconAlt} style={{ width: '18px', height: '18px', filter: 'invert(1)' }} />}
    {text}
  </div>
);

// Specific card content components
const LocationMapCard = () => (
  <div className="card-content-flex" style={{ padding: '0px' }}> {/* Removed inner padding, rely on card padding */}
    <div className="card__header">
      <PillLabel text="Location" iconSrc="/icons/location_icon.png" iconAlt="Location Icon" /> {/* Assuming you have a location_icon.png */}
    </div>
    <div className="card__content" style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center', padding: '0 0 10px' }}>
      <img src="image_033968.png" alt="Map of Jakarta" style={{ width: '100%', height: 'auto', borderRadius: '10px' }} />
      <p style={{ fontSize: '0.9em', color: 'var(--text-color-secondary)', margin: '10px 0 0' }}>
        Currently in Pandalam, Kerala, India.
      </p>
      <div style={{ marginTop: '10px', display: 'flex', gap: '5px' }}>
        <button style={{ background: 'transparent', border: '1px solid currentColor', borderRadius: '5px', padding: '5px 10px', cursor: 'pointer', color: 'var(--text-color-primary)', fontSize: '0.8em' }}>Zoom In</button>
        <button style={{ background: 'transparent', border: '1px solid currentColor', borderRadius: '5px', padding: '5px 10px', cursor: 'pointer', color: 'var(--text-color-primary)', fontSize: '0.8em' }}>Zoom Out</button>
      </div>
    </div>
  </div>
);

const GitHubCalendarCard = () => (
  <div className="card-content-flex" style={{ padding: '0px' }}>
    <div className="card__header">
      <PillLabel text="GitHub activity" iconSrc="/icons/github_icon.png" iconAlt="GitHub Icon" /> {/* Assuming you have a github_icon.png */}
    </div>
    <div className="card__content" style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center', padding: '0 0 10px' }}>
      <p style={{ fontSize: '1em', color: 'var(--text-color-primary)', marginBottom: '10px', fontWeight: 'bold' }}>2,253 contributions in the last year</p>
      <img src="image_03394f.png" alt="GitHub Contributions Calendar" style={{ width: '100%', height: 'auto', objectFit: 'contain' }} />
      <p style={{ fontSize: '0.8em', color: 'var(--text-color-secondary)', marginTop: '10px' }}>Last pushed on Monday, August 4th 2025</p>
      <a href="https://github.com/BonyKoshy" target="_blank" rel="noopener noreferrer" style={{ marginTop: '10px', fontSize: '0.9em', color: 'var(--link-color)' }}>View on GitHub</a>
    </div>
  </div>
);

const TypingSpeedCard = () => (
  <div className="card-content-flex" style={{ padding: '0px' }}>
    <div className="card__header">
      <PillLabel text="Typing speed" iconSrc="/icons/keyboard_icon.png" iconAlt="Keyboard Icon" /> {/* Assuming you have a keyboard_icon.png */}
    </div>
    <div className="card__content" style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center', padding: '0 0 10px' }}>
      <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: '5px' }}>
        <span style={{ fontSize: '3em', fontWeight: 'bold', color: 'var(--text-color-primary)' }}>140</span>
        <span style={{ fontSize: '1.5em', color: 'var(--text-color-primary)', marginLeft: '5px' }}>wpm</span>
      </div>
      <div style={{ display: 'flex', gap: '15px', fontSize: '0.9em', color: 'var(--text-color-secondary)' }}>
        <span>⏱️ 15s</span>
        <span>🎯 100%</span>
        <span>#️⃣ ID</span>
      </div>
      <p style={{ fontSize: '0.9em', color: 'var(--text-color-secondary)', margin: '15px 0 0' }}>
        (Last measured average)
      </p>
      <button style={{ background: 'transparent', border: '1px solid currentColor', borderRadius: '5px', padding: '5px 10px', cursor: 'pointer', color: 'var(--text-color-primary)', fontSize: '0.8em', marginTop: '10px' }}>Take a test</button>
    </div>
  </div>
);

const EducationTimelineCard = () => (
  <div className="card-content-flex" style={{ padding: '0px', height: '100%' }}>
    <div className="card__header">
      <PillLabel text="Academic Milestones" iconSrc="/icons/education_icon.png" iconAlt="Education Icon" /> {/* Assuming you have an education_icon.png */}
    </div>
    <div className="card__content" style={{ flexGrow: 1, padding: '0px', overflow: 'hidden' }}> {/* Important for ScrollStack to work */}
      <ScrollStack itemDistance={30} itemScale={0.02} itemStackDistance={10} blurAmount={1}>
        
        <ScrollStackItem itemClassName="education-card-item">
          <h4 style={{ margin: 0, fontSize: '1.1em', fontWeight: 'bold', color: 'inherit' }}>10th Grade (Kerala State Board)</h4>
          <p style={{ margin: '5px 0 0', fontSize: '0.9em', color: 'inherit' }}>NSS Boys High School, Pathanamthitta</p>
          <p style={{ margin: '0', fontSize: '0.8em', color: 'inherit' }}>2020 | Score: 96%</p>
        </ScrollStackItem>
        
        <ScrollStackItem itemClassName="education-card-item">
          <h4 style={{ margin: 0, fontSize: '1.1em', fontWeight: 'bold', color: 'inherit' }}>12th Grade (Commerce with Computer Science)</h4>
          <p style={{ margin: '5px 0 0', fontSize: '0.9em', color: 'inherit' }}>Grama Panchayat HSS, Pathanamthitta</p>
          <p style={{ margin: '0', fontSize: '0.8em', color: 'inherit' }}>2022 | Score: 82%</p>
        </ScrollStackItem>
        
        <ScrollStackItem itemClassName="education-card-item">
          <h4 style={{ margin: 0, fontSize: '1.1em', fontWeight: 'bold', color: 'inherit' }}>Bachelor of Computer Applications (BCA)</h4>
          <p style={{ margin: '5px 0 0', fontSize: '0.9em', color: 'inherit' }}>CMS College of Science & Commerce, Coimbatore</p>
          <p style={{ margin: '0', fontSize: '0.8em', color: 'inherit' }}>2022-2025</p>
        </ScrollStackItem>

        <ScrollStackItem itemClassName="education-card-item">
          <h4 style={{ margin: 0, fontSize: '1.1em', fontWeight: 'bold', color: 'inherit' }}>Placed in Accenture</h4>
          <p style={{ margin: '5px 0 0', fontSize: '0.9em', color: 'inherit' }}>Accenture, Banglore BDC14</p>
          <p style={{ margin: '0', fontSize: '0.8em', color: 'inherit' }}>2025 - Present</p>
        </ScrollStackItem>

      </ScrollStack>
    </div>
  </div>
);


function AboutSection() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const aboutCardsData = [
    {
      className: 'div1',
      content: (
        <div className="card-content-flex">
          <div className="card__header">
            <PillLabel text="About" />
          </div>
          <div className="card__content" style={{ flexGrow: 1, justifyContent: 'center' }}>
            <h2 style={{ fontSize: '2em', marginBottom: '15px' }}>Hi, I'm Bony Koshy.</h2>
            <p style={{ fontSize: '1em', lineHeight: '1.6' }}>
              A passionate BCA Graduate with a strong foundation in web development.
              I thrive on creating innovative and user-friendly digital experiences.
              My journey in tech began with a curiosity for how things work, evolving into a dedication
              to craft elegant solutions.
            </p>
            <p style={{ fontSize: '1em', lineHeight: '1.6' }}>
              I specialize in front-end technologies and enjoy bringing ideas to life through clean,
              efficient, and modern code. When I'm not coding, you can find me exploring new design trends
              or diving deeper into the world of algorithms. I'm always eager to learn and take on new challenges.
            </p>
          </div>
        </div>
      ),
    },
    {
      className: 'div2', // Avatar and Name
      content: (
        <div className="card-content-flex-center">
          {/* Avatar image positioned relative to the card for the "stands outside" effect */}
          <div style={{ position: 'relative', width: '100%' }}>
            <img
              src="/letter-b.png" // Your favicon image
              alt="Bony Koshy Avatar"
              style={{
                width: '100px', // Larger avatar
                height: '100px',
                borderRadius: '50%',
                objectFit: 'cover',
                border: '3px solid var(--bento-card-border)', // Matches card border
                boxShadow: '0 0 10px rgba(0,255,255,0.2), 0 0 20px rgba(0,255,255,0.1)',
                position: 'absolute',
                top: '-50px', // Pull it up, half its height + some margin
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 2, // Above the card content
              }}
            />
          </div>
          <div style={{ paddingTop: '50px', textAlign: 'center', width: '100%' }}> {/* Add padding to prevent content overlap */}
            <h3 style={{ fontSize: '1.5em', margin: 0, color: 'var(--text-color-primary)' }}>Bony Koshy</h3>
            <p style={{ fontSize: '0.9em', color: 'var(--text-color-secondary)', margin: '5px 0 0' }}>Aspiring Software Engineer</p>
          </div>
        </div>
      ),
    },
    {
      className: 'div3',
      component: <LocationMapCard />,
    },
    {
      className: 'div4',
      content: (
        <div className="card-content-flex-center">
          <img src="/icons/linkedin_icon.svg" alt="LinkedIn Logo" style={{ width: '40px', height: '40px', filter: 'invert(1)' }} />
          <Button onClick={() => window.open('https://linkedin.com/in/bonykoshy', '_blank', 'noopener noreferrer')} variant="secondary" style={{ marginTop: '15px' }}>
            LinkedIn
          </Button>
        </div>
      ),
    },
    {
      className: 'div5',
      content: (
        <div className="card-content-flex-center">
          <img src="/icons/github_icon.png" alt="GitHub Logo" style={{ width: '40px', height: '40px', filter: 'invert(1)' }} />
          <Button onClick={() => window.open('https://github.com/BonyKoshy', '_blank', 'noopener noreferrer')} variant="secondary" style={{ marginTop: '15px' }}>
            GitHub
          </Button>
        </div>
      ),
    },
    {
      className: 'div6',
      content: (
        <div className="card-content-flex-center">
          <h3 style={{ fontSize: '1.5em', margin: '0 0 10px' }}>Discover More</h3>
          <Button onClick={() => scrollToSection('projects')} variant="primary">
            View Projects
          </Button>
        </div>
      ),
    },
    {
      className: 'div7',
      component: <GitHubCalendarCard />,
    },
    {
      className: 'div8',
      component: <TypingSpeedCard />,
    },
    {
      className: 'div9',
      component: <EducationTimelineCard />,
    },
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
        particleCount={12}
        glowColor="161, 161, 161" // This will influence the glow/particle color
      />
    </section>
  );
}

export default AboutSection;