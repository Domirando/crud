import React, {useState} from 'react';
import PropTypes from 'prop-types';

const styles = {
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

function useInputValue(defaultValue = '') {
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

function AddUser({ onCreate }) {
    const input = useInputValue('')

    function submitHandler(event) {
        event.preventDefault()

        if(input.value().trim()){
            onCreate(input.value())
            input.clear()

            // setValue('')
        }
    }
    return (
        <form onSubmit={submitHandler}>
            <input {...input.bind} type="text" placeholder="New user... " style={styles.input} id="addUser" />
            <button style={styles.btn} type="submit">Add</button>
        </form>
    )
}

AddUser.propTypes = {
    onCreate: PropTypes.func.isRequired
}

export default AddUser;