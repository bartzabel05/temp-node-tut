const http=require('http');

const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('Welcome to our home page');
    }
    if(req.url==='/about'){
        res.end("Here is our short history");
    }
    // for a page not present/found
    res.end(`
    <h1>Oops!</h1>
    <p>We can't find the page</p>
    <a href="/">Home Page</a>
    `);
});

// listen to port
server.listen(5000);