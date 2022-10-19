const express = require('express');
require('dotenv').config();
const app = express();



const cors = require('cors');
app.use(cors());
//middleware
app.use(express.json());


const port= process.env.PORT || 3030;

app.listen(port, () => {
     console.log(`Connection successfully with port ${port}`)
})

//localhost:8080/api/user/getUser
const rootRoute = require('./routes/index');
app.use("/api", rootRoute);

// // nodemon : tự động restart lại server khi lưu code
