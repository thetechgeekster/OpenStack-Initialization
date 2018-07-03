// hostname
// cpu arch & 
// memory (ram)
const os = require('os');

const SERVER_PORT = 4000;

function get_system_info(){
    const arch = os.arch();
    const platform = os.platform();
    const cpus = os.cpus();
    const hostname = os.hostname();
    const ram_in_bytes = os.totalmem();
    const ram_in_kbytes = ram_in_bytes / 1024;
    const ram_in_mbytes = ram_in_kbytes / 1024;
    const ram_in_gbytes = ram_in_mbytes / 1024;
    const cpu = cpus[0];
    const num_of_cpus = cpus.length;
    return {
        arch,
        platform,
        hostname,
        ram_in_gbytes:ram_in_gbytes.toFixed(2),
        cpu,
        num_of_cpus
    }
}


const http = require('http');
const server = http.createServer((request,response)=>{
    //Need to tell the client that we are sending a json
    response.setHeader( 'Content-Type', 'application/json' );
    //We need to convert the json in to string first 
    const responseData = JSON.stringify(get_system_info());
    //Send the jsn back to the client
    response.end(responseData);
});

server.listen(SERVER_PORT,(error)=>{
    if(error){
        console.log('Failed to start server',error);
    }else{
        console.log('You did it .Access server on localhost:'+SERVER_PORT);
    }
})