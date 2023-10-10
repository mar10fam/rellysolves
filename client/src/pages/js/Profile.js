import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { googleLogout } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const { profile, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const logout = () => {
    googleLogout();
    setUser({});
    navigate('/login');
  }

  return (
    <div>
      <h3>Hello {profile.name}</h3>
      <button onClick={logout}>Sign Out</button>
    </div>
  )
}

export default Profile