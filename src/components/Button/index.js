import React from "react";
import "./style.css";

// User filter choice button
function Button(props) 
{
  return <button class = "align-button" onClick={props.cb} type="button" className="btn btn-success" name={props.name}>{props.text}</button>;
}

export default Button;