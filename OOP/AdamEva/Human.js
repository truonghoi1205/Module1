class Human {
    constructor(name, sex, weight) {
        this.name = name;
        this.sex = sex;
        this.weight = weight;
    }

    say(text) {
        console.log(text);
    }
    eat(apple){
        if (this.check(apple)) {
            this.weight++;
            apple.decrease();
        }
    }

    check(apple) {
        return apple.getWeight()>0;
    }
}

let n1 = new Human("Adam",true,60);
let n2=new Human("Eva",false,48);


