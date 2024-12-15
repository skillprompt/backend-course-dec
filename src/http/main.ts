import http from "http";

console.log("backend...");

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

  if (req.url === "/") {
    // homepage data return
    res.write("Hello from home page");
    res.end();
    return;
  }

  if (req.url === "/create-todo" && req.method === "POST") {
    // create-todo data returned
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

    console.log("dataString", dataString);

    res.write(`<p style="color: red;">Todo created: ${dataString}</p>`);
    res.end();
    return;
  }

  if (req.url === "/services") {
    // routing
  }

  if (req.url === "/contact-us") {
  }

  if (req.url?.includes(`/users/`)) {
    const userId = req.url.split("/").pop();
    res.write(`<p style="color: red;">Hello user ${userId}</p>`);
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

//  [1, 2, 3,4, 5,6, 6 ....... 100000];
// [[1,2,3,4,5], [6, 7,8,9,10], .... [99996, 99997, ...100000]]
