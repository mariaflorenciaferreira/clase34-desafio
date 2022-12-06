
const express = require("express");
const path = require("path");
const cluster = require("cluster");
const os = require("os");
const parseArgs = require ("minimist");
const app = require('./index');

const options= {default:{port:8080},alias:{p:"port", m:"modo"}};

const PORT=process.env.PORT 
const MODO = parseArgs(process.argv,options).modo;

require('./src/DB/connect-mongo');

console.log(PORT)
console.log(MODO)




if (MODO == "cluster") {

    const numCPUs = os.cpus().length

    if (cluster.isMaster) {
        console.log(`Number of CPUs is ${numCPUs}`);
        console.log(`Master ${process.pid} is running`);

        // Fork workers.
        for (let i = 0; i < numCPUs; i++) {
            cluster.fork();
        }

        cluster.on("exit", (worker, code, signal) => {
            console.log(`worker ${worker.process.pid} died`);
            console.log("Let's fork another worker!");
            cluster.fork();
        });
    } else {
        const app = express();
        console.log(`Worker ${process.pid} started`);

        app.get("/", (req, res) => {
            res.send("Hello World!");
        });

        

        app.listen(PORT, () => {
            console.log(`App listening on port ${PORT}`);
        });
    }

} else {

    console.log(`Ejecutando fork`)
    app.listen(PORT, () => console.log(`running on port ${PORT.p} + ${MODO} `));

}






