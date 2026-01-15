function promiseTimeout(ms) {
    return new promise ((resolve, rejiect) => {
        setTimeout (resolve,ms);
});
} 
async function longg() {
    return 42;
}
async function run (){
    console.log("srart");
    await promiseTimeout(2000);
    const result = await longg();
    console.log(Response);

    console.log ("stop");
}

run ();