"use client";
import React, { useEffect, useState } from "react";
import styles from "../../styles/styles.module.css";

interface TypingAnimationProps {
  text: string;
  speed?: number;
}

const TypingAnimation: React.FC<TypingAnimationProps> = ({
  text,
  speed = 100,
}) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      setDisplayedText((prevText) => prevText + text[current]);
      current++;

      if (current === text.length) {
        clearInterval(interval);
      }
    }, speed);

    return () => {
      clearInterval(interval);
    };
  }, [text, speed]);

  return <span className={styles.explaination}>{displayedText}</span>;
};

export default TypingAnimation;
