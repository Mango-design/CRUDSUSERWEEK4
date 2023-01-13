import React from 'react';

const UsersForm = () => {
    
    return (
        <form>
            <div className="input-container">
                <label htmlFor="email">Email</label>
                <input type="text" id='email' />
            </div>
            <div className="input-container">
                <label htmlFor="password">Password</label>
                <input type="text" id='password' />
            </div>
            <div className="input-container">
                <label htmlFor="first_name">First-Name</label>
                <input type="text" id='first-name' />
            </div>
            <div className="input-container">
                <label htmlFor="last_name">last-name</label>
                <input type="text" id='last_name' />
            </div>
            <div className="input-container">
                <label htmlFor="birthday">Birthday</label>
                <input type="date" id='birthday' />
            </div>
        </form>
    );
};

export default UsersForm;