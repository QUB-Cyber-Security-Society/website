import { useState } from "react";

export const useHackerText = () => {
  const originalText = "QUB Cyber Security Society";
  const [text, setText] = useState("QUB Cyber Security Society");

  const hackText = () => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < originalText.length) {
        const textSnippet = originalText.slice(i, originalText.length);
        const randomText = textSnippet
          .split("")
          .map((char) =>
            char === " "
              ? " "
              : String.fromCharCode(Math.floor(Math.random() * 26) + 97)
          )
          .join("");
        const newText = originalText.slice(0, i) + randomText;
        setText(newText);
        i++;
      }
      if (i === originalText.length) {
        setText(originalText);
        clearInterval(interval);
      }
    }, 1000 / 30);
  };

  return {
    text,
    hackText,
  };
};
