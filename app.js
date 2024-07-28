// const express = require("express");
// const app = express();
// const cookieParser = require("cookie-parser");
// const path = require("path");
// const ownersRouter = require("./routes/ownersRouter");
// const productRouter = require("./routes/productRouter");
// const usersRouter = require("./routes/usersRouter");
// const indexRouter=require("./routes/index")
// const expressSession=require("express-session");
// const flash=require("connect-flash");

// require("dotenv").config();

// const db = require("./config/mongoose-connection"); // Ensure this file exports the mongoose connection

// app.use(expressSession({
//     resave:false,
//     saveUninitialized:false,
//     secret:process.env.EXPRESS_SESSION_SECRET,
// }))


// app.use(express.json());
// app.use(cookieParser());
// app.use(flash());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, "public")));
// app.set("view engine", "ejs");

// app.use("/",indexRouter);
// app.use("/owners", ownersRouter);
// app.use("/users", usersRouter);
// app.use("/products", productRouter);

// app.listen(3000, () => {
//     console.log("server is running on port 3000");
// });



const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const path = require("path");
const expressSession = require("express-session");
const flash = require("connect-flash");
const ownersRouter = require("./routes/ownersRouter");
const productRouter = require("./routes/productRouter");
const usersRouter = require("./routes/usersRouter");
const indexRouter = require("./routes/index");

require("dotenv").config();

const db = require("./config/mongoose-connection"); 


app.use(expressSession({
    resave: false,
    saveUninitialized: false,
    secret: process.env.EXPRESS_SESSION_SECRET,
    cookie: { secure: false } 
}));


app.use(cookieParser());


app.use(express.json());


app.use(express.urlencoded({ extended: true }));


app.use(express.static(path.join(__dirname, "public")));


app.use(flash());


app.set("view engine", "ejs");


app.use("/", indexRouter);
app.use("/owners", ownersRouter);
app.use("/users", usersRouter);
app.use("/products", productRouter);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
