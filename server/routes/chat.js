const express = require('express');
const router = express.Router();
const axios = require('axios');
const { v4: uuidv4 } = require('uuid');

// Define the /api/chat endpoint
router.post('/:conversation_id?', function(req, res, next) {
  const { message } = req.body;
  const { conversation_id } = req.params;


  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }

  let data = JSON.stringify({
    "conversation_id": conversation_id ?? uuidv4(),
    "message": message
  });

  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://api.cohere.com/v1/chat',
    headers: { 
      'accept': 'application/json', 
      'content-type': 'application/json', 
      'Authorization': `Bearer ${process.env.VITE_COHERE_API_KEY}` 
    },
    data: data
  };

  axios.request(config)
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: 'An error occurred' });
    });
});

module.exports = router;
