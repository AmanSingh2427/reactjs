import React, { useContext } from 'react';
import UserContext from '../UserContext';

const Profile = () => {
  const { user,password } = useContext(UserContext);

  if (!user && !password) return <div>Please Login</div>;

  return <div>Welcome {user.username} and You Password is{user.password}</div>;
};

export default Profile;
