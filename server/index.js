import express from 'express' ; 
import bodyParser from 'body-parser';
import dotenv from 'dotenv' ; 
import helmet from 'helmet' ; 
import morgan from 'morgan';
import cors from 'cors' ; 
import mongoose from 'mongoose';
import clientRoutes from './routes/clientRoutes.js'
import generalRoutes from './routes/generalRoutes.js'
import managementRoutes from './routes/managementRoutes.js'
import salesRoutes from './routes/salesRoutes.js' 

// DATA IMPORT :
// import User from './models/User.js';j
// import Product from './models/Product.js';
// import Transaction from './models/Transaction.js';
// import ProductStat from './models/ProductStat.js';
// import OverallStat from './models/OverallStat.js';
// import AffiliateStat from './models/AffliateStats.js';
// import {dataUser , dataProduct , dataProductStat , dataTransaction , dataOverallStat , dataAffiliateStat} from './data/index.js' ; 


// CONFIGURATIONS : 
dotenv.config() ; 
const app = express() ; 
app.use(express.json())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({policy : 'cross-origin'})) ; 
app.use(morgan('common')) ; 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false})) ; 
app.use(cors())

// ROUTES  :
app.use('/client' , clientRoutes) ; 
app.use('/management' , managementRoutes) ;  
app.use('/general' , generalRoutes) ; 
app.use('/sales' , salesRoutes) ; 

// MONGOOSE : 
const PORT = process.env.PORT || 9000 ; 
mongoose.connect(process.env.MONGO_URL , 
    {
        useNewUrlParser : true , 
        useUnifiedTopology : true
    }
    ).then(() => {
        app.listen(PORT , () => console.log(`Server Port : ${PORT}`))

        // this data should be added one time : 
        // User.insertMany(dataUser)
        // Product.insertMany(dataProduct)
        // ProductStat.insertMany(dataProductStat)
        // Transaction.insertMany(dataTransaction)
        // OverallStat.insertMany(dataOverallStat)
        // AffiliateStat.insertMany(dataAffiliateStat)

    }).catch(err => console.log(`${err} didn't connect ...`)) 

