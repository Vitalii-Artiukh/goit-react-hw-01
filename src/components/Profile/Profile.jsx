import clsx from 'clsx';

import style from './Profile.module.css';

import React from 'react';

const Profile = ({ username, tag, location, avatar, stats }) => {
  // const { username, tag, location, avatar, stats } = props;

  return (
    <div className={style.profileWrapper}>
      <div className={style.avatarWrapper}>
        <img className={style.image} src={avatar} alt={'avatar' + username} />
        <p className={style.textName}>{username}</p>
        <p className={style.textLast}>{tag}</p>
        <p className={style.textLast}>{location}</p>
      </div>

      <ul className={style.stats}>
        <li className={style.statsItemFirst}>
          <span>Followers</span>
          <span className={style.statsResault}>{stats.followers}</span>
        </li>
        <li className={style.statsItem}>
          <span>Views</span>
          <span className={style.statsResault}>{stats.views}</span>
        </li>
        <li className={style.statsItemLast}>
          <span>Likes</span>
          <span className={style.statsResault}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
