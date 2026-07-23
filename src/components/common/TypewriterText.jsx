import React, { useState, useEffect } from 'react';

const TypewriterText = ({ text, speed = 50, className = "" }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    setDisplayedText(''); // Reset when text changes

    const timer = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text.charAt(index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [text, speed]);

  return (
    <span className={className}>
      {displayedText}
      <span className="animate-pulse inline-block w-1 h-5 ml-1 bg-indigo-500 align-middle"></span>
    </span>
  );
};

export default TypewriterText;