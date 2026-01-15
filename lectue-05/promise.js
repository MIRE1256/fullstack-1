const promise = new Promise ((resolve, rejiect) => {
    const res = true;
    if (res) {
        resolve("Resolved!");
     }else {
        rejiect(Error("fatal Error"));
     }
});

promise.then(
    (res) => console.log(res),
    (err)=> console.log(err)

);