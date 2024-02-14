const  http = require('node:http');

http.createServer( (req, res) => {
    console.log(req);
    
    res.write('Hola mundo');
    res.end();
})
.listen(8080)
console.log('Escucando el Puerto', 8080);