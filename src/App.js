import React, { useState } from 'react';
import UserForm from './Components/NewUser/UserForm';
import UsersList from './Components/Users/UsersList';


function App() {

  const DUMP_USERS = [
    {
      'name': 'Ahmad',
      'age': 21
    }
  ]

  const [users, setUsers] = useState(DUMP_USERS);

  const addUserHandler = (userName, userAge) => {
    setUsers(prevUsers => [...prevUsers, { 'name': userName, 'age': userAge }]);
  }
  return (
    <React.Fragment>
      <UserForm onAddUser={addUserHandler} />
      <UsersList users={users} />
    </React.Fragment>
  );
}

export default App;
