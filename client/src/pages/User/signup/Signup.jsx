import React from "react";

export default function Signup() {
  return (
    <div className="center">
      <p className="center__tittle">Create Account</p>
      <form action="" className="center__form">
        <div className="center__form__text">
          <input type="text" className="center__form__text__input" required />
          <span className="center__form__text__span"></span>
          <label className="center__form__text__label">Name</label>
        </div>

        <div className="center__form__text">
          <input type="text" className="center__form__text__input" required />
          <span className="center__form__text__span"></span>
          <label className="center__form__text__label">Last Name</label>
        </div>

        <div className="center__form__text">
          <input type="text" className="center__form__text__input" required />
          <span className="center__form__text__span"></span>
          <label className="center__form__text__label">Email</label>
        </div>

        <div className="center__form__text">
          <input type="text" className="center__form__text__input" required />
          <span className="center__form__text__span"></span>
          <label className="center__form__text__label">Password</label>
        </div>

        <div className="center__form__text">
          <input type="text" className="center__form__text__input" required />
          <span className="center__form__text__span"></span>
          <label className="center__form__text__label">Confirm Password</label>
        </div>
        <div className="center__form__text">
          <input type="text" className="center__form__text__input" required />
          <span className="center__form__text__span"></span>
          <label className="center__form__text__label">Age</label>
        </div>

        <div className="center__form__text">
          <input type="text" className="center__form__text__input" required />
          <span className="center__form__text__span"></span>
          <label className="center__form__text__label">Gender</label>
        </div>

        <button type="submit" className="center__form__submit">
          Create Account
        </button>
        <div className="center__form__singup" />
      </form>
    </div>
  );
}
