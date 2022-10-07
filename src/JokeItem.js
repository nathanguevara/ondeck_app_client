import React from "react";



export const JokeItem = (props) => {
  return (
    <li>
      {props.joke_text}
      <button
        type="button"
        className="btn btn-danger"
        onClick={console.log("t")}
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </li>
  );
};