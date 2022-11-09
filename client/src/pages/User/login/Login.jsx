import React from "react";

export default function Login() {
  return (
    <div className="center">
      <h1 className="center__tittle">LOGIN</h1>
      <form action="" className="center__form">
        <div className="center__form__text">
          <input type="text" className="center__form__text__input" required />
          <span className="center__form__text__span"></span>
          <label className="center__form__text__label">Email</label>
        </div>

        <div className="center__form__text">
          <input
            type="password"
            className="center__form__text__input"
            required
          />
          <span className="center__form__text__span"></span>
          <label className="center__form__text__label">Password</label>
        </div>

        <div className="center__form__passreset">Forgot Password?</div>

        <button type="submit" className="center__form__submit">
          Login
        </button>

        <div className="center__form__singup">
          Not a member?
          <a className="center__form__singup__link" href="clap.com">
            Sign Up
          </a>
        </div>
      </form>
    </div>
  );
}
