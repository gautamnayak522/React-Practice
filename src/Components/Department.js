import React, { useEffect, useState } from 'react';
import { LoginService } from '../services/refs/LoginService - ref2';
import { SharedService } from '../services/SharedService';

function Department() {

    useEffect(() => {
        LoginService.getData().subscribe(message => {
            //setlogin(message.value)
            console.log("Department subscribe" + message);
        });
        //return ()=>LoginService.getData().unsubscribe();

        SharedService.getProducts()
            .then(data => {
                console.log(data)
                setproducts(data.data);
            })
            .catch(err => {
                console.log(err);
            })



    }, [])

    const [name, setName] = useState('abcd');
    const [products, setproducts] = useState([]);

    const [person, SetPerson] = useState({
        name: '',
        address: {
            city: 'fff',
            state: ''
        },
        Dob: ''
    })

    function SetPersonName(e) {
        SetPerson({
            ...person,
            name: e.target.value,
            address: {
                city: '123'
            }
        })
    }

    return (
        <div>




            <p>
                {name} {'is'}
            </p>
            <input type="search" value={name} onChange={(e) => setName(e.target.value)}></input>

            <h2>Person</h2>

            <p>Name : {person.name} City : {person.address.city} State : {person.address.state} DOB : {person.Dob}</p>

            <p>Person Name: <input type='text' value={person.name} onChange={SetPersonName}></input></p>

            {/* <p>Person City: <input type='text' value={person.address.city} onChange={SetPersonName}></input></p> */}

            <table className="table table-striped text-center">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Maf Date</th>
                        <th>Maf At</th>
                        <th>SKU</th>
                        <th>Qauntity</th>
                        <th>Supplier</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((p) => {
                        return (
                            <tr key={p.productId}>
                                <td>{p.productId}</td>
                                <td>{p.productName}</td>
                                <td>{p.price}</td>
                                <td>{p.mafDate}</td>
                                <td>{p.mafAt}</td>
                                <td>{p.sku}</td>
                                <td>{p.quantity}</td>
                                <td>{p.supplier}</td>
                                <td>{p.description}</td>
                            </tr>

                        )
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default Department;