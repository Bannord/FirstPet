import React from "react";

import "./MyBtn.scss";

export default function MyButton({ children, ...props }) {
  return (
    <button {...props} className="MyBtn">
      {children}
    </button>
  );
}
