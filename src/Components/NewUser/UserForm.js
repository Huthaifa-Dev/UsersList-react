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
        if (enteredAge <= 0 || enteredName === '') {
            setWarning(true);
            return;
        }
        props.addUser({
            'name': enteredName,
            'age': enteredAge
        });
    }

    return (
        <form onSubmit={submitHandler}>
            <Card className="user-form__controls">
                <div className="user-form__control">
                    <label>Username</label>
                    <input type='text' onChange={onNameChange} />
                </div>
                <div className="user-form__control">
                    <label>Age (Years)</label>
                    <input type='number' onChange={onAgeChange} />
                </div>
                <div className="user-form__actions">
                    <Button type='submit'>Add User</Button>
                </div>
            </Card>
        </form>
    )
}

export default UserForm;