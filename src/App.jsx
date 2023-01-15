import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import UsersForm from './assets/Components/UsersForm';
import swal from 'sweetalert'
import UserList from './assets/Components/UserList';
function App() {

  const [ userList, setUserList] = useState([]);
  const [ userSelected, setUserSelected] = useState(null);
  const [isVisible, setIsVisible] = useState(true)
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


  console.log(userSelected);

  const userEliminated =() =>{
    swal({
      title: "Eliminar",
      text: "¿Estas seguro que quieres eliminarlo?",
      icon: "warning",
      buttons: ["No", "Si"]

    });
  }
 


 const change =() =>{
  swal({
    title: "Usuario Creado",
    text: "",
    icon: "success",
    button: "Aceptar"

  });
}

  console.log(userList);
  return (
    <div className="App">
      {/*<button onClick={()=>usuarioEliminado()}>Eliminar usuario</button>*/}
      <UsersForm getusers = {getusers} userSelected ={userSelected} isVisible={isVisible} setIsVisible={setIsVisible} change = {change} />
      <UserList userList= {userList} getusers= {getusers} selectUser= {selectUser}   setIsVisible={setIsVisible} userEliminated = {userEliminated} />
      {/* <UsersForm/> */}
      
    </div>
  )
}

export default App
