import { Typewriter } from 'react-simple-typewriter';
import { useState, useEffect, useMemo } from 'react';

export default function MultiTyping() {
  const [currentLine, setCurrentLine] = useState(0);
  const [finishedLines, setFinishedLines] = useState([]);

  const lines = useMemo(
    () => [
      'It’s 1952. Myla wakes up in a decaying, abandoned place filled ',
      'with haunting echoes and buried secrets. What begins as a search ',
      'for answers quickly becomes a fight for sanity, as reality blurs ',
      'and every shadow feels alive. Explore forgotten corridors and piece ',
      'together a past that refuses to stay silent. Will you help Myla escape — or become part of the nightmare?',
    ],
    []
  );

  useEffect(() => {
    if (currentLine < lines.length) {
      const timer = setTimeout(
        () => {
          setFinishedLines((prev) => [...prev, currentLine]);
          setCurrentLine((prev) => prev + 1);
        },
        lines[currentLine].length * 50 + 1000
      );
      return () => clearTimeout(timer);
    }
  }, [currentLine, lines]);

  return (
    <div className="mt-6 font-TestSohneMono text-xs text-white sm:text-sm lg:text-xl">
      {finishedLines.map((index) => (
        <p key={index}>{lines[index]}</p>
      ))}

      {currentLine < lines.length && (
        <div>
          <Typewriter
            key={currentLine}
            words={[lines[currentLine]]}
            loop={1}
            cursor
            cursorStyle="|"
            typeSpeed={50}
            deleteSpeed={0}
          />
        </div>
      )}
    </div>
  );
}
