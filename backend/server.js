const express=require('express');
const cors=require('cors');

const app=express();
app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>res.json({name:'Minecraft Panel API',status:'online'}));

app.listen(3000,()=>console.log('API started'));
