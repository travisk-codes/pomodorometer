import express from 'express'
import userRoutes from './user/User.routes';

const router = express.Router();

router.use('/user', userRoutes);


export default router;
