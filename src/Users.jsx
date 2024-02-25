import React from 'react';

export const Users = () => {
    const fetchUsers = () => {
        fetch('http://localhost:4001/api/users') // promise chaining
        .then(res => res.json())
        .then();
    };
    return <div>Users</div>;
};