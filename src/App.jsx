import React, { memo } from "react";
import { useRoutes } from "react-router-dom";
import routes from "./router";
import useScrollTop from './hooks/useScrollTop'
import AppHeader from "components/app-header";
import AppFooter from "components/app-footer";

const App = memo(() => {
  useScrollTop()
  return (
    <div className="app">
      <AppHeader />
      <div className="page">{useRoutes(routes)}</div>
      <AppFooter />
    </div>
  );
});

export default App;
