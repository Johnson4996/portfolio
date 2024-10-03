import { useState, useEffect } from "react";



const useTypewriter = (text, speed) => {
    const [displayText, setDisplayText] = useState("");

    useEffect(() => {
        setDisplayText("");
        let i = 0;
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        const letter = text.charAt(i);
        setDisplayText(prevText => prevText + letter);
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, speed);

    return () => {
      clearInterval(typingInterval);
    };
  }, [text, speed]);

  return displayText;
}

export default useTypewriter
