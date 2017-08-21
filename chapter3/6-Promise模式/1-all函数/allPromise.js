// 假设你想要同时发送两个Ajax请求，等她们不管以什么顺序完成之后，
// 再发送第三个Ajax请求。 这个例子非常的经典。已经有两个面试官问到了。

//  Request 是一个Promie-aware Ajax 工具
//  就像我们在本章中前面定义的一样

var p1 = request("http://some.url.1/");
var p2 = request("http://some.url.2/");

Promise.all([p1, p2])
.then( function(msgs){
     return request(
         "http://some.url.3/?v=" + msgs.join(",")
     );
})
.then( function(msg){
    console.log(msg)
})
.catch( function(error){
   console.log(error);
})
.done( null, handleErrors);

//  Promise.all  需要一个参数， 是一个数组， 通常由Promsie实例组成.
//  严格来说，传给Promise.all 的数组中的值可以是 Promise，thenable， 甚至是立即值。

//  注意，从promise.all 返回的主Promise在且仅当所有的成员Promise都完成后
//  才会完成。
//  如果这些Promise中有任何一个被拒绝的话，返回主Promise就会立即被拒绝，并且丢弃
//  来自其他所有Promise的全部结果。
