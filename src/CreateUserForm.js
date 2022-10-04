import React, { useReducer } from "react";

export const CreateUserForm = () => {
  const initialFormState = {
    first_name: "",
    last_name: "",
  };

  const createUserReducer = (state, action) => {
    switch (action.type) {
      case "HANDLE_INPUT_TEXT":
        return {
          ...state,
          [action.field]: action.payload,
        };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(createUserReducer, initialFormState);



  const handleChange = (e) => {
    dispatch({
      field: e.target.name,
      payload: e.target.value,
      type: "HANDLE_INPUT_TEXT",
    });
  };

  const handleSubmit = () => {
    console.log(state);
    fetch("https://ondeck-backend12.herokuapp.com/customers", {
      method: "POST",
      body: JSON.stringify(state),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => data);
  };

  return (
    <form>
      <label for="first_name">
        First name:
        <input type="text" name="first_name" onChange={handleChange} />
      </label>
      <label for="last_name">
        Last name:
        <input type="text" name="last_name" onChange={handleChange} />
      </label>
      <input
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      />
    </form>
  );
};