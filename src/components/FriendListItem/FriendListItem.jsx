import css from './FriendListItem.module.css'
import PropTypes, { bool } from "prop-types";
import clsx from "clsx";

export const FriendListItem = ({ friend }) => {
    const examinationOnline = (status) => {
        if (status) {
            return css.isOnline;
        }
        else {
            return css.notOnline
        }
    }


   return <li key={friend.id} className={css.item}>
        <span className={clsx(css.status, examinationOnline(friend.isOnline))}></span>
        <img className={css.avatar} src={friend.avatar} alt="User avatar" width="48" />
        <p className={css.name}>{friend.name}</p>
    </li>
}
 
FriendListItem.propTypes = {
    friend: PropTypes.shape({
        avatar: PropTypes.string,
        name: PropTypes.string,
        isOnline: bool,
        id: PropTypes.number,
  }),
}