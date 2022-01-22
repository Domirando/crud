import {useEffect, useState} from "react";
import axios from "axios";
import AddUsers from "../Modal/AddingUser";
import UserCard from './UserCard'

export default function List(){
    const [users, setUsers] = useState([]);
    const [adding, setAdding] = useState(false);
    const [fetchUsers, setFetchUsers] = useState(true);
    function addUsers(name, phone, email) {
        return setUsers(
            users.concat([
                {
                    name,
                    email,
                    phone,
                    id: Date.now(),
                    completed: false,
                },
            ])
        );
    }
    useEffect(() => {
        if (!fetchUsers) return;
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then(function (response) {
                setUsers(response.data);
            });

        setFetchUsers(false);
    }, [fetchUsers]);




    return (
        <>
        <div className="justify-center functionalities mb-[15px] flex flex-col">
            <button
                className="capitalize self-end border border-blue-600 py-1 px-2 rounded-md m-2"
                onClick={() => setAdding(!adding)}
            >
                add new user
            </button>
            {adding && (
                <div className="border">
                    <AddUsers
                        onCreate={addUsers}
                        styles="fixed top-0 bottom-0 bg-cray-200 flex justify-center right-0 left-0 pt-[2rem]"
                    />
                </div>
            )}
        </div>
        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                <tr>
                    <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                        Name
                    </th>
                    <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                        Phone
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                        <span className="sr-only">Edit</span>
                    </th>
                </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                {users.map((person) => (
                    <UserCard setUsers={setUsers} users={users} person={person}/>
                ))}
                </tbody>
            </table>
        </div>
        </>
    )
}
