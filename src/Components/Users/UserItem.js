import React from "react";

import './dist/UserItem.css'

const UserItem = (props) => {
    return (
        <li className='user-item'>
            <p>{props.name} ({props.age} years old)</p>
        </li>
    )
}

export default UserItem;