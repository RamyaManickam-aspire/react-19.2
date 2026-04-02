import "./button.css";

const BtnComp = ({ children, clickEvent }: any) => {
  const btnText = "Click Me!";
  const formatText = (text: string) => {
    return text.toUpperCase();
  };
  const onBtnClick = () => {
    alert("Button Clicked!");
    clickEvent("Child Button Clicked!");
  };
  const types = ["Primary", "Secondary", "Success", "Danger"];
  return (
    <>
      <button
        className="btn"
        style={{ backgroundColor: "pink" }}
        onClick={onBtnClick}
      >
        {formatText(btnText)}
      </button>
      <p>{children}</p>
      <div>
        <h4>Type of Buttons</h4>
        <ul>
          {types.map((type, index) => (
            <li key={index}>{type}</li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default BtnComp;
