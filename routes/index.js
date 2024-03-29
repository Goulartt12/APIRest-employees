const express = require("express");
const app = express();
const routes = require("./route");

app.use(express.json(), routes);

app.listen(5000,()=>{
    console.log("server connected");
});