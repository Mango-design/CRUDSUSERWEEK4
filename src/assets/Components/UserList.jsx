import React, { useState } from 'react';

const UserList = ({ userList, selectUser, setIsVisible }) => {
    const  [page , setPage ]= useState(1)
    const [userForPage, setUserForPage] = useState(9)  
    const lastIndex = userForPage * page
    const firstIndex = lastIndex - userForPage
    const userPagined = userList.slice(firstIndex,lastIndex)
    const totalPage = Math.ceil(userList/userForPage)
    const pageNumbers = []
    for (let i = 0; i<=totalPage;i++){
        pageNumbers.push(i)
    }

    const visible = () =>{
        setIsVisible(true)
    }
    const double = ()=>{
        visible()
        selectUser()
    }
    return (

        <div className='userList'>
            <div className='userList_container_title'>
                <h1>UserList</h1>
                <button onClick={()=>{setIsVisible(true)}} className='create'><i className="fa-solid fa-plus"></i> Crear Nuevo Usuario</button>
            </div>

            <ul>
                {
                    userPagined.map(user => (
                        <li key={user.id}>

                            <ul>
                                <li className='name'> <b> {user.first_name} {user.last_name} </b>  </li>
                                <hr />
                                <li> <p className='title'>Correo </p> {user.email} </li>

                                <li> <p className='title'> Cumpleaños</p>
                                    <div>
                                        <i className="fa-solid fa-gift"></i>  {user.birthday} </div></li>
                                <hr />
                                <div className='Container_buttons'>
                                    <button onClick={()=>{double()}} ><i className="fa-sharp fa-solid fa-pencil"></i></button>
                                    <button className='trash' ><i className="fa-solid fa-trash-can"></i></button>
                                </div>



                            </ul>

                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default UserList;