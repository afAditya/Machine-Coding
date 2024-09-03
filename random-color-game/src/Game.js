import { getRandomColor } from "./utils";
import GameOver from "./GameOver.js";
import { useMemo, useState } from "react";
import Box from "./Box.js";
import _ from "lodash";
// Use this data to create the shape
const BOX_DATA = [
  [1, 1, 1],
  [1, 0, 0],
  [1, 1, 1],
];

export default function Game({ total }) {
  const [activeColors, setActiveColors] = useState([]);
  const [revealedColors, setRevealedColors] = useState(new Set());
  const [roundCount, setRoundCount] = useState(null);

  const handleBoxSelection = (currentColor) => {
    if (activeColors.length === 0) {
      setActiveColors([currentColor]);
      return;
    }
    if (activeColors[0] === currentColor) {
      setRevealedColors((prev) => new Set(prev.add(currentColor)));
      setActiveColors([]);
    } else {
      setTimeout(() => {
        setActiveColors([]);
      }, 400);
    }

    setRoundCount((prev) => prev + 1);
  };

  function handleReset() {
    setActiveColors([]);
    setRevealedColors(new Set());
    setRoundCount(0);
  }

  const boxes = useMemo(() => {
    const colors = getRandomColor(total / 2);
    const pairedColors = _.shuffle([...colors, ...colors]);

    return pairedColors.map((color, id) => {
      return {
        id,
        bgColor: color,
      };
    });
  }, [total]);

  return (
    <div className="container">
      {revealedColors.size === total / 2 ? (
        <GameOver roundCount={roundCount} onClick={handleReset} />
      ) : (
        <div className="boxes">
          {boxes.map((box) => {
            return (
              <Box
                key={box.id}
                onBoxSelection={handleBoxSelection}
                revealedColors={revealedColors}
                activeColors={activeColors}
                {...box}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
