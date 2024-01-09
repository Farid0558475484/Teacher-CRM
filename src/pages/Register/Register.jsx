// import React, { useState } from "react";
import s from "./Register.module.scss";

function Register() {
  return (
    <main>
      <section className={s.register}>
        <div className={s.registerForm}>
          <h2>Register</h2>
          {/* {error && <div className={s.error}>{error}</div>} */}
          <form>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              autoComplete="on"
            />
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Email"
              autoComplete="on"
            />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              autoComplete="new-password"
            />
            <button>Sign Up</button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Register;
