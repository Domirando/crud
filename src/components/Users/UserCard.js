import EditUser from "../Modal/EditUser";

export default function UserCard({ person, setUsers, users }) {
    console.log(person.id)
    const deleteUser = (id) => {
        setUsers(users.filter((user) => user.id !== id));
    };
    const saveEditedUser = (user) => {
        let editedUsersList = [...users];
        console.log(user.id)
        let index = editedUsersList.findIndex((person) => user.id === person.id);
        editedUsersList.splice(index, 1, user)
        setUsers(editedUsersList);
    };
    return (
            <tr key={person.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                        <div>
                            <div
                                className="text-sm font-medium text-gray-900"
                                id={person.id + "_name"}
                            >
                                {person.name}
                            </div>
                            <div
                                className="text-sm text-gray-500"
                                id={person.id + "_email"}
                            >
                                {person.email}
                            </div>
                        </div>
                    </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                    <div
                        className="text-sm text-gray-900"
                        id={person.id + "_phone"}
                    >
                        {person.phone}
                    </div>
                </td>
                <td className="px-6 py-4 flex gap-x-[10px] whitespace-nowrap text-right text-sm font-medium">
                    <EditUser
                        person={person}
                        users={users}
                        callback={saveEditedUser}
                    />
                    <button
                        href="#"
                        onClick={() => deleteUser(person.id)}
                        className="text-indigo-600 hover:text-indigo-900"
                    >
                        Delete
                    </button>
                </td>
            </tr>

    )
}