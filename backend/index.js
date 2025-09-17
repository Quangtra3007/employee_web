import express from 'express'
import cors from 'cors'
import authRoute from './route/auth.js'
const app = express()
app.use(cors())
app.use(express.json());
app.use('/api/auth', authRoute);
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});