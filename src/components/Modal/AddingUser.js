import React, {useState} from 'react';
import PropTypes from 'prop-types';

function AddUsers({ styles, onCreate }) {
    const inputPhone = useInputTitle('')
    const inputEmail = useInputEmail('')
    const inputName = useInputName('')
    const [isOpen, setOpen] = useState(true)
    function useInputName(defaultValue = '') {
        const [value, setValue] = useState(defaultValue);

        return {
            bind: {
                value,
                onChange: event => setValue(event.target.value)
            },
            clear: () => setValue(''),
            value: () => value
        }

    }
    function useInputEmail(defaultValue = '') {
        const [value, setValue] = useState(defaultValue);

        return {
            bind: {
                value,
                onChange: event => setValue(event.target.value)
            },
            clear: () => setValue(''),
            value: () => value
        }
    }
    function useInputTitle(defaultValue = '') {
        const [value, setValue] = useState(defaultValue);

        return {
            bind: {
                value,
                onChange: event => setValue(event.target.value)
            },
            clear: () => setValue(''),
            value: () => value
        }

    }

    function submitHandler(event) {
        event.preventDefault()
        if(inputName.value().trim()){
            onCreate(inputName.value(), inputPhone.value(), inputEmail.value(),)
            inputName.clear()
            inputPhone.clear()
            inputEmail.clear()
        }
        setOpen(false)
    }
    return (
        <>
            {isOpen && (
                <div className={styles}>
                    <form  className='flex gap-y-[20px] rounded-lg  justify-self-center self-center justify-center border-2 bg-white h-[400px] items-center w-[60%] self-center py-[30px] px-[150px] flex-col' onSubmit={submitHandler}>
                        <h1 className='mb-[10px] text-2xl'>Add new user: </h1>
                        <input {...inputName.bind} type="text" placeholder="Full name... " id="addUserName" className='w-full border rounded p-[5px]' />
                        <input {...inputEmail.bind} type="email" placeholder="Email... " id="addUserEmail" className='w-full border rounded p-[5px]'/>
                        <input {...inputPhone.bind} type="text" placeholder="Phone... " id="addUserTitle" className='w-full border rounded p-[5px]'/><br />
                        <button className='flex justify-center items-center rounded bg-cyan-800 w-[100px] pt-[5px] text-white' type="submit" >Add</button>
                    </form>
                </div>
            )
            }
        </>
    )
}

AddUsers.propTypes = {
    onCreate: PropTypes.func.isRequired
}

export default AddUsers;