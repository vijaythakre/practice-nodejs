const http = require('http');

const server = http.createServer((req, res) => {
	if(req.url == '/hy'){
		res.write('Hello Node');
		res.end();
	}

	if(req.url == '/by'){
		res.write('Bye Node');
		res.end();
	}
});

server.listen(3000, () => {
	console.log(`Listening on port 3000`);
});