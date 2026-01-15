function Who() {
    return new promise((resolve) => {
        setTimeout (() => {
            resolve("🤷‍♂️");
        }, 200);
    });
}

function What() {
    return new promise((resolve) => {
        setTimeout (() => {
            resolve("lurks");
        }, 300);
    });
}

function Where() {
    return new promise((resolve) => {
        setTimeout (() => {
            resolve("in the shsdoes");
        }, 500);
    });
}

async function msg (){
    const a = await Who();
    const b = await What();
    const c = await Where();

    console.log ('${a}  ${b}  ${c}');
}
console.log (' we are lookoing for:')
msg();
console.log ('hello')

