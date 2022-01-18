import Card from '../UI/Card';
import UserItem from './UserItem';

const UsersList = (props) => {

    return (
        <Card className=''>
            {props.users.map(user => <UserItem name={user.name} age={user.age} key={user.name + user.age} />)}
        </Card>
    )
}

export default UsersList;
