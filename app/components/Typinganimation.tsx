"use client";
import React, { useEffect, useState } from "react";
import { Text } from "../common/components/index";
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

  return (
    <>
      <Text
        position={"absolute"}
        top={"7%"}
        left={"45%"}
        transform={"translateX(-45%)"}
        zIndex={1}
        fontSize={{ base: "0.8em", xl: "2rem" }}
      >
        {displayedText}
      </Text>
    </>
    // <span className={styles.explaination}>{displayedText}</span>
  );
};

export default TypingAnimation;
