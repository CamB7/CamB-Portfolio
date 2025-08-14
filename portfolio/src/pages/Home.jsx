import React, { useState, useEffect } from 'react';
import '../Home.css';

const Home = () => {
  const [text, setText] = useState('');
  const [messageIndex, setMessageIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const messages = ['Hi,', "I'm Cameron,", 'Software Developer'];

  useEffect(() => {
    if (messageIndex < messages.length) {
      if (charIndex < messages[messageIndex].length) {
        const timeout = setTimeout(() => {
          setText((prev) => prev + messages[messageIndex][charIndex]); // Add the next character
          setCharIndex((prev) => prev + 1); // Move to the next character
        }, 100); // Typing speed (100ms per character)
        return () => clearTimeout(timeout); // Cleanup timeout
      } else {
        // Move to the next message after a short delay
        const timeout = setTimeout(() => {
          setText((prev) => prev + '\n'); // Add a newline after the message
          setMessageIndex((prev) => prev + 1); // Move to the next message
          setCharIndex(0); // Reset character index for the next message
        }, 1000); // Delay before starting the next message
        return () => clearTimeout(timeout); // Cleanup timeout
      }
    }
  }, [charIndex, messageIndex, messages]);

  return (
    <div className="home-container">
      <h1>&lt;div&gt;</h1>
      <h1 style={{ whiteSpace: 'pre-wrap' }}>{text}</h1>
      <h1>&lt;/div&gt;</h1>
    </div>
  );
};

export default Home;
