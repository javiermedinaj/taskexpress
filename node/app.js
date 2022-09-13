import express from 'express'
import cors from 'cors'
import db from './database/db.js'
import blogRoutes from './routes/routes.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use('/blogs', blogRoutes)

try {
    await db.authenticate()
    console.log('conexion exitosa a la base de datos')
} catch (error) {
    console.log('error de db')
}

app.get('/', (req, res) => {
    res.send("funciona")
})

app.listen(8000, () => {
    console.log('puerto corriendo en 8000')
})