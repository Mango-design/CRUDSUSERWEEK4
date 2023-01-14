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
                                <h4>  {user.first_name} {user.last_name}  </h4>
                                <li> <b>Email :</b> {user.email} </li>
                                <li> <b>PassWord :</b> {user.password}</li>
                                <li><b>Birthday :</b> {user.birthday}</li>
                            </ul>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default UserList;