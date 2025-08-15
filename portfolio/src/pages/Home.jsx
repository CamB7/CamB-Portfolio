import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Home.css';

const Home = () => {
  const [text, setText] = useState('');
  const [messageIndex, setMessageIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [hasNavigated, setHasNavigated] = useState(false);
  const messages = ['Hi,', "I'm Cameron,", 'Software Developer.'];
  const navigate = useNavigate();

  // Typing effect for the text
  useEffect(() => {
    if (messageIndex < messages.length) {
      if (charIndex < messages[messageIndex].length) {
        const timeout = setTimeout(() => {
          setText((prev) => prev + messages[messageIndex][charIndex]);
          setCharIndex((prev) => prev + 1);
        }, 60);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setText((prev) => prev + '\n');
          setMessageIndex((prev) => prev + 1);
          setCharIndex(0);
        }, 600);
        return () => clearTimeout(timeout);
      }
    }
  }, [charIndex, messageIndex, messages]);

  // Scroll event to navigate to the "Skills" page
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;

    if (scrollPosition > windowHeight * 0.5 && !hasNavigated) {
      setHasNavigated(true);
      navigate('/skills');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasNavigated]);

  // Scroll indicator fade in
  useEffect(() => {
    const timeout = setTimeout(() => {
      const scrollIndicator = document.querySelector('.scroll-indicator');
      if (scrollIndicator) {
        scrollIndicator.classList.add('visible');
      }
    }, 4500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="home-container">
      <div className="welcome">
        <div className="mock-div">
          <h1>&lt;div&gt;</h1>
        </div>
        <div className="mock-h1">
          <h1>&lt;h1&gt;</h1>
        </div>
        <div className="text-dynamic">
          <h1 className="dynamic-text">{text}</h1>
        </div>
        <div className="mock-h1">
          <h1>&lt;/h1&gt;</h1>
        </div>
        <div className="mock-div">
          <h1>&lt;/div&gt;</h1>
        </div>
      </div>

      <div className="contact-me">
        <a href="./pages/Contact.jsx">
          <button type="button">Contact Me</button>
        </a>
      </div>

      <div className="scroll-indicator">
        <p>Scroll down to see more</p>
        <div className="scroll-icon">
          <span className="scroll-arrow">&darr;</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
