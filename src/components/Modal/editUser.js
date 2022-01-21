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

        }, [editingUser])

    function editUser(person) {
        setEditingUsers({
            name: person.name,
            email: person.email,
            phone: person.phone
        })
    }
    let users = props.users
    function saveChanges() {
        let editingPerson = users.find(() => users.id === editingUser.id)
        setOpen(false)
        editingPerson.name = editingUser.name;
        editingPerson.email = editingUser.email;
        editingPerson.phone = editingUser.phone
    }
    function handleChangeEmail(e) {
        e.preventDefault()
        setEditingUsers({
            email: e.target.value
        })
    }
    function handleChangePhone(e) {
        e.preventDefault()
        setEditingUsers({
            phone: e.target.value
        })
    }
    function handleChangeName(e) {
        e.preventDefault()
        setEditingUsers({
            name: e.target.value
        })
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
                <div className='fixed top-0 bottom-0 bg-cray-200 flex justify-center right-0 left-0 pt-[2rem]'>
                    <form  className='flex gap-y-[20px] rounded-lg justify-self-center self-center justify-center border-2 bg-white h-[400px] items-center w-[50%] self-center flex-col' onSubmit={editUser}>
                        <h1 className='text-center text-2xl'>Edit</h1>
                        <div className="rounded-md flex flex-col gap-y-[12px] shadow-sm -space-y-px">
                            <div className=''>
                                <label htmlFor="name" className="sr-only">
                                    Name
                                </label>
                                <input
                                    onChange={handleChangeName}
                                    value={editingUser.name}
                                    id="nameUserEdit"
                                    name="name"
                                    type="text"
                                    autoComplete="name"
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                />
                            </div>
                            <div className=''>
                                <label htmlFor="email" className="sr-only">
                                    Email
                                </label>
                                <input
                                    onChange={handleChangeEmail}
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
                                    onChange={handleChangePhone}
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
                                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 px-[70px]"
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
