import "../styles/App.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import AddUsers from "./users";
import EditUser from "./Modal/editUser";
function App() {
  const [users, setUsers] = useState([]);
  const [fetchUsers, setFetchUsers] = useState(true);
  const [adding, setAdding] = useState(false);
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
    <div className="flex flex-col">
      <h1 className="text-[40px] self-center">Users</h1>
      <div className="overflow-x-auto">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
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
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
