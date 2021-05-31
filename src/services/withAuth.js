import React from "react";
import { isLoggedIn } from "./auth";

export default function withAuth(Component) {
  const AuthComponent = (props) => {
    return <Component {...props} />;
  };

  AuthComponent.getInitialProps = (context) => {
    const isUserLoggedIn = isLoggedIn(context?.req?.headers?.cookie || "");

    if (!isUserLoggedIn) {
      window.location.href = "/";
    }

    return { user: { isLoggedIn: isUserLoggedIn } };
  };

  return AuthComponent;
}
