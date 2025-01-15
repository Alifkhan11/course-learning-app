import express, { Application } from 'express'
import cors from 'cors'
import router from './app/router'
import globalErrorHendleing from './app/middlewere/globalErrorHendleing'
import notFount from './app/middlewere/notFound'
const app:Application = express()

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api/v1', router)

app.use(globalErrorHendleing)

app.use(notFount)

export default app
