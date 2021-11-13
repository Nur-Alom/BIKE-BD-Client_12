import React, { useState } from 'react';
import './MakeAdmin.css';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const [adminError, setAdminError] = useState(false);

    // Take Email.
    const handleOnBlur = e => {
        setEmail(e.target.value);
    }

    // Make Admin Function.
    const handleAdminSubmit = (e) => {
        const user = { email }
        fetch('https://afternoon-tundra-43187.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setSuccess(true);
                }
                else {
                    setAdminError(true);
                }
            })
        e.preventDefault();
    }
    return (
        <div>
            <h2>Make a user in admin</h2>
            <form onSubmit={handleAdminSubmit}>
                <input
                    onBlur={handleOnBlur}
                    className="admin-input"
                    type="email"
                    name="email"
                    id="1"
                    placeholder="Enter Email"
                    required />
                <button type="submit" className="admin-btn">Make Admin</button>
            </form>
            {success && alert('Make Admin Successfully.')}
            {adminError && alert('This user is Already a admin , please try another one.')}
        </div>
    );
};

export default MakeAdmin;