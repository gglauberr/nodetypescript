import express, { Application } from 'express'
import cors from 'cors'
import AlunoRoutes from './routes/AlunoRoutes'

const server: Application = express()

server.use(cors())

server.use(express.json())

server.use('/aluno', AlunoRoutes)

server.listen(3333, () => console.log('server is running in port 3333'))
