var mime = require('mime-types');
var axios = require('axios');
var request = require('request');
var XMLHttpRequest = require('xhr2');
var http =new XMLHttpRequest();
// var fetch = require('fetch');
const url = 'https://www.data.boem.gov/';
var opt = {
    method: 'GET',
    cache: 'default'
}
// var r = await axios.get(url);
// const getdata = async() => {
//     try {
//         return await axios.head(url)
//       } catch (error) {
//         console.error(error)
//       }
// }
axios.get(url)
  .then(function(response){
    console.log(response.headers); // ex.: 200
  });

// var arr = mime.extensions['application/onenote']

// var res = fetch(url);

// var res = http.getAllResponseHeaders(url);
// console.log(res);
