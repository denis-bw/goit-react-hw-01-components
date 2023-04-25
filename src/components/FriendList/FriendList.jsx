import css from './FriendList.module.css'
import PropTypes from "prop-types";
import clsx from "clsx";

export const FriendList = ({ friends }) => {
   
    const examinationOnline = (status) => {
        if (status) {
            return css.isOnline;
        }
        else {
            return css.notOnline
        }
    }

    return (
        <ul className={css.friendList}>{
            friends.map((friend) => (
                        <li key={friend.id} className={css.item}>
                    <span className={clsx(css.status, examinationOnline(friend.isOnline))}></span>
                            <img className={css.avatar} src={friend.avatar} alt="User avatar" width="48" />
                            <p className={css.name}>{friend.name}</p>
                        </li>
                    )
                )
        }</ul>
    );
};


  FriendList.propTypes = {
  friends: PropTypes.array,
};