import React, { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const useInputValue = initialValue => {
    const [value, setValue] = useState(initialValue)

    return {
        value,
        onChange: e => setValue(e.target.value),
        resetValue: () => setValue('')
    }
}

const Form = ({ addTodo, formInput }) => {
    const { resetValue, ...text } = useInputValue('')

    const handleSubmit = e => {
        e.preventDefault()
        addTodo(text.value)
        resetValue()
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <button className="button" type="submit">
                <FontAwesomeIcon className="plus" icon={faPlus}/>
            </button>
            <input {...text} ref={formInput} placeholder='New task...' required/>
        </form>
    )
}

export default Form