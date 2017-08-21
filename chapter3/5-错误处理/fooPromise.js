function foo(){
    setTimeout( function(){
        baz.bar();
    }, 100);
}

try {
    foo();
     // 后面从baz.bar抛出全局错误
} catch (error) {
    // 永远不会到达这里
}

