import React from 'react'

import Todo from './Todo'
import { v4 as uuidv4 } from 'uuid'

const List = ({ todos, toggleCompleted, deleteTodo }) => {
    return (
        <div className='list'>
            {todos.map(({ todo, completed }, index) => 
                <Todo 
                    key={uuidv4()} 
                    todo={todo} 
                    completed={completed} 
                    index={index}
                    toggleCompleted={toggleCompleted} 
                    deleteTodo={deleteTodo}
                />
            )}
        </div>
    )
}

export default List