var p = new Promise((resolve, reject) => {
    foo.bar();
    resolve(42);
});

p.then(
    function fulfilled(){
        console.log("Smile");
    },
    function rejected(err){
        // 注意, err将会是一个TypeError 异常对象，来自foo.bar() 这一行
        console.log(err);

    }
);