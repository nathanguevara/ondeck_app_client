import React from "react";

export const JokeItem = (props) => {
  return (
    <li>
      {props.joke_text}
    </li>
  );
};