import 'dotenv'
import express from 'express'
const app = express();
import db from './models';

db.sequelize.sync({ force: false }).then(() => {
    app.listen(process.env.PORT || 3001, async () => {
        console.log(`%s Listening on port ${process.env.PORT}`)
    })
})