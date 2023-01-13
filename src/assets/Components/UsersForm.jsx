import React from 'react';
import { useForm } from 'react-hook-form';

const UsersForm = () => {

    const {handleSubmit, register} = useForm()

    const submit =(data) =>{
        console.log(data);
    }
    return (
        <form onSubmit={handleSubmit(submit)}>
            <div className="input-container">
                <label htmlFor="email">Email</label>
                <input type="text" id='email' {...register("email")}/>
            </div>
            <div className="input-container">
                <label htmlFor="password">Password</label>
                <input type="text" id='password' {...register("password")} />
            </div>
            <div className="input-container">
                <label htmlFor="first_name">First-Name</label>
                <input type="text" id='first-name' {...register("first_name")} />
            </div>
            <div className="input-container">
                <label htmlFor="last_name">last-name</label>
                <input type="text" id='last_name' {...register("last_name")} />
            </div>
            <div className="input-container">
                <label htmlFor="birthday">Birthday</label>
                <input type="date" id='birthday' {...register("birthday")} />   
            </div>
            <button>submit</button>
        </form>
    );
};

export default UsersForm;