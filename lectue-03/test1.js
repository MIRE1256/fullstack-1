const furniture = ['teble','chairs','couch'];

for (let i = 0; i<furniture.length; i++) {
    console.log(furniture[i]);
}

for (let item of furniture){
    for (let char of item){
        console.log(char);
    }
}