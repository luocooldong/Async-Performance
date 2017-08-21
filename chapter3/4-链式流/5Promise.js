function delay(time){
    return new Promise( function(resolve, reject){
        setTimeout(resolve, time);
    });
}

delay(100)
.then(function STEP2(){
    console.log("Step 2 (After 100ms)");
    return delay(200);
})
.then( function STEP3(){
    console.log("STEP 3 (after another 200ms)");

})
.then( function STEP4(){
    console.log("STEP 4 (Next JOB)");
    return delay(50);
})
.then( function STEP5(){
    console.log("Step 5 (after another 50ms)");
});


