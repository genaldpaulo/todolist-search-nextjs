import Link from "next/link"

const fetchTodos = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/")
    const todos = await res.json()
    // console.log(todos)
    return todos
}

export default async function TodosList() {
    const todos = await fetchTodos()
    return (
        <>
            {todos.map((todo) =>
                <p key={todo.id}>
                    <Link href={`/todos/${todo.id}`}> Todo: {todo.id}</Link>
                </p>
            )}
        </>
    )
}
