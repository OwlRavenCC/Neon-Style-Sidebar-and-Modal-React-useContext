import React, { useContext } from "react";
import { GiBackwardTime } from "react-icons/gi";

import { AppContext } from "../context/Context";

const Modal = () => {
  const { modalState, setModalState, toggleORS } = useContext(AppContext);

  return (
    <div className={`modal-overlay ${modalState && "open"}`}>
      <div className="modal-container">
        <button
          className="btn-burger-close"
          onClick={() => toggleORS(modalState, setModalState)}
        >
          <GiBackwardTime />
          <span>BACK TO PAST</span>
        </button>
      </div>
    </div>
  );
};

export default Modal;
