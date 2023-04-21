import React, { Component, useState } from 'react';

function Department() {

    const [name, setName] = useState('abcd');

    const [person , SetPerson] = useState({
        name:'',
        address:{
            city:'fff',
            state:''
        },
        Dob:''
    })

    function SetPersonName(e){
        SetPerson({ ...person,
            name:e.target.value,
            address:{
                city:'123'
            }
        })
    }
    

    return ( 
        <div>
            <p>
            {name} {'is'} 
            </p>
            <input type="search" value={name} onChange={(e)=>setName(e.target.value)}></input>

            <h2>Person</h2>

            <p>Name : {person.name} City : {person.address.city} State : {person.address.state} DOB : {person.Dob}</p>

            <p>Person Name: <input type='text' value={person.name} onChange={SetPersonName}></input></p>
            
            {/* <p>Person City: <input type='text' value={person.address.city} onChange={SetPersonName}></input></p> */}

        </div>
     );
}

export default Department;