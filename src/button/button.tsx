import "./button.css";
const BtnComp = () => {
  const btnText = "Click Me!";
  const formatText = (text: string) => {
    return text.toUpperCase();
  };
  const onBtnClick = () => {
    alert("Button Clicked!");
  };
  return (
    <button
      className="btn"
      style={{ backgroundColor: "pink" }}
      onClick={onBtnClick}
    >
      {formatText(btnText)}
    </button>
  );
};
export default BtnComp;
