import React from "react";

export default function Button(props) {
  return (
    <button
      className="custom-button"
      type={props.type || "button"}
      onClick={props.onClickButton}
    >
      {props.children}
    </button>
  );
}
