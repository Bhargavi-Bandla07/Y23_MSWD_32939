// src/components/User.js
import React from 'react';

const User = (props) => {
    return (
        <div>
            <h2>Name of the user {props.name} logged in as</h2>
        </div>
    );
}

export default User;
