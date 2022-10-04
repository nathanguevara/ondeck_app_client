import React from "react";

export const List = (props) => {
  const { component: Component } = props;
  return (
    <ul>
      {props.items.map((x) => (
        <Component first_name={x.first_name} last_name={x.last_name} />
      ))}
    </ul>
  );
};