
const knex = require("knex");
const express = require("express");
const helmet = require("helmet");

const server = express();

server.use(express.json());
server.use(helmet());
const knexConfig = {
  client: "sqlite3",
  connection: {
    filename: "./data/zoos.db3"
  }
};
const db = knex(knexConfig);

server.get("/zoos", (req, res) => {
  db("zoos")
    .then(roles => {
      res.status(200).json(roles);
    })
    .catch(err => {
      console.log(err);
    });
});

server.get("/zoos:id", (req, res) => {
  db("zoos")
    .where({ id: req.params.id })
    .first()
    .then(zoo => {
      if (zoo) {
        res.status(200).json(role);
      } else {
        res.status(404).json({ message: "Zoo not found" });
      }
    })

    .catch(res => {
      console.log(err);
    });
});

server.post("/zoos", (req, res) => {
  db("zoos")
    .insert(req.body, "id")
    .then(result => {
      res.status(200).json(results);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

server.put("/zoos:id", (req, res) => {
  // update roles
  res.send("Write code to modify a role");
});

server.delete("/zoos:id", (req, res) => {
  // remove roles (inactivate the role)
  res.send("Write code to remove a role");
});

// endpoints here

const port = 3300;
server.listen(port, function() {
  console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});
