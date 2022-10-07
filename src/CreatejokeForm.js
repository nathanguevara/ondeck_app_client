import React, { useReducer } from "react";

export const CreatejokeForm = () => {
  const initialFormState = {
    joke_text: '',
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
    fetch("https://ondeck-backend12.herokuapp.com/api/jokes", {
      method: "POST",
      body: JSON.stringify(state),
      headers: {
        "Content-Type": "application/json"
      },
    })
      .then((res) => res.json())
      .then((data) => data);
  };

  return (
    <div>
      <form>
      <label for="joke_text">
        Add Joke
        <input type="text" name="joke_text" onChange={handleChange} />
      </label>      
      <input
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      />
    </form>
    </div>
  );
};