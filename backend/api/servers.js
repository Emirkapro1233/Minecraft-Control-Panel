const express = require('express');
const router = express.Router();

let servers = [];

router.get('/', (req,res)=>{
  res.json(servers);
});

router.post('/create', (req,res)=>{
  const server = {
    id: Date.now(),
    ...req.body,
    status: 'offline'
  };

  servers.push(server);
  res.json(server);
});

module.exports = router;
