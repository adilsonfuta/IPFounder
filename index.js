const rq=require('request');

let urlbase='http://ip-api.com/json';
let dados='';

rq(urlbase, function (err, response, body) {
    if(err){
        console.log('Error:',err);
    }else{
        let ipInfo=JSON.parse(body);
        dados = `
        — — — — — Localização — — — — — 
        — — — — — — — — — — — — — — — -
        IP: ${ipInfo.query}
        País: ${ipInfo.country}
        Cidade: ${ipInfo.city}
        Região: ${ipInfo.regionName}
        Lat: ${ipInfo.lat}
        Lon: ${ipInfo.lon}
        Organização: ${ipInfo.org}
         — — — — — — — — — — — — — — — -
`
        console.log(dados);
    }


    const http = require('http');
    var server = http.createServer(function(req, res) {
        res.writeHead(200);
        res.write(dados);
               res.end();
       });server.listen(8001, () => {
               console.log("Server is running on http://localhost:8001");
       });
})