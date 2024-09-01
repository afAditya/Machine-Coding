const Controls = ({ onUndo, onRedo, onReset, hasCircles, hasHistory }) => {
  return (
    <div className="controls" onClick={(e) => e.stopPropagation()}>
      <button
        disabled={!hasCircles}
        className={hasCircles ? "" : "disabled"}
        onClick={onUndo}
      >
        Undo
      </button>
      <button
        disabled={!hasHistory}
        className={hasHistory ? "" : "disabled"}
        onClick={onRedo}
      >
        Redo
      </button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
};

export default Controls;
