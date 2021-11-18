
var cors = require('cors');

const client = require('./databasepg.js')
const express = require('express');
const app = express();
const corsOptions ={

    origin:'http://localhost:3000' , 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));
const PORT = process.env.PORT || 3300;
app.listen(PORT, ()=>{
    console.log(`Sever is now listening at port ${PORT}`);
})

// client.connect();





app.get('/yogatable', (req, res)=>{
    client.query(`Select * from yogatable`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})


const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.post('/yogatable/register', (req, res)=> {
    
    const yogatable = req.body;
    console.log(yogatable)
    let insertQuery = `insert into yogatable (name, age,register,batch) 
                       values('${yogatable.name}', '${yogatable.age}','${yogatable.register}','${yogatable.batch}')`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Insertion was successful')
        }
        else{ console.log("error",err.message) }
    })
    client.end;
})








