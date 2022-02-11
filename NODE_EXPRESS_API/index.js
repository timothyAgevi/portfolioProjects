import express from 'express';
import bodyParser from 'body-parser'; //takes in incoming POST request bodies
import usersRoutes from './routes/users.js'
import cors from 'cors'
const app =express() //initailize app
const PORT =5000;// define PORT

//initilaze body parser midddleware
app.use(bodyParser.json())
//note inn json obj and key enclosed in""

// define reoutes(path,callbackfunction)
app.use(express())
app.use(cors())
app.use('users', usersRoutes)//all routes starting with /users
app.get('/',(req,res)=>{res.send('Hello from Homepage')});


app.listen(PORT,() =>console.log(`Server running on Port : http://localhost:${PORT}`));
