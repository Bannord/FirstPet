import React from "react";

export default function CalcButtons({
  handelClick,
  clear,
  calc,
  transaction,
  percent,
  ...props
}) {
  return (
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
      <button onClick={handelClick} name="/" className="btn division bg-orange">
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
      <button onClick={handelClick} name="*" className="btn myltiply bg-orange">
        X
      </button>

      <button onClick={handelClick} name="4" className="btn four">
        4
      </button>
      <button onClick={handelClick} name="5" className="btn five">
        5
      </button>
      <button onClick={handelClick} name="6" className="btn sixty">
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
  );
}
