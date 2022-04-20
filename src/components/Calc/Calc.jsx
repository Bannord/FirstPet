import "./Calc.scss";

import React, { useState } from "react";
import DisplayCalc from "./DisplayCalc";
import CalcButtons from "./CalcButtons";

export default function Calc() {
  const [result, setResult] = useState("0");

  const clear = () => {
    setResult("");
  };

  const percent = () => {
    setResult(result / 100);
  };

  const handelClick = (e) => {
    let res = result + "";
    console.log(res);
    setResult(res.concat(e.target.name));
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
      <DisplayCalc result={result} />
      <CalcButtons
        handelClick={handelClick}
        clear={clear}
        calc={calc}
        transaction={transaction}
        percent={percent}
      />
    </div>
  );
}
