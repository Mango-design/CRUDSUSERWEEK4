import React from 'react';

const UserList = ({userList}) => {
    return (
        <div className='userList'>
            <h1>UserList</h1>
            <ul>
                {
                    userList.map(user =>(
                        <li>
                            <h4> {user.email} {user.password} {user.first_name} {user.last_name} {user.birthday} </h4>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default UserList;