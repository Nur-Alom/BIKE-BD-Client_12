import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }

    const handleAdminSubmit = (e) => {
        const user = { email }
        fetch('http://https://afternoon-tundra-43187.herokuapp.com/users/admin', {
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
            })
        e.preventDefault();
    }
    return (
        <div>
            <h2>Make a user in admin</h2>
            <form onSubmit={handleAdminSubmit}
                style={{ marginTop: "80px" }}>
                <input
                    sx={{ width: "50%" }}
                    type="email"
                    label="Email"
                    onBlur={handleOnBlur}
                    variant="standard" />
                <button type="submit" variant="contained">Make Admin</button>
            </form>
            {success && alert('Make Admin Successfully')}
        </div>
    );
};

export default MakeAdmin;