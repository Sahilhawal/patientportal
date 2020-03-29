import React from "react";
import { connect } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
//import PatientDetails from "./components/projects/PatienttDetails";
import SignIn from "./components/auth/SignIn";
import CreatePatient from "./components/doctor/CreatePatient";
import PatientList from "./components/doctor/PatientList";
import MyProfile from "./components/patient/MyProfile";
import PrivateRoute from "./components/auth/PrivateRoute";
import Login from "./components/auth/SignIn";
import EditPatient from "./components/doctor/EditPatient";
import Demo_form from "./components/doctor/editform";
import NotFoundPage from "./components/layout/404page";
import AddButton from "./components/doctor/NewForm";

function App(props) {
  console.log("broooooooo", props);
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
      </div>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/addbutton" component={AddButton} />

        <Route path="/login" component={Login} />
        <Route path="/signin" component={SignIn} />

        <PrivateRoute
          path="/edit/:id"
          component={Demo_form}
          auth={props.auth}
        />
        <PrivateRoute
          path="/create"
          component={CreatePatient}
          auth={props.auth}
        />
        <Route
          path="/editpatient/:id"
          component={EditPatient}
          auth={props.auth}
        />
        <PrivateRoute
          path="/patientlist"
          component={PatientList}
          auth={props.auth}
        />
        <Route path="/myprofile/:id" component={MyProfile} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
}

const mapStateToProps = state => {
  console.log(state.auth.user_session);
  return {
    auth: state.auth
  };
};

export default connect(mapStateToProps)(App);
