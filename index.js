const express = require('express');
const cors = require('cors');
require ('dotenv').config()
const { MongoClient, ServerApiVersion } = require('mongodb');
const port = process.env.PORT || 5000;
const app = express()



//midlleware 
app.use(cors());
app.use(express.json());

//================Connet to Cluster============== 


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.8c3ja.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run(){
    try{
        await client.connect();
        const productCollection = client.db('emaJohn').collection('product');


        app.get('/product', async(req,res) =>{
            const query ={};
            const cursor = productCollection.find(query);
            const products =await cursor.toArray();
            res.send(products);
        })
    }
    finally{

    }

}

run().catch(console.dir);


//==============================================


app.get('/',(req,res)=>{
    res.send('john is running and waiting for you')
})


app.listen(port,()=>{
    console.log('john is running in runnig ',port);
})