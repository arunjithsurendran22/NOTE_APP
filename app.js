require("dotenv").config();
const express = require("express");
const expressLayouts = require("express-ejs-layouts");

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//static file
app.use(express.static("public"));
//template engine
app.use(expressLayouts);
app.set("layout", "./layouts/main");
app.set("view engine", "ejs");

//Routes
app.use("/", require("./server/routes/index"));

app.listen(PORT, () => {
  console.log(`server is running on PORT${PORT}`);
});
