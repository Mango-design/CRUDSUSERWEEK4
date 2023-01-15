import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

const UsersForm = ({ getusers, userSelected, selectUser }) => {

    const { handleSubmit, register, reset } = useForm()
    const [isVisible, setIsVisible] = useState(true)
    const emptyForm = {email: "", password: "", first_name: "", last_name: "", birthday: ""}

    useEffect(() => {
        if (userSelected !== null) {
            alert("usuario seleccionado")
            reset(userSelected)
        }else{
            reset()
        }
    }, [userSelected])

    const submit = (data) => {
        if (userSelected) {
            axios.put(`https://users-crud.academlo.tech/users/${userSelected.id}/`, data)
                .then(() =>{
                    getusers()
                    selectUser(null)
                } );
        } else {
            axios.post('https://users-crud.academlo.tech/users/', data)
                .then(() => getusers());
        }
    }
    return (
        <form onSubmit={handleSubmit(submit)} className={isVisible ? 'a' :'hiden'} >
            <div className='form'>
                <button className='close' onClick={()=>{setIsVisible(false)}} >
                    <i className="fa-solid fa-x"></i>
                </button>

                <h1>Nuevo Usuario</h1>
                <div className="input-container">
                    <label htmlFor="email">Email</label>
                    <input type="text" id='email' {...register("email")} placeholder='Email' required />
                </div>
                <div className="input-container">
                    <label htmlFor="password">Password</label>
                    <input type="password" id='password' {...register("password")} placeholder='Password' required />
                </div>
                <div className="input-container">
                    <label htmlFor="first_name">First-Name</label>
                    <input type="text" id='first_name' {...register("first_name")} placeholder='First-Name' required />
                </div>
                <div className="input-container">
                    <label htmlFor="last_name">last-name</label>
                    <input type="text" id='last_name' {...register("last_name")} placeholder='Last-Name' required />
                </div>
                <div className="input-container">
                    <label htmlFor="birthday">Birthday</label>
                    <input type="date" id='birthday' {...register("birthday")} placeholder='Birthday' required />
                </div>
                <button className='submit'>submit</button>


            </div>

        </form>
    );
};

export default UsersForm;