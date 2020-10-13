var split = require('split-json')
const fs = require('fs');
const request = require('request');
var s = 'ff';
request({
    url : 'https://www.zaubacorp.com/companysearchresults/' +s,
    json : true
}, (err, response, body) => {

   fs.writeFile('./blog.txt', body, () => {
        console.log('file was written');
      });
    //console.log(body);
});

