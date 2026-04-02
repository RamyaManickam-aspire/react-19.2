import { useState } from "react";
import BtnComp from "./button/button";
import CounterComp from "./counter/counter";
import LoginComp from "./login/login";
function App() {
  const props = { counterText: "Counter is from props" };
  const [btnMessage, setMessage] = useState("");
  const onBtnClick = (message: string) => {
    setMessage(message);
    alert(message);
  };
  return (
    <>
      <LoginComp isLoggedIn={true}></LoginComp>
      <BtnComp clickEvent={onBtnClick}>
        <p>Message from Parent</p>
      </BtnComp>
      <CounterComp
        counterText={"Counter is"}
        btnMessage={btnMessage}
      ></CounterComp>
      <CounterComp {...props} btnMessage={btnMessage}></CounterComp>
    </>
  );
}

export default App;
