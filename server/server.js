require('dotenv').config()
const express = require('express')
const admin=require('./admin')
const cors=require('cors')
const app = express()
const port = 3000
const routes=require('./routes')
const connectdb=require('./utils/db');
const bcrypt=require('bcrypt')
const errormiddleware = require('./middlewares/error-middleware')

const corsOption={
  origin:"http://localhost:5173",
  method:"POST,GET,PUT,DELETE,PATCH,HEAD",
  credentials:true,
}
app.use(cors(corsOption));
app.use(express.json())

app.use((req,res,next)=>{
  console.log("hello")
  next()
})
app.use('/routes',routes)
app.use('/admin',admin)
app.use(express.static('public'));
app.use(errormiddleware)

connectdb().then(()=>{
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
})