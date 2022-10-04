import React from "react";

export const CustomerItem = (props) => {
  return (
    <li>
      {props.first_name} {props.last_name}
    </li>
  );
};