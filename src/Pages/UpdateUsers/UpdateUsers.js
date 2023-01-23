import React from 'react';
import { useForm } from 'react-hook-form';
import { useLoaderData, useNavigate } from 'react-router-dom';

const UpdateUsers = () => {
    const user = useLoaderData();
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    return (
        <div>
            <form >
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
                                                                defaultValue={user.first}
                                                                {...register("first", {
                                                                    required: "First Name is Required"
                                                                })} className='form-style'
                                                                placeholder="Enter your first name"
                                                                autoComplete="off"



                                                                required />
                                                            <br />


                                                        </div>
                                                        <div className="form-group mt-2">
                                                            <input

                                                                defaultValue={user.last}
                                                                {...register("last", {
                                                                    required: "Last Name is Required"
                                                                })}
                                                                className='form-style'

                                                                placeholder="Enter your last name"
                                                                id="logmail"
                                                                autoComplete="off"

                                                                required /><br />


                                                        </div>
                                                        <div className="form-group mt-2">
                                                            <input
                                                                defaultValue={user.email}
                                                                {...register("email", {
                                                                    required: "Email is Required"
                                                                })}
                                                                className='form-style'

                                                                placeholder="Enter Your Email"
                                                                id="logmail"
                                                                autoComplete="off"
                                                                disabled
                                                                required /><br />


                                                        </div>
                                                        <div className="form-group ">
                                                            <input
                                                                defaultValue={user.ph}
                                                                {...register("ph", {
                                                                    required: "Phone Number is Required"
                                                                })} className='form-style'
                                                                placeholder="Enter your phone number"
                                                                autoComplete="off"




                                                                required /><br />


                                                        </div>

                                                        <button className='btn '>update User</button>



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
        </div>
    );
};

export default UpdateUsers;