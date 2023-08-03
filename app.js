const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const sequelize = require('./util/database')
//const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
//app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/get', userRoutes);
app.use('/post', userRoutes);




sequelize.sync().then((result)=>{
    app.listen(3000);
})
.catch(err=>{
    console.log(err);
});

