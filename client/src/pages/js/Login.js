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
      if(user) {
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
    <div>
      <h2>Google Login</h2>
      <button onClick={() => login()}>Sign in with Google</button>
    </div>
  )
}

export default Login