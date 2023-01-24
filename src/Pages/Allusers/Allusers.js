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

    const handleDelete = user => {
        fetch(`http://localhost:8000/users/${user._id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(() => {
                const remainingUsers = users.filter(usr => usr._id !== user._id);
                getUsers(remainingUsers);
                console.log(`${user.first} ${user.last} is deleted successfully!!!`);
            });
    };
    return (

        <div className="">
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
                                <Link to={`/updateuser/${user._id}`}>
                                    <button className="btn-sm decoration">
                                        Details
                                    </button>
                                </Link>

                                <button className="btn-sm ">
                                    Block
                                </button>


                                <button onClick={() => handleDelete(user)} className="btn-sm ">
                                    Delete
                                </button>


                            </td>
                        </tr>)
                    }



                </tbody>
            </table>

        </div>
    );
};

export default Allusers;





