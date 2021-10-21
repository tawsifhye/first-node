const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// const handler = (req, res) => {
//   res.send("Hello from Node eeeeeeeeeeeh");
// };

// app.get("/", handler);

const users = [
  {
    id: 0,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
  },
  {
    id: 1,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
  },
  {
    id: 2,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
  },
  {
    id: 3,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
  },
  {
    id: 4,
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
  },
];

app.get("/users", (req, res) => {
  const search = req.query.search;
  //use query parameter

  if (search) {
    const searchResult = users.filter((user) =>
      user.name.toLocaleLowerCase().includes(search)
    );
    res.send(searchResult);
  } 
  else {
    res.send(users);
  }
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  //   console.log(req.params);
  const user = users[id];
  res.send(user);
});

app.get;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
