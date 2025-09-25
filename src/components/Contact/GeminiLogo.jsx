import React from 'react';

const GeminiLogo = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" className="gemini-logo">
        <defs>
            <linearGradient id="geminiGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#4285F4' }} />
                <stop offset="50%" style={{ stopColor: '#9B72F9' }} />
                <stop offset="100%" style={{ stopColor: '#4285F4' }} />
            </linearGradient>
        </defs>
        <path
            fill="url(#geminiGradient)"
            d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16Zm-2-7h4a1 1 0 0 0 0-2h-4a1 1 0 0 0 0 2Z"
        />
        <path
            fill="url(#geminiGradient)"
            d="M15.5 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
        />
    </svg>
);

export default GeminiLogo;