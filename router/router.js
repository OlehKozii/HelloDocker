const Router = require("express")
const user = require("../models/userModel");

const router = new Router()

router.get("", async (req, res) => {
    try{
        res.json(await user.findAll())
    }
    catch (e) {
        console.log("Something went wrong")
    }
})
router.post("", async (req, res) => {
    try{
        const {name, password} = req.query
        const us = await user.create({name, password})
        res.json(us)
    }
    catch (e) {
        console.log("Something went wrong")
    }

})

module.exports = router