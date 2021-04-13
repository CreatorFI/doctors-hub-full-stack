import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Appointment from "./components/Appointment/Appointment";
import AllPatients from "./components/Dashboard/AllPatients/AllPatients";
import Dashboard from "./components/Dashboard/MainDashboard/Dashboard";
import Home from "./components/Home/Home";
import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute";
import SignIn from "./components/Login/SignInAndUp/SignIn";
export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value = {[loggedInUser, setLoggedInUser]}>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path ="/home">
          <Home/>
        </Route>
        <PrivateRoute path ="/appointment">
          <Appointment></Appointment>
        </PrivateRoute>
        <PrivateRoute path ="/dashboard/appointment">
          <Dashboard></Dashboard>
        </PrivateRoute>
        <PrivateRoute path ="/dashboard/allPatients">
          <AllPatients></AllPatients>
        </PrivateRoute>
        <Route path ="/login">
          <SignIn></SignIn>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
