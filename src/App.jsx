import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import React, { useState, useEffect } from "react";
import Navbar from "./components/ui/organisms/Navbar";
import Main from "./components/pages/Main";
import About from "./components/pages/About";
import Menu from "./components/pages/Menu";
import Setting from "./components/pages/Setting";
import Login from "./components/pages/Login";
import Join from "./components/pages/Join";
import Join2 from "./components/pages/Join2";
import Create from "./components/pages/Create";
import Create2 from "./components/pages/Create2";
import Profile from "./components/pages/Profile";
import Meeting from "./components/pages/Meeting";
import Guide from "./components/pages/Guide";
import Manage from "./components/pages/Manage";
import Password from "./components/pages/Password";
import Password2 from "./components/pages/Password2";
import Password3 from "./components/pages/Password3";
import Meeting2 from "./components/pages/Meeting2";
import Meeting3 from "./components/pages/Meeting3";

// SPA 추후 무조건 개선해야함

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/menu" component={Menu} />
          <Route path="/about" component={About} />
          <Route path="/setting" component={Setting} />
          <Route path="/login" component={Login} />
          <Route path="/password" component={Password} />
          <Route path="/password2" component={Password2} />
          <Route path="/password3" component={Password3} />
          <Route path="/join" component={Join} />
          <Route path="/join2" component={Join2} />
          <Route path="/guide" component={Guide} />
          <Route path="/setting" component={Setting} />
          <Route path="/create" component={Create} />
          <Route path="/create2" component={Create2} />
          <Route path="/profile" component={Profile} />
          <Route path="/meeting/:id" component={Meeting} />
          <Route path="/meeting2" component={Meeting2} />
          <Route path="/meeting3" component={Meeting3} />
          <Route path="/manage" component={Manage} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
