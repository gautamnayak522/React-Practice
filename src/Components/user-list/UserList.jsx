// import React from 'react';
import User from '../user/user';
import './UserList.css';


import { useState } from "react";

function UserList(props) {

    console.log("data", props.userdata);

    return (
        <>
            <p className='text-center'>----------------UserList Component-----------------------</p>
            {/* <p>{props.userdata.}</p> */}
  
            <div className='user-list'>
                {props.userdata.map(user => (
                    <User key={user.id} user={user}/>
                ))}
            </div>

        </>
    );
}

export default UserList;