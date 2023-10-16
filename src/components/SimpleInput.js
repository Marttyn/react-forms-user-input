import React, { useEffect, useState } from "react";

const SimpleInput = (props) => {
  const [name, setName] = useState("");
  const [nameTouched, setNameTouched] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);

  const nameIsValid = name.trim().length > 0;
  const nameInputIsInvalid = !nameIsValid && nameTouched;

  useEffect(() => {
    if (nameIsValid) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [nameIsValid]);

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const nameInputBlurHandler = () => {
    setNameTouched(true);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    setNameTouched(true);

    if (!nameIsValid) {
      return;
    }

    console.log(name);
    setName("");
    setNameTouched(false);
  };

  const nameDivClass = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameDivClass}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={nameChangeHandler}
          onBlur={nameInputBlurHandler}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Please enter a valid name!</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
