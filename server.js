const express =require('express')
const mysql = require('mysql');
const app = express();
//MYSQL Connection   
//For Connect DB use : npm run dev
app.use(express.json());//parse json => js obj


const connection = mysql.createConnection({

    host:'localhost',
    user:'root',
    password:'',
    database:'WhereMyBeer',
    port:'3306'

})

connection.connect((err)=>{
    if(err){
        console.log('Eror connecting to MySQL database = ',err)
    }
    console.log('MySQL successfully connected!');
})
//CREATE Routes for add information in DB
//Fetch data in DB
app.post("/create",async(req,res)=>{
    const {Username,Password,F_name,L_name,Card_ID,Age} = req.body;
    //catch eror and not eror
    try{
        connection.query(
            "INSERT INTO User(Username,Password,F_name,L_name,Card_ID,Age) VALUES(?,?,?,?,?,?)",
            [Username,Password,F_name,L_name,Card_ID,Age],
            (err,results,fields) =>{
                if(err){
                    console.log("Eror While Inserting a User Into The Database")
                    return res.status(400).send();
                }
                return res.status(201).json({message:"New user successfully created!"})
            }


        )
    }catch(err){
        console.log(err);
        return res.status(500).send();
    }
})

app.listen(3000,()=>console.log('Server is running on port 3000'));