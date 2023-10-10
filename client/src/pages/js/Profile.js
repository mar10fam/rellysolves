import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const Profile = () => {
  const { profile, setProfile } = useContext(AuthContext);

  const handleSignOut = (event) => {
    setProfile({});
  }

  return (
    <div>
      <h3>Hello {profile.name}</h3>
      <button onClick={(e) => handleSignOut(e)}>Sign Out</button>
    </div>
  )
}

export default Profile