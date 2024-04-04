class Rectangle {
    length;
    width;

    constructor(lengthInpput, widthInput) {
        this.length = lengthInpput;
        this.width = widthInput;
    }

    getS() {
        let S = this.length*this.width
        return S;
    }

    getC() {
        let C = (this.length+this.width)/2
        return C;
    }
    draw(d,r) {
        let canvas = document.getElementById("myCanvas");
        let hcn = canvas.getContext("2d")
        hcn.fillStyle='#fa4b2a';
        hcn.fillRect(d, r, this.width, this.length)
    }
}

let Rectangle1 = new Rectangle(5,1);
document.write(`<br>chiều dài: ${Rectangle1.length}, Chiều rộng: ${Rectangle1.width}, diện tích: ${Rectangle1.getS()}, chu vi: ${Rectangle1.getC()}`)

Rectangle1.length = 200;
Rectangle1.width = 400;
document.write(`<br>chiều dài: ${Rectangle1.length}, Chiều rộng: ${Rectangle1.width}, diện tích: ${Rectangle1.getS()}, chu vi: ${Rectangle1.getC()}`)

Rectangle1.draw(100,50)