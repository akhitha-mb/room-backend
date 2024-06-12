const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const { roommodel } = require("./models/room")


const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://akhitha:akhi2603@cluster0.gikzvie.mongodb.net/roomdb?retryWrites=true&w=majority&appName=Cluster0")
app.post("/add", (req, res) => {
    let input = req.body
    let room = new roommodel(input)
    room.save()
    console.log(room)
    res.json({ status: "success" })
})
app.post("/search", (req, res) => {
    let input = req.body
    roommodel.find(input).then((data) => {
        res.json(data)
    }).catch((error) => {
        res.json(error)
    })
})
app.get("/viewall", (req, res) => {
    let input = req.body
    roommodel.find().then((data) => {
        res.json(data)
    }).catch((error) => {
        res.json(error)
    })
})
app.post("/delete", (req, res) => {
    let input = req.body
    roommodel.findByIdAndDelete(input._id).then(
        (response) => {
            res.json({ status: "success" })
        }).catch((error) => {
            res.json({ status: "error" })
        })

})
app.listen(8083, () => {
    console.log("server started")
})