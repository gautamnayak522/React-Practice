import logo from './logo.svg';
import './App.css';
import Employee from './Components/Employee';
import Department from './Components/Department';

function App() {

  const data = "aaaaa";
  var isLoggedIn = true;
  
  return (
    <div>
      {isLoggedIn && <MyButton/>}
      {data}
      
      <hr/>

      <Employee/>
      <hr/>
      <Department/>

    </div>
  );
}

function MyButton() {
  return (
    <button>I'm a button</button>
  );
}

export default App;
