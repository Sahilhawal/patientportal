import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
//import PatientDetails from "./components/projects/PatienttDetails";
import SignIn from "./components/auth/SignIn";
import CreatePatient from "./components/doctor/CreatePatient";
import PatientList from "./components/doctor/PatientList";
import MyProfile from "./components/patient/MyProfile";
import PrivateRoute from "./components/auth/PrivateRoute";
import Login from "./components/auth/SignIn";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
      </div>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/login" component={Login} />
        <Route path="/signin" component={SignIn} />
        <Route path="/create" component={CreatePatient} />
        <PrivateRoute path="/patientlist" component={PatientList} />
        <Route path="/myprofile/:id" component={MyProfile} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
