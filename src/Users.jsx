import React from 'react';

export const Users = () => {
    const fetchUsers = () => {
        fetch('http://localhost:4001/api/users') // promise chaining
        .then(res => res.json())
        .then((val) => {
            console.log(val);
        })
        .catch(err => console.log(err));
    };
    fetchUsers();
    return <div>Users</div>;
};