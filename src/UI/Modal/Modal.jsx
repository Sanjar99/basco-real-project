import React from "react";
import { Slide, Zoom } from "react-reveal";
import "./_modal.scss";
function Modal({ shower, setShower, children }) {
  return (
    <Zoom center>
      <div className="box">
        <div className="modal">
          <div className="modal__head">
            <h2 onClick={() => setShower(!shower)}>X</h2>
            <div className="modal__head--draw"></div>
          </div>
          <div className="modal__body">{children}</div>
        </div>
      </div>
    </Zoom>
  );
}

export default Modal;
