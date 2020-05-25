var fs=require('fs');
fs.readFile('appdata.json',
    function(err, data) { 
        var jsonParsed = JSON.parse(data);
        var output=[];
        console.log("********Input Json********")
        console.log(jsonParsed);
        jsonParsed.forEach(element => {
          var innerJson=element;
            for(var prop in innerJson) {
                output.push(innerJson[prop]); 
              }
        });
        console.log(output);  
});