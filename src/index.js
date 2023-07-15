import express from 'express'
import routesUsers from './routes/routesUsers.js'
import connectDataBase from "./config/db.js";
const app = express()

app.use(express.json())
app.use(routesUsers)

connectDataBase().then(() => {
    app.listen(3000, () => {
        console.log('Server rodando')
    })
}).catch((err) => {
    console.log(err)
})






