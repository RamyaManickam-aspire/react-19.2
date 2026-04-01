import BtnComp from "./button/button";
import CounterComp from "./counter/counter";
function App() {
  const props = { counterText: "Counter is from props" };
  return (
    <>
      <BtnComp>
        <p>Message from Parent</p>
      </BtnComp>
      <CounterComp counterText={"Counter is"}></CounterComp>
      <CounterComp {...props}></CounterComp>
    </>
  );
}

export default App;
