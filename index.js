import express from 'express'
import bodyParser from 'body-parser';
import {carsRoute} from './routes.js'
import cors from 'cors'
import {connectingDb} from './utils.js'

const app = express();

const PORT = '3000'
const HOST = '0.0.0.0'

app.use(cors())
app.use(bodyParser.json())
app.use('/api', carsRoute)

connectingDb()

app.listen(PORT, HOST, () => {
    console.log('Server ir running on PORT', process.env.PORT)
})

