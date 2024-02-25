import React from "react";
import { useState, useEffect } from "react";

export const Users = () => {
  const [users, setUsers] = useState([]);
  const[fetching, setFetching] = useState(false);

  useEffect(() => {
    fetch("http://localhost:4001/api/users") // promise chaining
      .then((res) => res.json())
      .then((val) => {
        console.log(val);
        setUsers(val);
      })
      .catch((err) => console.log(err));
  }, [fetching]);

  return (
    <div>
      {users.map((user, idx) => (
        <p key={idx}>Username: {user.user}</p>
      ))}
      <button onClick={() => setFetching(!fetching)}>Fetch</button>
    </div>
  );
};