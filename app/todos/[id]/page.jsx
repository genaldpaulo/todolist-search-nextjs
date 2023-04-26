import React from 'react'

const fetchTodo = async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    const todo = await res.json()
    return todo
}


export default async function TodoPage({ params: { id } }) {
    const todo = await fetchTodo(id)
    return (
        // <div>TodoPage: {id}</div>
        <div>
            <p>
                #{todo.id} : {todo.title}
            </p>
            <p> Completed: {todo.completed ? "Yes" : "No"}</p>
            <p className=' border-t border-black mt-5 text-right'> By User: {todo.userId}</p>
        </div>
    )
}
