import page from "../node_modules/page/page.mjs";
import { homeView } from "./views/homeView.js";
import { authMiddleware } from "./middleware/authMiddleware.js";
import {
  renderNavigationMiddleware,
  renderContentMiddleware,
} from "./middleware/renderMiddleware.js";
import { loginView } from "./views/loginView.js";
import { registerView } from "./views/registerView.js";
import { logoutView } from "./views/logoutView.js";
import { catalogView } from "./views/catalogView.js";
import { detailsView } from "./views/detailsView.js";
import { createView } from "./views/createView.js";
import { editView} from "./views/editView.js"
import { deleteView } from "./views/deleteView.js"

page(authMiddleware);
page(renderNavigationMiddleware);
page(renderContentMiddleware);

page("/", homeView);
page("/login", loginView);
page("/register", registerView);
page("/logout", logoutView);
page("/catalog", catalogView);
page("/details/:jobId", detailsView);
page("/albums/:jobId/edit", editView)
page("/albums/:jobId/delete", deleteView)
page("/create", createView);

page.start();
