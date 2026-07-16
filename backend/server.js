const express = require('express');
const cors = require('cors');
const { spawn } = require('child_process');

const app = express();
app.use(cors());
app.use(express.json());

let minecraftProcess = null;

app.get('/', (req,res)=>{
 res.json({status:'Minecraft Control Panel API online'});
});

app.post('/server/start',(req,res)=>{
 if(minecraftProcess) return res.json({message:'already running'});
 minecraftProcess = spawn('java',['-jar','server.jar','nogui']);
 res.json({message:'server started'});
});

app.post('/server/stop',(req,res)=>{
 if(minecraftProcess){
  minecraftProcess.stdin.write('stop\n');
  minecraftProcess=null;
 }
 res.json({message:'server stopped'});
});

app.listen(3000,()=>console.log('API running on 3000'));