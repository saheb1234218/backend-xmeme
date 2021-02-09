const mongoose= require('mongoose');
const UserSChema=new mongoose.Schema({
    id:{
        type: Number,
        required: true,
    },
   name: {
       type: String,
       required : true ,
   },
   caption : {
       type: String,
       required : true,
   },
   url : {
    type: String,
    required : true,
},
});
const usermodel=mongoose.model('meme',UserSChema);
module.exports=usermodel;