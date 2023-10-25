import Navigo from "navigo";
const routerObj = new Navigo("/", { linksSelector: "a", hash: true });

import { Error } from "../Layouts/Err";

import { DefaultLayout } from "../Layouts/Default";

const root = document.querySelector("#root");
const render = (content, target) => {
  target.innerHTML = content;
};
const router = (pathItems, Default) => {
  if (Default) {
    root.innerHTML = DefaultLayout();
  }
  const body = document.querySelector("main .container .row .col-9");
  if (pathItems.length) {
    pathItems.forEach((item) => {
      routerObj.on(item.path, (paths) => {
        render(item.component(paths), body);
      });
    });
  } else {
    routerObj.notFound(() => {
      render(Error(), root);
    });
  }
  routerObj.resolve();
};

export { render, routerObj, router };
