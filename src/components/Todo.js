import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-regular-svg-icons'
import { faCheckCircle, faTimes } from '@fortawesome/free-solid-svg-icons'

const Todo = ({ todo, completed, index, toggleCompleted, deleteTodo }) => {
    return (
        <div className='todo'>
            <FontAwesomeIcon 
                className={`icons ${completed ? 'check' : 'circle'}`} 
                icon={completed ? faCheckCircle : faCircle}
                onClick={() => toggleCompleted(index)}
            />
            <p className={`${completed ? 'done' : ''}`}>{todo}</p>
            <FontAwesomeIcon 
                className='icons delete' 
                icon={faTimes}
                onClick={() => deleteTodo(index)}
            />
        </div>
    )
}

export default Todo