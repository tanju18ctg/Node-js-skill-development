
const express = require('express');
const app = express();

app.use(express.json());

const userRoutes = require('./routes/user.routes');

app.use('/users', userRoutes);

//route routes
app.get('/', (req, res) => {
    res.send("server is running.....");
});


app.listen(3000, () => {
    console.log("this server is running port http://localhost:3000");
});

