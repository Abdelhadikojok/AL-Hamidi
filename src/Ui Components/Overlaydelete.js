import React from "react";

export default function Overlaydelete({ onCancel, onConfirm }) {
  return (
    <div className="modal-content">
      <p>Are you sure you want to delete?</p>
      <button onClick={onCancel}>Cancel</button>
      <button onClick={onConfirm}>Delete</button>
    </div>
  );
}
