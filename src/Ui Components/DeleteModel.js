import React from "react";
import ReactDOM from "react-dom";

import Overlaydelete from "./Overlaydelete";
import Backdrop from "./Backdrop";

export default function DeleteModel({ isOpen, onCancel, onConfirm }) {
  return ReactDOM.createPortal(
    <>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <Overlaydelete isOpen={isOpen} onCancel={onCancel} />,
        document.getElementById("modal-root")
      )}
    </>
  );
}
