var p = Promise.resolve(21);

p.then( function(v){
    console.log(v);
    return new Promise( function(resolve, reject){
        setTimeout( function(){
             resolve(v*2);
        }, 4000);
    });
})
.then( function(v){
    console.log(v);
});