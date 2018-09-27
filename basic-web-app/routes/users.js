
const router = require('express').Router();

router.get('/me/:id', (req, res) => {
	console.log(req.params);
	res.send(`User with ID: ${req.params.id}`);
})

router.get('/my-downloads', (req, res) => {
	res.download('../sample.txt');
})


module.exports = router;