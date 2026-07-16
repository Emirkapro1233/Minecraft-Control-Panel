const express=require('express');
const {spawn}=require('child_process');

const app=express();
app.use(express.json());

let minecraft=null;

app.post('/start',(req,res)=>{
 minecraft=spawn('java',['-jar','server.jar','nogui'],{cwd:req.body.path||'.'});
 res.json({status:'started'});
});

app.post('/stop',(req,res)=>{
 if(minecraft) minecraft.stdin.write('stop\n');
 res.json({status:'stopping'});
});

app.listen(4000,()=>console.log('Agent running on 4000'));
