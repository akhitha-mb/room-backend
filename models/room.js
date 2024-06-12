const mongoose=require("mongoose")
const schema=mongoose.Schema(
    {
        "hotelname":{type:String,require:true},
        "date":{type:String,require:true},
        "checkin":{type:String,require:true},
        "checkout":{type:String,require:true},

    }
)
let roommodel=mongoose.model("room",schema)
module.exports={roommodel}