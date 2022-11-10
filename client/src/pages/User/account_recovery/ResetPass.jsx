import React from "react";

export default function ResetPass() {
  return (
    <div className="center">
      <p className="center__tittle">Reset Password</p>
      <form action="" className="center__form">
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

        <button type="submit" className="center__form__submit">
          Create Account
        </button>
        <div className="center__form__singup" />
      </form>
    </div>
  );
}
