import React, { Component } from 'react';
import UserList from './user-list/UserList';
import SearchBox from './SearchBox';

class Employee extends Component {

    state = {
        users: [],
        searchTerm: ''
    }

    // const setEmpName = (name)=>{
    //     this.setState({empName:name});
    // }

    // const [name, setName] :useState;

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(res => this.setState({ users: res }))
    }

    componentWillUnmount() {
        console.log("Unmount employee");
    }

    render() {

        console.log("render employee");

        //  const{users,testName}= this.state;

        const filteredUsers = this.state.users.filter(u =>
            u.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
            // u.name == 'Leanne Graham'   
        )

        console.log("filtered", filteredUsers);

        return (
            <div>
                <hr />

                <SearchBox placeholder='Search Employee' handleChange={(e) => this.setState({ searchTerm: e.target.value })} />

                <button className='btn btn-primary' onClick={() => this.setState({ users: [...this.state.users, { id: this.state.users[this.state.users.length - 1].id + 1, name: 'Test User' }] })}>+ Add Employee</button>

                <UserList userdata={filteredUsers} />
            </div>
        );
    }
}

export default Employee;
