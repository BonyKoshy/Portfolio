import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../../ThemeContext';

const Switch = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <StyledWrapper>
      <div className="container">
        <label htmlFor="theme-switch" className="toggle">
          <input
            type="checkbox"
            className="input"
            id="theme-switch"
            onChange={toggleTheme}
            checked={theme === 'light'}
          />
          <div className="icon icon--moon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width={24} height={24}>
              <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="icon icon--sun">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width={24} height={24}>
              <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
            </svg>
          </div>
        </label>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .toggle {
    background-color: var(--panel-bg);
    width: 48px;
    height: 48px;
    border-radius: 50%;
    display: grid;
    place-items: center;
    cursor: pointer;
    box-shadow: 0 0 20px 2px rgba(0, 0, 0, 0.05);
    line-height: 1;
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  .input {
    display: none;
  }

  .icon {
    color: var(--text-primary);
    grid-column: 1 / 1;
    grid-row: 1 / 1;
    transition: transform 500ms, color 0.3s ease;
  }

  .icon--moon {
    transition-delay: 200ms;
    transform: scale(1) rotate(0);
  }

  .icon--sun {
    transform: scale(0) rotate(-360deg);
  }

  /* Corrected CSS Selector Logic */
  .input:checked + .icon--moon {
    transform: rotate(360deg) scale(0);
  }

  .input:checked + .icon--moon + .icon--sun {
    transition-delay: 200ms;
    transform: scale(1) rotate(0);
  }
`;

export default Switch;

