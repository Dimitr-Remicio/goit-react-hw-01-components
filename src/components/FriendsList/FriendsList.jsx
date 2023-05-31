import PropTypes from 'prop-types';
import style from './FriendsList.module.css';

export default function FriendsList({ friends }) {
  
    return (
      <>
        <ul className={style.friendlist}>
           {friends.map(({id, avatar, name, isOnline }) => {
             return (
             
                <li className={style.item} key={id}>
                <span className={isOnline ? style.status__true : style.status__false}></span>
                <img className={style.avatar} src={avatar} alt="User avatar" width="48" />
                <p className={style.name} >{name}</p>
              </li>
           );
          })}
        </ul>
      </>
    );
  }
  
  FriendsList.prototype = {
    friends: PropTypes.arrayOf(
      PropTypes.shape({
        isOnline: PropTypes.bool.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
      })
    ).isRequired,
  };
  
//   FriendsList.prototype = {
//     avatar: PropTypes.string,
//     name: PropTypes.string,
//     stats: PropTypes.arrayOf(
//       PropTypes.shape({
//         label: PropTypes.string.isRequired,
//         percentage: PropTypes.number.isRequired,
//       })
//     ).isRequired,
//   };