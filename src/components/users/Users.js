"use client"
import React, { useEffect, useState } from 'react';

import styles from "./Users.module.css"

const Users = () => {

    const [users , setUsers] = useState([]);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then (data => setUsers(data))
    },[])
    return (
        <div>
            <h1 className={styles.header_text}>Total number of User :{users.length}</h1>
            {
                users.map(user => (
                    <div
                    key={user.id}
                    className="card bg-gray-100 shadow-xl my-5 w-[70%] mx-auto"
                  >
                    <div className="card-body">
                      <h2 className="card-title">{user.name}</h2>
                      <p>Des: {user.email}</p>
                    </div>
                  </div>
                ))
            }
        </div>
    );
};

export default Users;