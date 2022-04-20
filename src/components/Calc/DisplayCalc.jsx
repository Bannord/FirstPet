import React from "react";

export default function DisplayCalc({ result }) {
  return (
    <div className="display_screen">
      <p>{result}</p>
    </div>
  );
}
