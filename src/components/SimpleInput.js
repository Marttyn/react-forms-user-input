import React, { useState, useEffect } from "react";

const SimpleInput = (props) => {
  const [name, setName] = useState("");
  const [nameIsValid, setNameIsValid] = useState(false);
  const [nameTouched, setNameTouched] = useState(false);

  useEffect(() => {
    console.log("useEffect");
    if (nameIsValid) {
      console.log("name is valid");
    }
    return () => {
      console.log("cleanup");
    };
  }, [nameIsValid]);

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const nameInputBlurHandler = () => {
    setNameTouched(true);

    if (name.trim().length === 0) {
      setNameIsValid(false);
      return;
    }
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    setNameTouched(true);

    setNameIsValid(true);

    console.log(name);
  };

  const nameInputIsInvalid = !nameIsValid && nameTouched;
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
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
