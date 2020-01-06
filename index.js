const http = require("http");
const express = require("express");
const app = express();
const PORT = 3002;
const server = http.createServer(app);
const VIPS = {
    'austin':"whaddup!",
    'chris': "yes?",
    'carly': "I'm sleepy",
    'cat' "I'm a cat!":,
    'mark':"oh hi mark"
};

app.get('/:words',(request, response) =>{
    const name = request.params.words;
    if (VIPS.includes(name.toLowerCase())){
        response.send(VIPS[name.toLowerCase()]);
    } else {
        response.send(`hello, ${name}!`);
    }
});

app.get('/', (request, response) =>{
    response.send("go somewhere so I can do something.");

});

server.listen(PORT, () =>{
    console.log(`listening on ${PORT}`);
});