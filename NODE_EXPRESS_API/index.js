import express from 'express';
import bodyParser from 'body-parser'; //takes in incoming POST request bodies

const app =express() //initailize app
const PORT =5000;// define PORT

//initilaze body parser midddleware
app.use(bodyParser.json())
//note inn json obj and key enclosed in""

app.listen(PORT,() =>console.log(`Server running on Port : http://localhost:${PORT}`));
