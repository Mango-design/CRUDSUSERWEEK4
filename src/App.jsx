import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import UsersForm from './assets/Components/UsersForm';

function App() {

  const [ userList, setUserList] = useState([]);

  useEffect(() =>{
    axios.get('https://users-crud.academlo.tech/users/')
    .then(res => setUserList (res.data));
  }, [])

  console.log(userList);
  return (
    <div className="App">
      PAPALOS
      <UsersForm/>
    </div>
  )
}

export default App
