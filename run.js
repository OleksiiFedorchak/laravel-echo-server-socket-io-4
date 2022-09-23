const cluster = require('cluster');
const echoServer = require('./dist/index.js');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({path: path.join(__dirname, '.env')});

const env = process.env;

if (cluster.isMaster) {
    console.log(`Primary ${process.pid} is running`);

    // Fork workers.
    for (let i = 0; i < env.NUM_PROCESSES; i++) {
        cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`worker ${worker.process.pid} died`);
    });
} else {
    echoServer.run({
        port: env.PORT,
        authHost: env.APP_URL,
        devMode: env.APP_DEBUG,
        database: "redis",
        databaseConfig: {
            redis: {
                host: env.REDIS_HOST,
                port: env.REDIS_PORT,
            }
        },
        protocol: env.PROTOCOL,
        sslCertPath: env.SSL_CERT_PATH,
        sslKeyPath: env.SSL_KEY_PATH,
        clients: [{
            appId: env.APP_ID,
            key: env.APP_KEY
        }]
    });
}
