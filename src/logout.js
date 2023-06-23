import { getAuth } from "firebase/auth";

import { firebaseApp } from "./config/firebase";

const auth = getAuth(firebaseApp);
window.logout = () => {
  auth
    .signOut()
    .then(() => {
      localStorage.removeItem("token");
      setTimeout(() => {
        window.location.href = "login.html";
      }, 500);
    })
    .catch((error) => console.log(error));
};
