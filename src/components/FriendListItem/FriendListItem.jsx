import styles from '../FriendList/FriendList.module.css';
import clsx from 'clsx';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div>
      <img src={avatar} alt={'Avatar ' + name} width="80" />
      <p className={styles.name}>{name}</p>
      {isOnline ? (
        <p className={styles.online}>Online</p>
      ) : (
        <p className={styles.ofline}>Ofline</p>
      )}
    </div>
  );
};

export default FriendListItem;
