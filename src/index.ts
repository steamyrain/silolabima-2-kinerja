import express from "express"
import cors from "cors"
import morgan from "morgan"
import dotenv from 'dotenv-safe'
import {sequelize} from './infra/db/connection'
import path from 'path'

// envVar load environment variables
// this is done synchronously because we don't want the application
// start without all the needed environment variables
try {
    dotenv.config({
        path:process.env.NODE_ENV==='production'?
            path.join(__dirname,'../.prod.env'):path.join(__dirname,'../.dev.env')
    }) 
} catch(e){
    console.log(e)
    process.exit(1)
}

// check connections to database
const db = async() => {
    await sequelize.authenticate()
    await sequelize.query("CREATE DATABASE IF NOT EXISTS `kinerja`")
}
// db() call the async function
db()
// on promise fulfilled
.then((_val)=>{
    console.log('successfully authenticated connection and created database')

    // app instantiate express app
    const app = express()

    // app register cors middleware
    app.use(cors())

    // app register express json middleware
    app.use(express.json())

    // apap register morgan tiny logger middleware
    app.use(morgan('tiny'))

    // app register "/" path with callback
    app.get('/',(_req,res)=>{
        res.status(200).send({message: "ok"})
    })

    // app listen at port 4000
    app.listen(4000,()=>{
        console.log("listening on port 4000")
    })
})
//on promise rejected
.catch((reason)=>{
    console.log(reason)
    process.exit(1)
})

