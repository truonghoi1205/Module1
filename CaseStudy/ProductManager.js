class ProductManager {

    constructor() {
        this.list = JSON.parse(localStorage.getItem("list"));
    }

    findAll() {
        return this.list;
    }

    add(newProduct) {
            this.list.push(newProduct);
            localStorage.setItem("list", JSON.stringify(this.list));
    }

    nextId() {
        if(this.list.length === 0) {
            return 1;
        }
        let min = this.list[0].id;
        let max;
        for (let i = 0; i < this.list.length; i++) {
            if (min > this.list[i].id) {
                min = this.list[i].id;
            }
        }
        max = min;
        for(let i = 0; i < this.list.length; i++) {
            if(max < this.list[i].id) {
                max = this.list[i].id
            }
        }
        return Number(max) + 1;
    }

    remove(id) {
            let index = this.findIndexById(id);
            this.list.splice(index, 1);
            localStorage.setItem("list", JSON.stringify(this.list));
    }

//Tìm ID theo vị trí Index
    findIndexById(id) {
        for (let i = 0; i < this.list.length; i++) {

            if (id === this.list[i].id) {
                return i;
            }
        }
        return -1;
    }

    findProductById(id) {
        let index = this.findIndexById(id);
        let product = this.list[index];
        return product;
    }

//Tìm sản phẩm theo tên
    searchProductByName(name) {
        let result = [];
        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i].name.toLowerCase().includes(name.toLowerCase())) { //includes hàm tìm kiếm chuỗi
                result.push(this.list[i])
            }
        }
        return result;
    }

    update(id, newProduct) { // sửa sản phẩm nào và thay bằng sản phẩm nào
        let index = this.findIndexById(id);
        this.list[index] = newProduct;
        localStorage.setItem("list", JSON.stringify(this.list));
    }

    searchProductByCategory(category) {
        let result = [];
        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i].category.includes(category)) {
                result.push(this.list[i])
            }
        }
        return result;
    }
}
