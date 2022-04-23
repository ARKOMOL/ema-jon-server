const express = require('express');
const app = express()
const cors = require('cors');
const port = process.env.PORT || 5000;

//midlleware 
app.use(cors());
app.use(express.json());




app.get('/',(req,res)=>{
    res.send('john is running and waiting for you')
})


app.listen(port,()=>{
    console.log('john is running in runnig ',port);
})