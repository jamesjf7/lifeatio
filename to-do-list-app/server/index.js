/** env */
require("dotenv").config();

/** library */
const express = require("express");
const cors = require("cors");

/** routes */
const user = require("./routes/user");
const todo = require("./routes/todo");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/todos", todo);
app.use("/api/v1/users", user);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}!`);
});
