import React from "react";

function ButtonComponent({ children }) {
  return (
    <button type="button">
      <div>{children}</div>
    </button>
  );
}

export default ButtonComponent;
