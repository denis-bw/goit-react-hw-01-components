import css from './FriendList.module.css'
import PropTypes, { bool } from "prop-types";
import {FriendListItem} from 'components/FriendListItem/FriendListItem'

export const FriendList = ({ friends }) => {
    return (
        <ul className={css.friendList}>{
            friends.map((friend) => (
                <FriendListItem key={friend.id} friend={friend} />
                ))
        }</ul>
    );
};



FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape({
        avatar: PropTypes.string,
        name: PropTypes.string,
        isOnline: bool,
        id: PropTypes.number,
  })),
};

