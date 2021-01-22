import React from 'react'

const ExtraButtons = ({ deleteCompleted, deleteAll }) => {
       
    return (
        <div className="buttons-wrapper">
            <button onClick={deleteCompleted} className="buttons">Clear completed tasks</button>
            <button onClick={deleteAll} className="buttons">Delete all tasks</button>
        </div>  
    )
}

export default ExtraButtons