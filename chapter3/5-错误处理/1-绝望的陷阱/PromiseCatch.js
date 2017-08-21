var p = Promise.resolve(42);

p.then( function fulfilled(msg){
    console.log(msg.toLowerCase());
})
.catch( handleErrors );

