import {React,useState} from 'react';
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";


function App() {

    const [usersList, setUsersList] = useState([]);
    const onAddUSerHandler = (username,userAge) => {
        setUsersList((prevUSers)=>{
            return [...prevUSers,{name: username, age:userAge, id: Math.random().toString()}]
        })
    }
    return (
    <div>
<AddUser onAddUser={onAddUSerHandler}/>
        <UsersList users={usersList}/>
    </div>
  );
}

export default App;
