import { useEffect, useState } from "react";

const DEFAULT_BG_COLOR = "#ffffff";

const Box = ({ bgColor, onBoxSelection, revealedColors, activeColors }) => {
  const isRevealed = revealedColors.has(bgColor);
  const [backGroundColor, setBackGroundColor] = useState(
    isRevealed ? bgColor : DEFAULT_BG_COLOR
  );

  const handleBoxColor = () => {
    if (backGroundColor !== DEFAULT_BG_COLOR) {
      return;
    }
    setBackGroundColor(bgColor);
    onBoxSelection(bgColor);
  };

  useEffect(() => {
    if (!isRevealed && activeColors.length === 0) {
      setBackGroundColor(DEFAULT_BG_COLOR);
    }
  }, [isRevealed, activeColors]);

  return (
    <div
      className="box"
      style={{ backgroundColor: backGroundColor }}
      onClick={handleBoxColor}
    ></div>
  );
};

export default Box;
