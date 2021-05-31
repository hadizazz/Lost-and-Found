import Cookies from "js-cookie";
import cookie from 'cookie'

export const Login = () => {
  const success = Cookies.set("User_is_logged_in", true, {
    expires: 86400,
    sameSite: "lax",
  });
  if (success) {
    window.location.href = "/home";
  }
};

export const isLoggedIn = (reqCookies = null) => {
  if (!reqCookies) {
    return !! Cookies.get("User_is_logged_in");
  }
  return !! cookie.parse(reqCookies).User_is_logged_in;
};

export const logOut = () => {
  if (typeof window !== "undefined") {
    // remove logged in user's cookie and redirect to login page
    const success = Cookies.remove("User_is_logged_in", {
      expires: 86400,
      sameSite: "lax",
    });
    if (success) {
      window.location.href = "/";
    }
  }
};
