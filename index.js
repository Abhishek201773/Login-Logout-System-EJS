import express from 'express';
import bodyParser from "body-parser"; 
const app= express();
const port=3000;
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.listen(port,(req,res)=>{
    console.log(`Server is running on port ${port}`);
});
app.get('/',(req,res)=>{
    res.render('index.ejs');
});
app.post('/submit',(req,res)=>{
    let first=req.body["First"];
    let last=req.body["Pass"];
    const data={
        name:first,
        password:last,
    }
    if(first=="Abhishek" && last=="Dixit"){
    res.render('login.ejs',data);
    }
    else{
        res.send("Invalid");
    }
});