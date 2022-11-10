import React from "react";

export default function AccRec() {
  return (
    <div className="center">
      <p className="center__tittle">Recover Account</p>
      <form action="" className="center__form">
        <p>Recovery information will be sent to your email</p>
        <div className="center__form__text">
          <input type="text" className="center__form__text__input" required />
          <span className="center__form__text__span"></span>
          <label className="center__form__text__label">Email</label>
        </div>

        <button type="submit" className="center__form__submit">
          Recover Account
        </button>
        <div className="center__form__singup" />
      </form>
    </div>
  );
}
