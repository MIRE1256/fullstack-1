const message = "Hello World!";

for (let char of message) {
    if ('aeiouAEIOU'.includes(char)) {
        console.log(char);
    }
}
