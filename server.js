const cors = require('cors')
const express = require('express');
const path = require('path')
const app = express();

const specialToken = "specialToken"
PORT =  process.env.PORT || 5000;
app.listen(PORT, ()=>{console.log(`server started on port ${PORT}`)})

app.use(express.json({extended:false}))

app.use(cors({
    origin: '*'
}));



    app.use(express.static('client/build'))

    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'))
    })
    
    app.post('/login',(req,res)=>{
        const {email,password} = req.body
        console.log("this is body",req.body)
        if( email==='rahulyadu17@gmail.com' && password==='123456'){
            return res.status(200).json({msg:'user verified'})
        }
        return res.status(300).send({msg:"user unverified"})
    })

    

    