import "./Calc.scss";

import React, { useState } from "react";

export default function Calc() {
  const [result, setResult] = useState("0");

  const clear = () => {
    setResult("");
  };

  const percent = () => {
    setResult(result / 100);
  };

  const handelClick = (e) => {
    setResult(result.concat(e.target?.name));
  };

  const transaction = () => {
    setResult(result * -1);
  };

  const calc = () => {
    try {
      setResult(Number(eval(result).toString()).toFixed(2));
    } catch (error) {
      setResult("Invalid format");
    }
  };
  return (
    <div className="calc">
      <div className="display_screen">
        <p>{result}</p>
      </div>
      <div className="buttons">
        <button onClick={clear} className="btn ac bg-grey">
          ac
        </button>
        <button onClick={transaction} className="btn plus-minus bg-grey">
          +/-
        </button>
        <button onClick={percent} name="%" className="btn percent bg-grey">
          %
        </button>
        <button
          onClick={handelClick}
          name="/"
          className="btn division bg-orange"
        >
          /
        </button>

        <button onClick={handelClick} name="7" className="btn seven">
          7
        </button>
        <button onClick={handelClick} name="8" className="btn eight">
          8
        </button>
        <button onClick={handelClick} name="9" className="btn nine">
          9
        </button>
        <button
          onClick={handelClick}
          name="*"
          className="btn myltiply bg-orange"
        >
          X
        </button>

        <button onClick={handelClick} name="4" className="btn four">
          4
        </button>
        <button onClick={handelClick} name="5" className="btn five">
          5
        </button>
        <button onClick={handelClick} name="6" className="btn six">
          6
        </button>
        <button onClick={handelClick} name="-" className="btn minus bg-orange">
          -
        </button>

        <button onClick={handelClick} name="1" className="btn one">
          1
        </button>
        <button onClick={handelClick} name="2" className="btn two">
          2
        </button>
        <button onClick={handelClick} name="3" className="btn three">
          3
        </button>
        <button onClick={handelClick} name="+" className="btn plus bg-orange">
          +
        </button>

        <button onClick={handelClick} name="0" className="btn zero">
          0
        </button>
        <button onClick={handelClick} name="." className="btn dot">
          .
        </button>
        <button onClick={calc} className="btn equal bg-orange">
          =
        </button>
      </div>
    </div>
  );
}
