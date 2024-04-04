class mobile {
    constructor(name) {
        this.name = name;//tên đt
        this.battery = 100;// pin
        this.draft = "";//tin nhắn nháp
        this.inbox = [];//tin nhắn đến
        this.outbox = [];// tin nhắn đã gửi
        this.status = true;//kiểm tra đt
    }

    checkStatus() {
        if (this.battery > 0) {
            return this.status;
        }
    }

    onOff() {
        this.battery--;
        return this.status = !this.status;
    }

    writingMessage(text) {
        this.battery--;
        this.draft = text;
    }

    sendMessage(phone) {
        if (this.status) {
            //this: điện thoại hiện tại
            //phone: là điện thoại gửi sang
            //B1: chuyển tin nhắn nháp của this sang hộp thư đến phone
            phone.inbox.push(this.draft);
            //B2: chuyển tin nhắn nháp của this vào hộp thư đã gửi của this
            this.outbox.push(this.draft);
            //B3: xóa tin nhắn nháp
            this.draft = '';
            this.battery--;
        }
    }

    getInbox() {
        if (this.status) {
            this.battery--;
            return this.inbox;
        }
    }

    getOutbox() {
        if (this.status) {
            this.battery--;
            return this.outbox;
        }
    }
}

let iPhone1 = new mobile("iPhone 5")
let iPhone2 = new mobile("iPhone 13")

function sendMessIp13() {
    //lấy dữ liệu
    let mess1 = document.getElementById("mess1").value;
    //gán vào thư nháp
    iPhone1.writingMessage(mess1);
    //gửi tn cho ip13
    iPhone1.sendMessage(iPhone2);
    //hiển thị tn trong hộp thư đến
    let inbox1 = iPhone2.inbox.join('/');
    document.getElementById("ib2").innerText = inbox1;
    //hiển thị tn trong hộp thư đã gửi
    let send1 = iPhone1.inbox.join(' ')
    document.getElementById("send1").innerText = inbox1;
}

function sendMessIp5() {
    let mess2 = document.getElementById("mess2").value;
    iPhone2.writingMessage(mess2);
    iPhone2.sendMessage(iPhone1);
    let inbox2 = iPhone1.inbox.join('/');
    document.getElementById("ib1").innerText = inbox2;
    document.getElementById("send2").innerText = inbox2;
}