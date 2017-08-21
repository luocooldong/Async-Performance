//  但是有时候你会想只需要 第一个跨过终点线的Promise，而抛弃其他的
var p1 = request("http://some.url.1/");
var p2 = request("http://some.url.2/");

Promise.race( [p1, p2])
.then( function(msg){
    // p1 或者 p2 将赢得这场竞赛
    return request(
        "http://some.url.3/" + msg
    );
})
.then( function(msg){
    console.log(msg);
});

//  一旦有任何一个Promise决议完成， Promise.race就会完成
//  一旦有任何一个Promise决议失败， Promise.race就会拒绝

//  因为只有一个Promise能够取胜， 所以完成值是单个消息，
//  而不是像对Promise.all那样的是一个属组。