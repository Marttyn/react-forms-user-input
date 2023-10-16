import React, { useState } from "react";

const SimpleInput = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nameTouched, setNameTouched] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);

  const nameIsValid = name.trim().length > 0;
  const emailIsValid = email.trim().length > 0 && email.includes("@");

  const nameInputIsInvalid = !nameIsValid && nameTouched;
  const emailInputIsInvalid = !emailIsValid && emailTouched;

  let formIsValid = false;

  if (nameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };
  const nameInputBlurHandler = () => {
    setNameTouched(true);
  };

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };
  const emailInputBlurHandler = () => {
    setEmailTouched(true);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    setNameTouched(true);
    setEmailTouched(true);

    if (!nameIsValid) {
      return;
    }

    console.log(name);
    console.log(email);
    setName("");
    setEmail("");
    setNameTouched(false);
    setEmailTouched(false);
  };

  const nameDivClass = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";
  const emailDivClass = emailInputIsInvalid
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
      <div className={emailDivClass}>
        <label htmlFor="email">Your Email</label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={emailChangeHandler}
          onBlur={emailInputBlurHandler}
        />
        {emailInputIsInvalid && (
          <p className="error-text">Please enter a valid email!</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
