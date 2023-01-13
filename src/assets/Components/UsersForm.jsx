import React from 'react';

const UsersForm = () => {

    return (
        <form> 
            <div className='form'>
                <i class="fa-solid fa-x"></i>
                <h1>Nuevo Usuario</h1>
            <div className="input-container">
                <label htmlFor="email">Email</label>
                <input type="text" id='email' placeholder='Email'/>
            </div>
            <div className="input-container">
                <label htmlFor="password">Password</label>
                <input type="text" id='password' placeholder='Password' />
            </div>
            <div className="input-container">
                <label htmlFor="first_name">First-Name</label>
                <input type="text" id='first-name' placeholder='First-Name' />
            </div>
            <div className="input-container">
                <label htmlFor="last_name">Last-name</label>
                <input type="text" id='last_name' placeholder='Last-Name' />
            </div>
            <div className="input-container">
                <label htmlFor="birthday">Birthday</label>
                <input type="date" id='birthday' placeholder='Birthday' />
            </div>
            </div>
            
        </form>
    );
};

export default UsersForm;