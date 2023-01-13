import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {

  const [ userList, setUserList] = useState([]);

  useEffect(() =>{
    axios.get('https://users-crud.academlo.tech/users/')
    .then(res => setUserList (res.data));
  }, [])

  console.log(userList);
  return (
    <div className="App">
      
    </div>
  )
}

export default App
