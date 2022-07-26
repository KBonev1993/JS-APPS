import page from "../node_modules/page/page.mjs";
import { authMiddleware } from "./middlewares/authMiddleware.js";
import { renderMiddleWare } from "./middlewares/renderMiddleWare.js";
import { homeView } from "./views/homeView.js";
import { loginView } from "./views/loginView.js";
import { logoutView } from "./views/logoutView.js";
import { movieView } from "./views/movieView.js";
import { registerView } from "./views/registerView.js";

page(authMiddleware);
page(renderMiddleWare);

page("/", homeView);
page("/login", loginView);
page("/logout",logoutView)
page("/register", registerView)
page("/movies/:movieId/", movieView)
page("/movies", homeView)

page.start();
