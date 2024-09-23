import clsx from 'clsx';

import style from './Profile.module.css';

import React from 'react';

const Profile = props => {
  const { username, tag, location, online = false, avatar, stats } = props;

  return (
    <>
      <img src={avatar} alt="avatar" width="512" />
      <h3>{username}</h3>
      <p>{tag}</p>
      <p>{location}</p>

      <p>{stats}</p>
    </>
  );
};

export default Profile;
