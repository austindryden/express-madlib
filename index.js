const http = require("http");
const express = require("express");
const fs = require('fs');
const madHTML = fs.readFileSync("./madlib.html").toString();
const app = express();
const server = http.createServer(app);

const PORT = 3002;

const VIPS = {
    'austin':"whaddup!",
    'chris': "yes?",
    'carly': "I'm sleepy",
    'cat': "I'm a cat!",
    'mark':"oh hi mark"
};

console.log(madHTML);
app.get('/:name/:place',(request, response) =>{
    const name = request.params.name;
    const place = request.params.place;
    if (Object.keys(VIPS).includes(name.toLowerCase())){
        response.send(VIPS[name.toLowerCase()]);
    } else {
        let nuMad = madHTML.replace("***NAME***", name);
        nuMad = nuMad.replace("***PLACE***", place);
        response.send(nuMad);
    }
});

app.get('/', (request, response) =>{
    response.send("go somewhere so I can do something.");

});

server.listen(PORT, () =>{
    console.log(`listening on ${PORT}`);
});