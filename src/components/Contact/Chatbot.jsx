import React, { useState, useRef, useEffect } from 'react';
import { Send, X as CloseIcon } from 'lucide-react';

const Chatbot = ({ isMobile, onClose }) => {
    const [messages, setMessages] = useState([
        { from: 'ai', text: "Hi! I'm Gemini, Bony's AI assistant. Ask me anything about his projects or skills." }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(scrollToBottom, [messages]);

    const handleSend = async () => {
        if (!input.trim()) return;
        const userMessage = { from: 'user', text: input };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        try {
            const response = await fetch('/.netlify/functions/gemini-proxy', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ prompt: input }),
            });

            if (!response.ok) throw new Error('Network response was not ok');
            
            const data = await response.json();
            const aiMessage = { from: 'ai', text: data.reply };
            setMessages(prev => [...prev, aiMessage]);
        } catch (error) {
            const errorMessage = { from: 'ai', text: "Sorry, I'm having trouble connecting. Please try again later." };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className={`chatbot-container ${isMobile ? 'fullscreen' : ''}`}>
            {isMobile && <button onClick={onClose} className="chatbot-close-btn"><CloseIcon /></button>}
            <div className="chatbot-messages">
                {messages.map((msg, index) => (
                    <div key={index} className={`message ${msg.from}`}>
                        <p>{msg.text}</p>
                    </div>
                ))}
                {isLoading && <div className="message ai"><p className="typing-indicator"><span></span><span></span><span></span></p></div>}
                <div ref={messagesEndRef} />
            </div>
            <div className="chatbot-input-area">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="Ask about a project..."
                    disabled={isLoading}
                />
                <button onClick={handleSend} disabled={isLoading}>
                    <Send size={20} />
                </button>
            </div>
        </div>
    );
};

export default Chatbot;