const http = require('http'),
      fs = require('fs');

const handler = (request, response) => {
        
          fs.readFile('/ect/config/env.Name','UTF-8', (err, fileData) => {

                if(err){
                    console.log(err);
                    return;
                }
                else {
                    response.writeHead(200,{"Content-Type": "text/html"});
                    response.write("'ApplicationName' (from env variable): " + process.env.AppliationName + '<br>');
                    response.write("'EnvironmentName' (from volume): "+ fileData);
                }
         });   
}