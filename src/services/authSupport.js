// const [loggedIn, setLoggedIn] = React.useState(
//   sessionStorage.getItem("loggedIn") == "true" || false
// );
// const login = () => {
//   setLoggedIn(true);
//   sessionStorage.setItem("loggedIn", true);
// };
// const logout = () => {
//   api()
//     .post("/logout")
//     .then((response) => {
//       if (response.status === 204) {
//         setLoggedIn(false);
//         sessionStorage.setItem("loggedIn", false);
//       }
//     });
// };
