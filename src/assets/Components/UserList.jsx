import React from 'react';

const UserList = ({ userList, selectUser }) => {
    return (

        <div className='userList'>
            <h1>UserList</h1>

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


                            </ul>
                            <button onClick={() =>selectUser(user)}>select</button>
                            <button>BORRRRRRRRAR ALVVVVVVVVVVVVVVVVVVV</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default UserList;