const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req,res)=>{
  res.json({status:'Minecraft Control Panel API online'});
});

app.listen(3000, ()=> {
  console.log('API running on port 3000');
});
