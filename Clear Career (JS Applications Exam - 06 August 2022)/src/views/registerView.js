import { html } from "../../node_modules/lit-html/lit-html.js";
import * as authService from "../services/authService.js";


const registerTemplate = (submitHandler) => html`
<section id="register">
  <div class="form">
    <h2>Register</h2>
    <form class="login-form" @submit=${submitHandler}>
      <input
        type="text"
        name="email"
        id="register-email"
        placeholder="email"
      />
      <input
        type="password"
        name="password"
        id="register-password"
        placeholder="password"
      />
      <input
        type="password"
        name="re-password"
        id="repeat-password"
        placeholder="repeat password"
      />
      <button type="submit">register</button>
      <p class="message">Already registered? <a href="#">Login</a></p>
    </form>
  </div>
</section>`;


export const registerView = (ctx) => {
    const submitHandler = (e) => {
        e.preventDefault();
        
        let formData = new FormData(e.currentTarget)
        const { email, password } = Object.fromEntries(formData)
        const confPass = formData.get("conf-pass")
        
        if (confPass != password && password == "" && email == ""){
            alert("Invalid Data!")
            return
        }

        authService
          .register(email, password)
          .then(() => {
            ctx.page.redirect("/");
          })
          .catch((err) => {
            alert(err);
          });
      };

      
  ctx.render(registerTemplate(submitHandler));
}