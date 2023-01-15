import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import UsersForm from './assets/Components/UsersForm';
import swal from 'sweetalert'
import UserList from './assets/Components/UserList';
function App() {

  const [ userList, setUserList] = useState([]);
  const [ userSelected, setUserSelected] = useState(null);
  const [isVisible, setIsVisible] = useState(false)
  useEffect(() =>{
    axios.get('https://users-crud.academlo.tech/users/')
    .then(res => setUserList (res.data));
  }, [])
  
  const getusers = () =>{
    axios.get('https://users-crud.academlo.tech/users/')
    .then (res => setUserList(res.data));
  }

  const selectUser = (user) =>{
    setUserSelected(user)
  }


  
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
  
  return (
    <div className="App">
      {/*<button onClick={()=>usuarioEliminado()}>Eliminar usuario</button>*/}
      <UsersForm getusers = {getusers} userSelected ={userSelected} isVisible={isVisible} setIsVisible={setIsVisible} selectUser= {selectUser}/>
      <UserList userList= {userList} getusers= {getusers} selectUser= {selectUser}   setIsVisible={setIsVisible} />
      {/* <UsersForm/> */}
      
    </div>
  )
}

export default App
