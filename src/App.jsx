import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import UsersForm from './assets/Components/UsersForm';
import swal from 'sweetalert'
import UserList from './assets/Components/UserList';
function App() {

  const [ userList, setUserList] = useState([]);

  useEffect(() =>{
    axios.get('https://users-crud.academlo.tech/users/')
    .then(res => setUserList (res.data));
  }, [])
  
  const getusers = () =>{
    axios.get('https://users-crud.academlo.tech/users/')
    .then (res => setUserList(res.data));
  }

  console.log(userList);

{/*
  const usuarioEliminado =() =>{
    swal({
      title: "Usuario eliminado",
      text: "PaPu",
      icon: "success",
      button: "Aceptar"

    });
  }
 */}
  console.log(userList);
  return (
    <div className="App">
      {/*<button onClick={()=>usuarioEliminado()}>Eliminar usuario</button>*/}
      <UsersForm getusers = {getusers} />
      <UserList userList= {userList} getusers= {getusers} />
      {/* <UsersForm/> */}
      
    </div>
  )
}

export default App
