import { useState } from "react";
import classes from "./Counter.module.scss";

const Counter = () => {
  console.log(classes);

  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount((prev) => prev + 1)}>increment</button>
      <h1 className={classes.count}>{count}</h1>
    </div>
  );
};

export { Counter };
