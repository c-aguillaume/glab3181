// const http = require('http');
// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello World\n');
// })

// server.listen(port, hostname, () => {
//     console.log(`Server is running at the http://${hostname}: ${port}/`)
// })




const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

http.createServer((req, res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html')

    switch (req.url) {
        case '/':
            res.write('Main Page')    
            break;
        case '/characters':
            res.write("You've reached the charaters site")
            break;
        case '/greeting':
            res.write('Hello')
        case '/sportsdata':
            res.write("You've reached the sports data site")
            break;
        case '/time':
            const now = new Date();
            const formatted = now.toLocaleString();
            const hour = now.getHours
            if (hour < 12 ) {
                res.write('Good Morning Sunshine. Have a lovely day');
            }else if (hour < 18){
                res.write('Good afternoon')
            }else {
                res.write('Good evening late nighter! Go to sleep. ')
                res.write(`The current date and time is: ${formatted}`);
                break;
            } 
        default:
            res.statusCode = 404;
            res.write('Error: 404 Not Found');
            break;
    }
res.end();
})
.listen(`${port}`, ()=>{
    console.log('Server Running')
})


/////////Testing out using an IF statement instead of switch///////////////
///////////////////////////////////////////////////////////////////////////
// const server = http.createServer((req, res) =>{                 
// if (req.url === '/' && req.method ==='GET') {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/html');
//     res.write('<h1 style="color:red">Hello World!</h1>');
//     res.write('<p>I wonder what else we can send...</p>');
//     res.end()   
// } 

// else if(req.url === '/users' & req.method == 'Get'){
//     res.statusCode = 200;
    
// }
// })



// server.listen(port, hostname, () =>{
// console.log(`Server is running at http://${hostname}: ${port}/`)
// })

