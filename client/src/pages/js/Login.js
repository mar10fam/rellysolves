import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useGoogleLogin } from '@react-oauth/google';
import { AuthContext } from '../../context/AuthContext';
import Axios from 'axios';
import '../css/Login.css';

const Login = () => {
  const { user, setUser } = useContext(AuthContext);
  const { setProfile } = useContext(AuthContext);

  const navigate = useNavigate();

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => {
      console.log("onSuccess Response: ", codeResponse)
      setUser(codeResponse)
    },
    onError: (error) => console.log("Login Failed: ", error)
  });

  useEffect(() => {
      if(Object.keys(user).length !== 0) {
        Axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
          headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: 'application/json'
          }
      }).then((res) => {
        console.log("Profile Data: ", res)
        setProfile(res.data);
        navigate('/')
      }).catch((err) => {
        console.log(err);
      })
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user]);

  return (
    <div className="loginPage">
      <div className="loginBody">
        <p id="title">RellySolves</p>
        <img id="relly" src="/images/relly1.png" alt="Relly"></img>
        <p id="rellySpeaks">Hello there! My name's Relly.<br/>Let's practice math together!</p>
      </div>
      <div className="loginForm">
        <div className="loginFormContent">
          <p id="welcomeText">
            Welcome to RellySolves<br/>
            where you can practice numerous math topics.<br/><br/>
            Let's get you signed in!
          </p>
          <button id="loginButton" onClick={() => login()}>Sign in with Google</button>
        </div>
        <p id="footer">Created by @mar10fam</p>
      </div>
    </div>
  )
}

export default Login