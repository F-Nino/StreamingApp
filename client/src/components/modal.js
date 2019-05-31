import React from "react";
import ReactDOM from "react-dom";
import history from "../history";
const Modal = props => {
  return ReactDOM.createPortal(
    <div
      onClick={() => history.push("/")}
      className="ui dimmer modals visable active"
    >
      <div
        onClick={props.onDismiss}
        className="ui standard modal visable active"
      >
        <div className="header">{props.title}</div>
        <div className="content">{props.content}</div>
        <div className="actions">{props.actions}</div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;
