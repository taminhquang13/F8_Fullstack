import { router } from "./Utils/router";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Products } from "./Pages/Products";
import { ProductDetail } from "./Pages/ProductDetail";
import { DefaultLayout } from "./Layouts/Default";

const App = () => {
  return router(
    [
      { path: "/", component: Home },
      { path: "/gioi-thieu", component: About },
      { path: "/san-pham", component: Products },
      { path: "/san-pham/:id", component: ProductDetail },
    ],
    DefaultLayout
  );
};

App();
