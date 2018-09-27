const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


const myLog = function(req, res, next){
	console.log('I am a Gentle Middleware');
	req.myTime = Date.now();
	next();
};

app.use(myLog);


app.get('/', (req, res) => {
	res.send('Hello World!..' + req.myTime );
})

app.get('/about-us', (req, res) => {
	// res.json({
	// 	user: 'Vijay',
	// 	comapany: 'saksoft'
	// })
	res.status(500).json({error: 'some error occured'});
})

app.get('/ab*cd', (req, res) => {
	res.send('<h1>Its a  RegEx Path</h1>');
})

const userRoutes = require('./routes/users');
app.use('/users', userRoutes);


app.get('/flights/:src-:dest', (req, res)=>{
	res.send(req.query);
})

app.post('/about-us', (req, res) => {
	console.log(req.body);
	res.send(req.body);
})

app.listen(5000, () => {
	console.log('Server is listening on port 5000...');
})
