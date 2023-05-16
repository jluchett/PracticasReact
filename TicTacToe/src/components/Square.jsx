export const Square = ({ children, isSelected, updateBoard, index }) => {
  const clasenom = `square ${isSelected ? "is-selected" : ""}`;
  const handleClick = () => {
    updateBoard(index);
  };
  return (
    <div onClick={handleClick} className={clasenom}>
      {children}
    </div>
  );
};
