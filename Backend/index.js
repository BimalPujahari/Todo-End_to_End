const express=require('express')
const app=express();
const cors=require("cors");
const { data1 ,data2 }=require("./types");
const mongoose=require('mongoose');
app.use(express.json());
app.use(cors());
mongoose.connect("mongodb+srv://kolin:zhF8v1WeESpbg9be@cluster0.jlo2f2r.mongodb.net/Todo_app")
const PORT = 3001;
 

const Todo=mongoose.model("Todo",{
          title:String,
          description:String,
          completed:Boolean
})
//body{
//     title:"ud",description:"udgufdug"
//     }
app.post("/todo",(req,res)=>{
const title=req.body.title;
const description=req.body.description;
console.log(title)
console.log(description)
const check1=data1.safeParse(title);
const check2=data1.safeParse(description);
console.log(check1)
console.log(check2)
if(!check1.success && !check2.success){
res.status(411).json({
          msg:"invalid inputs"
})
return;
}

// const createpayload=req.body;
// console.log(createpayload);
// const parsedpayload=data1.safeParse(createpayload);
// if(!parsedpayload.success){
// res.status(411).json({
// msg:"invalid inputs"
// })
// return;        
// }

Todo.create({
title:title,
description:description,
completed:false
}).then((response)=>{
if(response){
res.json({
msg:"todo created successfully"
})
}
else{
res.json({
msg:"some error happened"
})
}
})

})

app.get("/todos",(req,res)=>{
  Todo.find({}).then((todos)=>{
    res.json({
          todos
    })
  })        
})
app.put("/completed", (req,res)=>{
    const updatepayload=req.body;
    console.log(updatepayload) ;
    const parsedpayload=data2.safeParse(updatepayload);
    if(!parsedpayload.success){
res.status(411).json({
          msg:"wrong inputs"
})
return;
    }
    console.log(parsedpayload)
    console.log(req.body.id)
Todo.updateOne(
{
_id:req.body.id
},
{
completed:true   
}
).then((r)=>{
console.log(r);
res.json({
msg:"todo marked as completed"

})
})
})
app.listen(PORT, function(err){
if (err) console.log("Error in server setup")
console.log("Server listening on Port", PORT);
})