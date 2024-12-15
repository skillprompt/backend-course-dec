const todos = [
  {
    id: 1,
    name: "hello",
  },
  {
    id: 2,
    name: "Testing..",
  },
  {
    id: 3,
    name: "Learning nodejs",
  },
];

const updatedTodos = todos.map((todo) => {
  if (todo.id === 2) {
    return {
      id: todo.id,
      name: "Name changed",
    };
  }

  return todo;
});
console.log("updated", updatedTodos);

const todosAfterDeletion = todos.filter((todo) => {
  if (todo.id === 2) {
    return false;
  }

  return true;
});
console.log("todos after deletion", todosAfterDeletion);
