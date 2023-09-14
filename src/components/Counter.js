import "./Counter.css";
import { useState } from "react";
import "./PlayButton.css";
import App from "../App";
import Data from "../data/Data";
import videos from "../data/Data";
// import adds from "CounterDB.js";
function Counter() {
  const [als, setnum] = useState(0);
  console.log(als);
  function adds(e) {
    e.stopPropagation();
    console.log(als);
    setnum((als) => als + 1);
  }
  function remv(e) {
    e.stopPropagation();
    console.log(als);
    setnum((als) => als - 1);
  }
  function rmwd() {}
  return (
    <>
      <div id="c1">
        <h1>{als < 0 ? 0 : als}</h1>

        <button onClick={adds} id="btn-add">
          +
        </button>
        <button onClick={remv} id="btn-add1">
          -
        </button>
        <button onClick={rmwd}>remove</button>
      </div>
    </>
  );
}
export default Counter;
