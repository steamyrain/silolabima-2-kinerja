import express from "express"
import cors from "cors"
import morgan from "morgan"
import { sequelize } from "./infra/db/connection"
import KegiatanModel from './infra/db/models/kegiatanmodel'
import KinerjaModel from './infra/db/models/kinerjamodel'
import wrap from 'express-async-wrap'

/* ========================================================================================= */
// initiates express application and registers middlewares to express application
/* ========================================================================================= */
const app = express() // instantiate express app
app.use(cors())// app register cors middleware
app.use(express.json())// app register express json middleware
app.use(morgan('tiny'))// app register morgan tiny logger middleware
/* ========================================================================================= */

/* ================================================================================================= */
// init application
/* ================================================================================================= */
const init = async () => {
    /* ================================================================================================= */
    // wait for database sync then we can start accepting request
    /* ================================================================================================= */
    try{
        await sequelize.sync()
    /* ================================================================================================= */
    /* ================================================================================================= */
    // registers route to express application
    /* ================================================================================================= */
        app.get('/',(_req,res)=>{// register "/" resource path with callback
            res.status(200).send({message: "ok"})
        })
        app.get('/kegiatan',wrap(async(req,res,next)=>{// register "/kegiatan" resource path with callback
            const kegiatan = await KegiatanModel.findAll({attributes:["kegiatanId","kegiatanName"]})
            res.status(200).send(kegiatan)
        }))
        app.post('/kegiatan',wrap(async(req,res,next)=>{// register "/kegiatan" resource path with callback
            const newKegiatan = await KegiatanModel.create({
                pekerjaanId: parseInt(req.body.pekerjaanId),
                organisasiId: parseInt(req.body.organisasiId),
                kegiatanName: req.body.kegiatanName
            })
            res.status(201).send(newKegiatan)
        }))
        app.post('/kinerja',wrap(async(req,res,next)=>{// register "/kegiatan" resource path with callback
            const newKinerja = await KinerjaModel.create({
                userId: req.body.userId,
                kinerjaStart: req.body.kinerjaStart,
                kinerjaEnd: req.body.kinerjaEnd,
                kegiatanId: req.body.kegiatanId,
            })
            res.status(201).send(newKinerja)
        }))
    /* ================================================================================================= */

    /* ================================================================================================= */
    // tell express application to start listening at designated port
    /* ================================================================================================= */
        app.listen(4000,()=>{
            console.log("listening on port 4000")
        })
    /* ================================================================================================= */
    } catch(e){// catch database sync errors 
        console.error(e)// print the error to stdout
    }
    /* ================================================================================================= */
}
init()// start initialization
/* ================================================================================================= */

