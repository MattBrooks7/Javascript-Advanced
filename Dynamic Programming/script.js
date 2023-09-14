// const parents = ['Lories', 'Steve'];
// const kids = ['Jake', 'Annie', 'Jess'];

// const fullFamily [...parents, ...kids];
// ['Lorie', 'Steve', 'Jake', 'Annie', 'Jess']

const todos = [
    {user: 'Brick', completed: false, task: "Upload Video"},
    {user: 'Lilith', completed: true, tast: "Rob Bank"}
]

function addTodo(newTodo) {
    return [...todos, {...newTodo, completed: false}]
}

const newTodos = addTodo({user: 'Mordecai', task: 'Feed Bloodwing'});