import React, { useEffect, useContext } from 'react'
import jwt_decode from "jwt-decode";
import { AuthContext } from '../../context/AuthContext';

const Login = () => {
  const { setUser } = useContext(AuthContext)

  const handleLogin = (response) => {
    console.log("encoded JWT ID token: " + response.credential);
    var userObject = jwt_decode(response.credential);
    console.log(userObject);
    setUser(userObject);
    document.getElementById("signInDiv").hidden = true;
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: "452686572704-8j9t6tk2am9q371ol6sg32u1a8354nan.apps.googleusercontent.com",
      callback: handleLogin
    });

    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      { theme: "outline", size: "large" }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div id="signInDiv"></div>
  )
}

export default Login