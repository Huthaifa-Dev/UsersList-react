import React from "react";

import Card from '../UI/Card';
import UserItem from './UserItem';
import './dist/UsersList.css';

const UsersList = (props) => {

    return (
        <Card className='users'>
            <ul>
                {props.users.map(user => <UserItem name={user.name} age={user.age} key={user.name + user.age} />)}
            </ul>
        </Card>
    )
}

export default UsersList;
