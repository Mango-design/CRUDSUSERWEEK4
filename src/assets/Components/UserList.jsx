import React from 'react';

const UserList = ({ userList }) => {
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
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default UserList;