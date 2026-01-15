function promiseTimeout(ms) {
    return new promise ((resolve, rejiect) => {
        setTimeout (resolve,ms);
});
}
async function run (){
    console.log("srart");
    await promiseTimeout(2000);
    console.log ("stop");
}

console.log("befon run()");
run()
console.log("after run()");