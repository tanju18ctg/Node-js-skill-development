require('dotenv').config();

const config = require('./config/app.config');
const express = require('express');
const errorHandler = require('./middlewares/errors.middleware');
const helmet = require('helmet');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(errorHandler);




const userRoutes = require('./routes/user.routes');

app.use('/users', userRoutes);

//route routes
app.get('/', (req, res) => {
    res.send("server is running.....new_env_port");
});

// static Direct env use
// const PORT = process.env.PORT || 3000;

console.log(config.port);

const port = config.port;


app.listen(port, () => {
    console.log(`this server is running port http://localhost:${port}`);
});

