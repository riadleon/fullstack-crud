import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Allusers = () => {
    const [users, getUsers] = useState([]);

    const url = 'http://localhost:8000/users';

    useEffect(() => {
        getAllUsers();
    }, [])


    const getAllUsers = () => {
        axios.get(url)
            .then((response) => {
                const allUsers = response.data;
                console.log(allUsers);
                getUsers(allUsers);
            })
            .catch(error => console.error(`Error: ${error}`));
    }
    return (

        <div className="bg min-h-screen justify-center  items-center text-lg lg:pl-96 pt-10">
            <h1 className='text-3xl pl-12 pb-5'>All Users </h1>

            <table className="table ">

                <thead className=''>
                    <tr className=''>


                        <th className=''>Full Name</th>
                        <th className=''>Options</th>

                    </tr>
                </thead>
                <tbody className=''>

                    {
                        users.map((user) => <tr key={user._id}>

                            <td>{user.first} {user.last}</td>


                            <td>
                                <Link to={`/display/${user._id}`}>
                                    <button className="btn-sm ">
                                        Details
                                    </button>
                                </Link>
                                <Link to={`/display/${user._id}`}>
                                    <button className="btn-sm ">
                                        Block
                                    </button>
                                </Link>
                                <Link to={`/display/${user._id}`}>
                                    <button className="btn-sm ">
                                        Delete
                                    </button>
                                </Link>
                            </td>
                        </tr>)
                    }



                </tbody>
            </table>

        </div>
    );
};

export default Allusers;





