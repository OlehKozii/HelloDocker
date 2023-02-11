require("dotenv").config({path:`.${process.env.NODE_ENV}.env`})
const Express = require("express")
const cors = require("cors");
const sequelize = require("./db")
const router = require("./router/router");

const app = Express();
const port = process.env.PORT || 1488

app.use(cors())
app.use(Express.json())
app.use("/", router)

const start = async () =>{
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(port, ()=>{console.log(`Working in ${process.env.NODE_ENV} mode on http://localhost:${port}`)})
}

start().catch(e=>console.log(e))

