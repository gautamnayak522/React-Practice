import React, { Component } from 'react';
import UserList from './user-list/UserList';
import SearchBox from './SearchBox';

class Employee extends Component {

    state = {
        users: [],
        testName: 'Inital Name',
        searchTerm:''
    }

    // const setEmpName = (name)=>{
    //     this.setState({empName:name});
    // }

    settestName = name => {
        console.log("Okkk");
        this.setState({ testName: name });
    }

    // const [name, setName] :useState;

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(res => this.setState({ users: res }))
    }

    render() {
        
         console.log("Employee ");

         
        //  const{users,testName}= this.state;

         
            const filteredUsers = this.state.users.filter(u=>
            
 
                u.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
            //  u.name == 'Leanne Graham'   
            
            )
            console.log("filtered",  filteredUsers);

      

        return (
            <div>

                <p>{this.state.testName}</p>

                <button onClick={() => this.setState({ users: [...this.state.users, { userId: this.state.users[this.state.users.length - 1].userId + 1, userName: 'EEE' }] })}>Add User</button>

                <button onClick={() => this.setState({ testName: 'abcd' })}>Change testName</button>

                <input type="text" value={this.state.testName} onChange={(e) => this.settestName(e.target.value)}></input>

                <input type="text" value={this.state.testName} onChange={(e) => this.setState({ testName: e.target.value })}></input>

                <hr />
                
                
                <SearchBox placeholder='Search Employee' handleChange={(e) => this.setState({ searchTerm: e.target.value })} />

                <UserList userdata={filteredUsers} />
                
            </div>
        );
    }
}

export default Employee;
