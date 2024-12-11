import http from "http";

const server = http.createServer((req, res) => {
  const url = req.url;
  console.log("url", url);

  if (req.url === "/") {
    // homepage data return
    res.write("Hello from home page");
    res.end();
    return;
  }

  if (req.url === "/create-todo") {
    // create-todo data returned
    res.write(`<p style="color: red;">Hello create todo</p>`);
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
