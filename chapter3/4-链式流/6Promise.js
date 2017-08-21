function request(url){
     return new Promise( function(resolve, reject){
         ajax(url, resolve);
     });
}

request('http://some.url.1/')
.then( function(response1){
    return request('http://some.url.2/')
})
.then( function(response2){
    console.log(response2);
});

