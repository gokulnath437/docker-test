const express = require('express');
const app = express();
const port = 3002;
const axios = require('axios');

app.get('/service2', async (req, res) => {
    try {
        const response = await axios.get('http://service1:3001/service1');
        res.send(`Hello from Service 2. Also got this message: ${response.data}`);
    } catch (error) {
        res.status(500).send('Error connecting to Service 1');
    }
});

app.listen(port, () => {
    console.log(`Service 2 listening at http://localhost:${port}`);
});
