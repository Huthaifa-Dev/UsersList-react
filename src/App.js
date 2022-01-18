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

  const storeUser = (user) => {
    setUsers(prevUsers => [user, ...prevUsers]);
  }
  return (
    <div>
      <UserForm addUser={storeUser} />
      <UsersList users={users} />
    </div>
  );
}

export default App;
