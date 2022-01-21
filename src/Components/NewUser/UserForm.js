import './dist/UserForm.css';


import Button from '../UI/Button';
import Card from '../UI/Card';
import { useState } from 'react';

const UserForm = (props) => {
    const [enteredName, setEnteredName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [warning, setWarning] = useState(false);

    const onNameChange = (event) => {
        setEnteredName(event.target.value);
    }

    const onAgeChange = (event) => {
        setEnteredAge(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        if (enteredAge.trim().length === 0 || enteredName.trim().length === 0) {
            setWarning(true);
            return;
        }
        if (+enteredAge < 1) {
            setWarning(true);
            return;
        }
        props.onAddUser(enteredName, enteredAge);
        setEnteredAge('');
        setEnteredName('');
    }

    return (
        <form onSubmit={submitHandler}>
            <Card className="user-form__controls">
                <div className="user-form__control">
                    <label htmlFor='username'>Username</label>
                    <input id='username' type='text' value={enteredName} onChange={onNameChange} />
                </div>
                <div className="user-form__control">
                    <label htmlFor='age'>Age (Years)</label>
                    <input id='age' type='number' value={enteredAge} onChange={onAgeChange} />
                </div>
                <div className="user-form__actions">
                    <Button  >Add User</Button>
                </div>
            </Card>
        </form>
    )
}

export default UserForm;