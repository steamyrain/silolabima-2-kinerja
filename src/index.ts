import express from "express"
import cors from "cors"
import morgan from "morgan"

const app = express()

app.use(cors())
app.use(express.json())
app.use(morgan('tiny'))

app.get('/',(_req,res)=>{
    res.status(200).send({message: "ok"})
})

app.listen(4000,()=>{
    console.log("listening on port 4000")
})
