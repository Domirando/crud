import '../styles/App.css';
import axios from "axios";
import React, { useState, useEffect } from "react";
import AddUsers from "./users";
// import Modal from './Modal/Modal'
function App() {
  const [users, setUsers] = useState([]);
  const [fetchUsers, setFetchUsers] = useState(true);

  function addUsers(name, title, email) {
    return (setUsers(users.concat([{
          name,
          email,
          title,
          id: Date.now(),
          completed: false
        }
        ]))
    )
  }
  useEffect(() => {   
    if (!fetchUsers) return;

    axios.get('https://jsonplaceholder.typicode.com/users')
        .then(function (response) {
          setUsers(response.data)
        })

    setFetchUsers(false)
  }, [fetchUsers])


  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id))
  }

  return (
    <div className="flex flex-col">
      <h1 className="text-[40px] self-center">Users</h1>
      <AddUsers onCreate={addUsers}/>
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
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
                    Title
                  </th>
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {users.map((person) => (
                  <tr key={person.email}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div>
                          <div className="text-sm font-medium text-gray-900">{person.name}</div>
                          <div className="text-sm text-gray-500">{person.email}</div>
                        </div>
                      </div>
                    </td>
			        <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{person.title}</div>
                    </td>
                    <td className="px-6 py-4 flex gap-x-[10px] whitespace-nowrap text-right text-sm font-medium">
                      <a href="#" className="text-indigo-600 hover:text-indigo-900">
                        Edit
                      </a>
                      <button href="#" onClick={()=>deleteUser(person.id)} className="text-indigo-600 hover:text-indigo-900">
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
      {/*<Modal />*/}
    </div>
  )
}

export default App;
