const mongoose= require('mongoose');
const UserSChema=new mongoose.Schema({
   
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
const usermodel=mongoose.model('crio',UserSChema);
module.exports=usermodel;