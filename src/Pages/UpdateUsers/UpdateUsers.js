import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom';

const UpdateUsers = () => {
    const storeduser = useLoaderData();
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const onUpdateHandler = user => {
        fetch(`http://localhost:8000/users/${storeduser._id}`, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(user)
        }).then(() => {
            toast(`${user.first} ${user.last}'s information updated successfully!!!`);
            navigate("/allusers");
        }).catch(err => console.log(err));
    };
    return (
        <div>
            <form onSubmit={handleSubmit(onUpdateHandler)}>
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
                                                        <h4 className="mb-4 pb-3">Update user here!!</h4>

                                                        <div className="form-group mt-2">
                                                            <input
                                                                defaultValue={storeduser.first}
                                                                {...register("first")} className='form-style'
                                                            />
                                                            <br />


                                                        </div>
                                                        <div className="form-group mt-2">
                                                            <input

                                                                defaultValue={storeduser.last}
                                                                {...register("last")}
                                                                className='form-style'


                                                            /><br />


                                                        </div>
                                                        <div className="form-group mt-2">
                                                            <input
                                                                defaultValue={storeduser.email}
                                                                {...register("email")}
                                                                className='form-style'

                                                                disabled
                                                            /><br />


                                                        </div>
                                                        <div className="form-group ">
                                                            <input
                                                                defaultValue={storeduser.ph}
                                                                {...register("ph")}
                                                                className='form-style'
                                                            /><br />


                                                        </div>

                                                        <button type='submit' className='btn '>update User</button>



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