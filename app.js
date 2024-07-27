const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const path = require("path");
const ownersRouter = require("./routes/ownersRouter");
const productRouter = require("./routes/productRouter");
const usersRouter = require("./routes/usersRouter");
require("dotenv").config();

const db = require("./config/mongoose-connection"); // Ensure this file exports the mongoose connection

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.use("/owners", ownersRouter);
app.use("/users", usersRouter);
app.use("/products", productRouter);

app.listen(3000, () => {
    console.log("server is running on port 3000");
});
