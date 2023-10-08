import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const Profile = () => {
  const { user, setUser } = useContext(AuthContext);

  const handleSignOut = (event) => {
    setUser({});
    console.log(user)
  }

  return (
    <div>
      <button onClick={(e) => handleSignOut(e)}>Sign Out</button>
    </div>
  )
}

export default Profile