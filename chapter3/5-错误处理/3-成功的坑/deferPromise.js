var p = Promise.reject('Oops').defer();

foo(42)
.then( function fulfilled(){
   return p;
}, function rejected(){
   
});