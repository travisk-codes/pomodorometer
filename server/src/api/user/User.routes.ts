import express from 'express'

const router = express.Router();

router.get('/', (req, res) => {
	res.send('Hey this is the user route')
})


export default router;
