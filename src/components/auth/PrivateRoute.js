import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";
import userAuth from "./user_auth";

const PrivateRoute = ({ component: Component, auth: auth, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      auth.isLoggedIn === true && auth.domain === "doctor" ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

export default PrivateRoute;
