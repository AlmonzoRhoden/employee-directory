import React from "react";
import "./style.css";

function Button(props) {

  return <button onClick={props.cb} type="button" className="btn btn-success" name={props.name}>{props.text}</button>;
}

export default Button;