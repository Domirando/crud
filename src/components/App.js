import '../styles/App.css';
import axios from "axios";
import React, { useState, useEffect } from "react";
import AddUsers from "./users";
import { LockClosedIcon } from '@heroicons/react/solid'
// import Modal from './Modal/Modal'
function App() {
  const [users, setUsers] = useState([]);
  const [edit, setEdit] = useState(false);
  const [fetchUsers, setFetchUsers] = useState(true);
  const [editingUser, setEditingUsers] = useState({
      name: '',
      email: '',
      phone: ''
  })

    useEffect(() => {
        console.log(editingUser)
    }, [editingUser])


  function addUsers(name, phone, email) {
    return (setUsers(users.concat([{
          name,
          email,
          phone,
          id: Date.now(),
          completed: false
        }
        ]))
    )
  }
  function handleChange(e) {
      e.preventDefault()
        setEditingUsers(e.target.value)
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

  function editUser(person) {
    setEditingUsers({
        name: person.name,
        email: person.email,
        phone: person.phone
    })
  }

  return (
    <div className="flex flex-col">
      <h1 className="text-[40px] self-center">Users</h1>
        <div className="functionalities">
          <AddUsers onCreate={addUsers}/>
            <form onSubmit={editUser} className="text-[26px] mt-8 space-y-6" action="#" method="POST">
                <h1>Edit</h1>
                <input type="hidden" name="remember"  defaultValue="true" />
                <div className="rounded-md shadow-sm -space-y-px">
                    <div className='mb-[20px]'>
                        <label htmlFor="name" className="sr-only">
                            Name
                        </label>
                        <input
                            onChange={handleChange}
                            value={editingUser.name}
                            id="nameUserEdit"
                            name="name"
                            type="text"
                            autoComplete="name"
                            required
                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="sr-only">
                            Email
                        </label>
                        <input
                            onChange={handleChange}
                            value={editingUser.email}
                            id="userEmailEdit"
                            name="email"
                            type="email"
                            autoComplete="current-email"
                            required
                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        />
                    </div>
                    <div>
                        <label htmlFor="phone" className="sr-only">
                            Phone
                        </label>
                        <input
                            onChange={handleChange}
                            value={editingUser.phone}
                               id="userEmailEdit"
                               name="email"
                               autoComplete="current-email"
                               required
                               className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        />
                    </div>
                </div>
                <div>
                    <button
                        type="submit"
                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-white group-hover:text-indigo-100" aria-hidden="true" />
                </span>
                        Save
                    </button>
                </div>
            </form>
        </div>
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
                    Phone
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
                      <div className="text-sm text-gray-900">{person.phone}</div>
                    </td>
                    <td className="px-6 py-4 flex gap-x-[10px] whitespace-nowrap text-right text-sm font-medium">
                      <a href="#" onClick={() => editUser(person)} className="text-indigo-600 hover:text-indigo-900">
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
