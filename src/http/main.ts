import http from "http";

type TTodo = { id: number; name: string };
let todos: TTodo[] = [
  {
    id: 1,
    name: "learn css",
  },
];

const server = http.createServer(async (req, res) => {
  const url = req.url;
  console.log("url", url);

  // http method
  // REST API
  // GET: for fetching resources
  // POST: for creating resource on the server, 201
  // PUT: for updating resource on the server
  // PATCH: for updating specific attribute of the resource
  // DELETE: for removing resource from the server

  // HTTP Status Codes: 200 - 500
  // 2 start => success, 200, 201
  // 3 start => redirection
  // 4 start => client error
  // 5 start => server error

  // Todo App
  // POST /todos : create a todo
  // PUT /todos/:todoId: update a todo by id
  // DELETE /todos/:todoId: delete a todo by id
  // GET /todos : get all todos
  // GET /todos/:todoId: get a todo by id

  if (req.url === "/") {
    // homepage data return
    res.write("Hello from home page");
    res.end();
    return;
  }

  // create todo api
  if (req.url === "/todos" && req.method === "POST") {
    let dataString = "";

    await new Promise((resolve, reject) => {
      req.on("data", (chunk) => {
        console.log("chunk received", chunk.toString());
        dataString += chunk.toString();
      });

      req.on("end", () => {
        console.log("all data has been received...");
        resolve(dataString);
      });

      req.on("error", (err) => {
        console.error("error ", err);
      });
    });

    const dataParsed = JSON.parse(dataString);
    todos.push({
      id: todos.length + 1,
      name: dataParsed.name,
    });

    res.write("Todo Created Successfully");
    res.end();
    return;
  }

  if (req.url?.includes("/todos/")) {
    const todoId = req.url.split("/").pop();
    if (!todoId) {
      res.setHeader("Todo id not sent", 400);
      res.end();
      return;
    }

    let dataString = "";

    if (req.method === "PUT") {
      // update a todo api
      await new Promise((resolve, reject) => {
        req.on("data", (chunk) => {
          dataString += chunk.toString();
        });

        req.on("end", () => {
          console.log("all data has been received...");
          resolve(dataString);
        });
      });

      const parsedData = JSON.parse(dataString);

      const updatedTodos = todos.map((todo) => {
        if (todo.id === +todoId) {
          return {
            ...todo,
            name: parsedData.name,
          };
        }
        return todo;
      });
      todos = updatedTodos;

      res.write("Todo Updated Successfully");
      res.end();
      return;
    }

    if (req.method === "DELETE") {
      // delete a todo api
      const todosAfterDeletion = todos.filter((todo) => {
        if (todo.id === +todoId) {
          return false;
        }
        return true;
      });
      todos = todosAfterDeletion;
      res.write("Todo Deleted Successfully");
      res.end();
      return;
    }

    if (req.method === "GET") {
      // get a todo by id api
      const todo = todos.find((todo) => todo.id === +todoId);

      if (!todo) {
        res.write("TODO not found");
        res.end();
        return;
      }

      res.write(JSON.stringify(todo));
      res.end();
      return;
    }
  }

  if (req.url === "/todos" && req.method === "GET") {
    res.write(JSON.stringify(todos));
    res.end();
    return;
  }

  // not found
  res.write("NOT_FOUND");
  res.end();
});

// http -> port 80
// https -> port 443
// smtp -> ?
server.listen(4000, () => {
  console.log("Server started on http://localhost:4000");
});
