import React from "react";
import ReactDOM from "react-dom";

export const JokeList = (props) => {
  const { component: Component } = props;
  return (
    <ul>
      {props.items.map((x) => (
        <Component joke_text={x.joke_text} />
      ))}

    </ul>
  );
};
