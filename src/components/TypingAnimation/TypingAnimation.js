import { Typewriter } from 'react-simple-typewriter';
import { useState, useEffect } from 'react';

const lines = [
  "It’s 1952. Myla wakes up in a decaying, abandoned place filled ",
  "with haunting echoes and buried secrets. What begins as a search ",
  "for answers quickly becomes a fight for sanity, as reality blurs ",
  "and every shadow feels alive. Explore forgotten corridors and piece ",
  "together a past that refuses to stay silent. Will you help Myla escape — or become part of the nightmare?"
];

export default function MultiTyping() {
  const [currentLine, setCurrentLine] = useState(0);
  const [finishedLines, setFinishedLines] = useState([]);

  useEffect(() => {
    if (currentLine < lines.length) {
      const timer = setTimeout(() => {
        setFinishedLines((prev) => [...prev, currentLine]);
        setCurrentLine((prev) => prev + 1);
      }, lines[currentLine].length * 50 + 1000); // Wait for typing + pause
      return () => clearTimeout(timer);
    }
  }, [currentLine]);

  return (
    <p className="mt-6 text-xs sm:text-sm lg:text-xl w-full max-w-full leading-relaxed font-TestSohneMono text-white">
      {finishedLines.map((index) => (
        <p key={index}>{lines[index]}</p>
      ))}

      {currentLine < lines.length && (
        <Typewriter
          key={currentLine}
          words={[lines[currentLine]]}
          loop={1}
          cursor
          cursorStyle="|"
          typeSpeed={50}
          deleteSpeed={0}
        />
      )}
    </p>
  );
}
