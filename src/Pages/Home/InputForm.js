import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const InputForm = () => {
    const { register, handleSubmit, reset, rest, formState: { errors } } = useForm();
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();


    const onSubmitHandler = user => {
        fetch('http://localhost:8000/users', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(user)
        }).then(() => {
            console.log(`${user.first}  is inserted successfully!!!`);
            toast(`${user.first} your user is created!!!`);
            reset('first');
            reset('last');
            reset('email');
            reset('ph');
            setErrorMessage('');
            navigate('/allusers')
        }).catch(error => {
            console.error(error.message);
            toast('Insert Data failed!!!');
            setMessage('');
        });
    };

    const onFocusHandler = () => {
        setMessage('');
        setErrorMessage('');
    };
    return (
        <div className=''>
            <form onSubmit={handleSubmit(onSubmitHandler)}>
                <div className="section">
                    <div className="container">
                        <div className="row full-height justify-content-center">
                            <div className="col-12 text-center align-self-center py-5">
                                <div className="section pb-5 pt-5 pt-sm-2 text-center">
                                    <input className="checkbox" type="checkbox" id="reg-log" name="reg-log" />
                                    <div className="card-3d-wrap mx-auto">
                                        <div className="card-3d-wrapper">
                                            <div className="card-front">
                                                <div className="center-wrap">
                                                    <div className="section text-center">
                                                        <h4 className="mb-4 pb-3">Create a user here!!</h4>

                                                        <div className="form-group mt-2">
                                                            <input
                                                                type="text"
                                                                onFocus={onFocusHandler} {...register("first", {
                                                                    required: "First Name is Required"
                                                                })} className='form-style'
                                                                placeholder="Enter your first name"
                                                                autoComplete="off"



                                                                required />
                                                            <br />
                                                            {errors.first && <p className='error-color '>{errors.first.message}</p>}

                                                        </div>
                                                        <div className="form-group mt-2">
                                                            <input
                                                                type="text"
                                                                onFocus={onFocusHandler} {...register("last", {
                                                                    required: "Last Name is Required"
                                                                })}
                                                                className='form-style'

                                                                placeholder="Enter your last name"
                                                                id="logmail"
                                                                autoComplete="off"

                                                                required /><br />
                                                            {errors.last && <p className='error-color '>{errors.last.message}</p>}

                                                        </div>
                                                        <div className="form-group mt-2">
                                                            <input
                                                                type="email"
                                                                onFocus={onFocusHandler} {...register("email", {
                                                                    required: "Email is Required"
                                                                })}
                                                                className='form-style'

                                                                placeholder="Enter Your Email"
                                                                id="logmail"
                                                                autoComplete="off"

                                                                required /><br />
                                                            {errors.email && <p className='error-color '>{errors.email.message}</p>}

                                                        </div>
                                                        <div className="form-group ">
                                                            <input
                                                                type="number"
                                                                onFocus={onFocusHandler} {...register("ph", {
                                                                    required: "Phone Number is Required"
                                                                })} className='form-style'
                                                                placeholder="Enter your phone number"
                                                                autoComplete="off"




                                                                required /><br />
                                                            {errors.ph && <p className='error-color '>{errors.ph.message}</p>}

                                                        </div>

                                                        <button className='btn '>Add User</button>



                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            <p style={{ color: "pink" }}>{message}</p>
            <p style={{ color: "orange" }}>{errorMessage}</p>
        </div>
    );
};

export default InputForm;