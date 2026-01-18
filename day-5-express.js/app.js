const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send("Hello from server by expressjs");
});

//routing with get & post request
app.get('/users', (req,res) => {
    res.json({
        users: []
    });
});

app.post('/create-user', (req, res) => {
    res.send("Create User");
});

//simple middleware in node.js
app.use((req, res, next) => {
    console.log("Request Recieved", req.method, req.url);
});

// JSON ApI Response

app.get('/api/status', (req, res) => {
    res.status(200).json({
        success: true,
        message: "Api is working..."
    });
});


app.listen(3000, () => {
    console.log("Start server running at http://localhost:3000");
});
