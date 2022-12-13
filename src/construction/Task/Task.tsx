import React from 'react'

interface ITask {
    title: string;
}

const Task = (props: ITask) => {
    return (
        <div>
            {props.title}
        </div>
    )
}

export default Task