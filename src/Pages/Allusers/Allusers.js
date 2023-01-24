import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Allusers = () => {
    const [users, getUsers] = useState([]);
    const [block, setBlock] = useState(false);

    const url = 'https://fullstack-crud-server.vercel.app/users';

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
        fetch(`https://fullstack-crud-server.vercel.app/users/${user._id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(() => {
                const remainingUsers = users.filter(usr => usr._id !== user._id);
                getUsers(remainingUsers);
                console.log(`${user.first} ${user.last} is deleted successfully!!!`);
            });
    };

    const handleBlock = () => {
        setBlock(!block);
    }
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
                                    <button className="details-btn textbtn">
                                        Details
                                    </button>
                                </Link>

                                <button onClick={() => handleBlock(user)} className="btn-sm ">
                                    {block ? 'Unblock' : 'Block'}
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





