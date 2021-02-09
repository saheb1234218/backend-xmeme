const express= require ('express');
const App= express();
const mongoose=require ('mongoose');
const usermodel =require( './models/memeschema');
const cors=require('cors');
const CONNECTION_URL=require('./.env');
const dotenv=require('dotenv');

const PORT= process.env.PORT || 5000;




App.use(cors());
App.use(express.json());
dotenv.config();

mongoose.connect(process.env.CONNECTION_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log("mongodb atlas connected");
})



App.get("/",(req,res)=>{
    res.send("Welcome to the backend server of Apurba-X-Meme");
})

App.post("/memes",async(req,res)=>{
    own=req.body.name;
    cap=req.body.caption;
    murl=req.body.url;
    id1=req.body.id;
    const user= new usermodel({
        id:Number(id1),
       name: own,
        caption: cap,
       url: murl});
    await user.save();
    console.log("data 2 saved");
    res.send("saved");
})


App.delete("/delete/:id",async(req,res)=>{
    const id =req.params.id;
    await usermodel.findOneAndRemove(id).exec();
    
    res.send("item deleted");
});


App.put("/memes",async(req,res)=>{
    const new_url=req.body.new_url;
    const new_caption=req.body.new_caption;
    const id=req.body.id;
    const nam=req.body.name;
    try{
        await usermodel.findById(id,(error,friendToupdate)=>{
            friendToupdate.caption=new_caption;
            friendToupdate.url=new_url;
            friendToupdate.name=nam;
            friendToupdate.save();
        });
    }
    catch(err){
console.log(err);
    }
    res.send("updated");
});


App.get('/memes',async(req,res)=>{
    usermodel.find({},(err,result)=>{
        if(err)
        {
            console.log("cannot get data from db");
        }
        else{
            console.log("recieved data from mongodb");
            res.send(result);
        }
    })

});





App.listen(PORT,()=>{
    console.log("server is running on port"+PORT);
})