const baseurl = "http://localhost:8000/todos";

export const loadTodos = () => {
    return fetch(baseurl).then((res) => res.json());
}

export const createTodo = (todo) => {
    console.log(todo);
    return fetch(baseurl, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(todo)
    }).then((res) => res.json());
}

export const updateTodo = (todo) => {
    return fetch(`${baseurl}/${todo.id}`, {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(todo)
    }).then((res) => res.json());
}

export const deleteTodo = (todo) => {
    return fetch(`${baseurl}/${todo.id}`, {
        method: "DELETE",
    }).then((res) => res.json());
}