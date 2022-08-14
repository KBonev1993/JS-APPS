import { html } from "../../node_modules/lit-html/lit-html.js";
import * as authService from "../services/authService.js";

const loginTemplate = (submitHandler) => html` <!-- Login Page (Only for Guest users) -->
<section id="loginPage">
<form @submit=${submitHandler}>
  <div class="form">
    <h2>Login</h2>
    <form class="login-form">
      <input type="text" name="email" id="email" placeholder="email" />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="password"
      />
      <button type="submit">login</button>
      <p class="message">
        Not registered? <a href="#">Create an account</a>
      </p>
    </form>
  </div>
</section>
`;

export const loginView = (ctx) => {
  const submitHandler = (e) => {
    e.preventDefault();

    const { email, password } = Object.fromEntries(
      new FormData(e.currentTarget)
    );

    if (password == "" || email == ""){
      alert("Invalid Data!")
      return
  }

    authService
      .login(email, password)
      .then(() => {
        ctx.page.redirect("/");
      })
      .catch((err) => {
        alert(err);
      });
  };

  ctx.render(loginTemplate(submitHandler));
};
