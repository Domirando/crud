import React, {useState} from 'react';
import PropTypes from 'prop-types';

const styles = {
    form: {
        textAlign: 'center'
    },
    input: {
        height: '1.5rem',
        borderRadius: '4px',
        margin: '1rem 1rem 1.8rem 0px',
        padding: '0.5rem 1rem',
        border: '1px solid #ccc',
        fontSize: '16px',
        width: '65%'
    },
    btn: {
        height: '2.5rem',
        borderRadius: '4px',
        marginRight: '5px',
        border: 'none',
        color: '#fff',
        backgroundColor: 'red',
        fontSize: '16px',
        width: '5rem',
        cursor: 'pointer'
    }
}

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

function AddUsers({ onCreate }) {
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
    }
    return (
        <form style={styles.form} onSubmit={submitHandler}>
            <input {...inputName.bind} type="text" placeholder="Full name... " style={styles.input} id="addUserName" />
            <input {...inputEmail.bind} type="email" placeholder="Email... " style={styles.input} id="addUserEmail" />
            <input {...inputPhone.bind} type="number" placeholder="Phone... " style={styles.input} id="addUserTitle" /><br />
            <button style={styles.btn} type="submit">Add</button>
        </form>
    )
}

AddUsers.propTypes = {
    onCreate: PropTypes.func.isRequired
}

export default AddUsers;