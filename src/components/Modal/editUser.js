import {useEffect, useState} from "react";
import {LockClosedIcon} from "@heroicons/react/solid";

export default function EditUser(props){
    const [edit, setEdit] = useState(false);
    const [isOpen, setOpen] = useState(true)
    const [editingUser, setEditingUsers] = useState({
        name: '',
        email: '',
        phone: ''
    })
    useEffect(() => {
        console.log(editingUser)
    }, [editingUser])

    function editUser(person) {
        setEditingUsers({
            name: person.name,
            email: person.email,
            phone: person.phone
        })
        console.log('editing mode is on now')
    }
    let users = props.users
    function saveChanges() {
        let editingPerson = users.find(() => users.id === editingUser.id)
        console.log(editingPerson)
        setOpen(false)
    }
    function handleChange(e) {
        e.preventDefault()
        setEditingUsers(e.target.value)
    }
    return (
        <>
            <a href="#" onClick={() => (
                setEdit(true),
                editUser(props.person)
            )}
               className="text-indigo-600 text-center hover:text-indigo-900">
                Edit
            </a>
            {edit && isOpen && (
                <div className='flex justify-center pt-[5rem] top-0 right-0 left-0 bottom-0 fixed bg-slate-200 '>
                <form onSubmit={editUser} className="p-[2rem] w-[400px] h-[200px] rounded-md text-[26px] mt-8 space-y-6" action="#" method="POST">
                <h1 className='text-center'>Edit</h1>
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
                    <div className='mb-[20px]'>
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
                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        />
                    </div>
                </div>
                <div>
                    <button onClick={saveChanges}
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
            )}
        < />
    ) }


