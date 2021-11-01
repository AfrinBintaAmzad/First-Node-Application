const express =require('express');
const app=express();
const port=process.env.PORT ||3000;

const handler =(req,res)=>{
    res.send('Wow!! I am excited for node.js');
}
app.get('/',handler);

const users=[
    {id:1,name:"Afrin",email:'afrin@gmail.com',phone:'01982236721'},
    {id:2,name:"Montu",email:'Montu@gmail.com',phone:'01982236722'},
    {id:3,name:"Shushoma",email:'Shushoma@gmail.com',phone:'01982236723'},
    {id:4,name:"sonia",email:'sonia@gmail.com',phone:'01982236724'},
    {id:5,name:"Jayeb",email:'Jayeb@gmail.com',phone:'01982236725'},
    {id:6,name:"Jawad",email:'Jawad@gmail.com',phone:'01982236726'},
    {id:7,name:"Bushra",email:'Bushra@gmail.com',phone:'01982236727'},
    {id:8,name:"Tanvir",email:'Tanvir@gmail.com',phone:'01982236728'},
    {id:9,name:"Shoyle",email:'Shoyle@gmail.com',phone:'01982236729'},

]

app.get('/users',(req,res)=>{
    const search=req.query.search;
    if(search){
        const searchResult=users.filter(user=>user.name.toLowerCase().includes(search));
        res.send(searchResult);
    }
    else{
        res.send(users)
    }
})
app.get('/fruits',(req,res)=>{
    res.send("mango,orange,banana,jackfruit")
})
app.get('/fruits/mango/jackfruit',(req,res)=>{
    res.send("yammy yammy fruits")
})
app.get('/users/:id',(req,res)=>{
    const id=req.params.id;
    const user=users[id];
    res.send(user);
})

app.listen(port,()=>{
    console.log('lisenting to port',port);
});
