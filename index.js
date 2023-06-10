import expres from 'express'
import cors from 'cors'
import router from './routes/birds.routes.js';
import './config.js'
import { PORT } from './config.js';

const app = expres()




app.use(cors())
app.use(expres.json())
app.use('/api',router)


app.listen(PORT)