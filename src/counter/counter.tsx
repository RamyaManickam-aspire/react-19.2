import { useState } from "react";
interface CounterText {
  counterText: string;
}

const CounterComp = ({ counterText }: CounterText) => {
  const [count, setCount] = useState(0);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <p>
        {counterText} {count}
      </p>
    </>
  );
};
export default CounterComp;
