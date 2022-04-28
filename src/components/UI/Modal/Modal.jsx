import cl from "./Modal.module.css";

import React from "react";

export default function Modal({ children, visible, setVisible }) {
  const rootClases = [cl.my_modal];
  if (visible) {
    rootClases.push(cl.active);
  }

  return (
    <div className={rootClases.join(" ")} onClick={() => setVisible(false)}>
      <div className={cl.my_modal_content} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}
