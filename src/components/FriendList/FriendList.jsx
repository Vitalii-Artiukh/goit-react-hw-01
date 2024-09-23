import React from 'react';
// import clsx from 'clsx';
import styles from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <div>
      <ul className={styles.myFriends}>
        {friends.map(friend => (
          <li className={styles.friendItem} key={friend.id}>
            <img src={friend.avatar} alt={'Avatar ' + friend.name} width="80" />
            <p className={styles.name}>{friend.name}</p>
            {friend.isOnline ? (
              <p className={styles.online}>Online</p>
            ) : (
              <p className={styles.ofline}>Ofline</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FriendList;
