const mongoose = require('mongoose');
const dbURI = 'mongodb://localhost/wifihotspot';
if(process.env.NODE_ENV === 'production'){
    dbURI=process.env.MONGODB_URI;
}

//you can also create a new connection
/*
const dbURILog = 'mongodb://localhost/wifihotspot_auditlog';
const auditLog = mongoose.createConnection(dbURILog)

auditLog.on('connected', () =>{
    console.loh(`Mongoose connected to ${dbURILog}`);
});
auditLog.close( () =>{
    console.log('Mongoose log disconnected');
});
*/
mongoose.connect(dbURI, {useNewUrlParser: true});
mongoose.connection.on('connected', () => {
    console.log(`Mongoose connected to ${dbURI}`);
});
mongoose.connection.on('error', (err) => {
    console.log(`Mongoose connection error: ${err}`)
});
mongoose.connection.on('disconnected', () => {
    mongoose.connection.close((){
        console.log(`Mongoose disconnected`);
    });
    
});

const gracefulShutdown = (msg, callback) => {
    console.log(`Mongoose disconnected through ${msg}`);
    callback();
};

//for nodemon restart
process.once('SIGUSR2', () => {
    gracefulShutdown('nodemon restarted', () =>{
        process.exit(0);
    });
});


require('./locations');