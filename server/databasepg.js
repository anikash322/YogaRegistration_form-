const {Client} = require('pg')

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "root",
    database: "postgres"
})



client.connect();


module.exports = client


    client.query(`
    SELECT EXISTS (
        SELECT FROM information_schema.tables 
        WHERE  table_schema = 'public'
        AND    table_name   = 'yogatable'
        );`, (err, result)=>{
        if(!err){
            // res.send(result.rows);
            if(result.rows[0].exists===false){
                client.query(`
                CREATE TABLE yogatable(name VARCHAR(20), age int ,  register  DATE, batch char(6));`,
                 (err, result)=>{
        if(!err){
            // res.send(result.rows);
            console.log("table created successfully");
        }
    });
            }
            
        }
    });
    client.end;