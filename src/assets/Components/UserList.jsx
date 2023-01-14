import React from 'react';

const UserList = ({ userList, selectUser }) => {
    return (

        <div className='userList'>
            <div className='userList_container_title'>
                <h1>UserList</h1>
                <button className='create'><i className="fa-solid fa-plus"></i> Crear Nuevo Usuario</button>
            </div>

            <ul>
                {
                    userList.map(user => (
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
                                    <button onClick={() => selectUser(user)}><i className="fa-sharp fa-solid fa-pencil"></i></button>
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