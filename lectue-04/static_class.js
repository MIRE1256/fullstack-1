class Dog {
    constructor(name){
        this._name = name ;
    }

    introduce(){
        console.log("this is" + this._name + " !");
    }

    static bark() {
        console.log("woof!!");
    }
}

const myDog = new Dog ("buster");
myDog.introduce();
Dog.bark();