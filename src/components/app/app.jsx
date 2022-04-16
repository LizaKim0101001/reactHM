import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { AppRoute } from "../../const";
import Main from "../../pages/main/main";
import Archive from "../../pages/archive/archive"
import Form from "../../pages/form/form";
import Errors from "../../pages/404/404";

const App = ()=> {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={AppRoute.MAIN} exact component={Main}/>
        <Route path={AppRoute.ARCHIVE} exact component={Archive}/>
        <Route path={AppRoute.EVENT}>
          <Form/>
        </Route>
        <Route>
          <Errors></Errors>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

