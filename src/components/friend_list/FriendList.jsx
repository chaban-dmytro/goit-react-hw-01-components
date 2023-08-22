import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export const FriendsList = ( props ) => {
  return (
    <ul className={css.items}>
      {props.friends.map( ( { avatar, name, isOnline, id } ) => (
        <li key={id} className={css.item}>
          {isOnline === true ? <span className={`${css.status} ${css.online} `}></span> : <span className={`${css.status} ${css.offline} `}></span>}
          <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
          <p className={css.name}>{name}</p>
        </li>
       ))}
    </ul>
  )
}

FriendsList.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
  id: PropTypes.number,
  children: PropTypes.element,
}