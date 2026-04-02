import { useState } from "react";
interface CounterText {
  counterText: string;
  btnMessage: string;
}

const CounterComp = ({ counterText, btnMessage }: CounterText) => {
  const [count, setCount] = useState(0);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <p>
        {counterText} {count}
      </p>
      <p>{btnMessage}</p>
    </>
  );
};
export default CounterComp;
