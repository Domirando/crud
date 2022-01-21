import React, {useState} from 'react';
import PropTypes from 'prop-types';

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

function AddUsers({ styles, onCreate, state }) {
    const inputPhone = useInputTitle('')
    const inputEmail = useInputEmail('')
    const inputName = useInputName('')
    function submitHandler(event) {
        event.preventDefault()
        if(inputName.value().trim()){

            onCreate(inputName.value(), inputPhone.value(), inputEmail.value(),)
            inputName.clear()
            inputPhone.clear()
            inputEmail.clear()
        }
        state(true)


    }
    return (
        <div className={styles}>
            <form  className='bg-[#ffff] flex gap-y-[20px] rounded-lg  justify-self-center self-center justify-center h-[400px] items-center w-[60%] bg-white self-center py-[30px] px-[150px] flex-col' onSubmit={submitHandler}>
                <h1 className='mb-[10px]'>Add new user: </h1>
                <input {...inputName.bind} type="text" placeholder="Full name... " id="addUserName" className='w-full rounded p-[5px]' />
                <input {...inputEmail.bind} type="email" placeholder="Email... " id="addUserEmail" className='w-full rounded p-[5px]'/>
                <input {...inputPhone.bind} type="text" placeholder="Phone... " id="addUserTitle" className='w-full rounded p-[5px]'/><br />
                <button className='bg-cyan-800 w-[100px] pt-[5px] text-white' type="submit">Add</button>
            </form>
        </div>
    )
}

AddUsers.propTypes = {
    onCreate: PropTypes.func.isRequired
}

export default AddUsers;