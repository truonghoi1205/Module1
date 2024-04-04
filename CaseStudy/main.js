let store = new ProductManager();

function display(arr) {
    let html = `

<table>
        <tr>
            <th>ID</th>
            <th>Tên sản phẩm</th>
            <th>Giá</th>
            <th>Hình ảnh</th>
            <th>Ngày khởi tạo</th>
            <th>Phân loại</th>
            <th></th>
        </tr>
        `
    for (let i = 0; i < arr.length; i++) {
        html += `
  <div>  <tr>
            <td class="sp">${arr[i].id}</td>
            <td class="ten">${arr[i].name}</td>
            <td class="sp">${arr[i].price}</td>
            <td class="sp"><img src="${arr[i].image}" alt=""></td>
            <td class="sp">${arr[i].date}</td>
            <td class="sp">${arr[i].category}</td>
            <td class="action">
            <button onclick="showFormUpdate(${arr[i].id})" class="btn_edit"><i class="fa-regular fa-pen-to-square" style="font-size: 18px"></i></button>
            <button onclick="remove(${arr[i].id})" class="btn_delete"> \<i class="fa-solid fa-trash" style="font-size: 18px"></i></button>
            </td>
        </tr>
         </div> 
    `
    }
    html += `</table>`

    document.getElementById('main').innerHTML = html;
}
//Hiển thị sản phẩm
function showAll() {
    let products = store.findAll();
    display(products)
    // document.getElementById('main').innerText = 'acbzx'
}

showAll();

function showFormAdd() {
    document.getElementById("main").innerHTML = `
 <div class="div_add">
    <input type="text" id="name" placeholder="Tên sản phẩm">
    <input type="text" id="price" placeholder="Giá">
    <br>
    <input type="text" id="image" placeholder="Hình ảnh">
    <br>
    <select id="option">
    <option>Nam</option>
    <option>Nữ</option>
    <option>Unisex</option>
</select>
<button onclick="add()" id="add">Thêm</button>
    </div>  
`
}

//Thêm SP
function add() {
    let id = store.nextId();
    let name = document.getElementById("name").value;
    let price = document.getElementById("price").value;
    let image = document.getElementById("image").value;
    let category = document.getElementById("option").value;
    let date = time()
    let newProduct = new Product(id, name, price, image, date, category);
    if (name === '') {
       return  alert('vui lòng thêm sp')
    }   else {
       store.add(newProduct);
       showAll();
    }
}

//Xóa sp
function remove(id) {
    let isConfirm = confirm("Bạn chắc chứ?")

    if (isConfirm) {
        store.remove(id);
    }
    showAll();
}
//xem lại mục sửa sản phẩm
function showFormUpdate(id) {
    let oldProduct = store.findProductById(id);
    document.getElementById("main").innerHTML = `
<div class="div_edit">
    <input type="number" id="id" placeholder="ID" value="${oldProduct.id}" readonly>
    <input type="text" id="name" placeholder="Tên" value="${oldProduct.name}">
    <input type="text" id="price" placeholder="Giá" value="${oldProduct.price}">
    <select id="option" value="${oldProduct.category}">
    <option>Nam</option>
    <option>Nữ</option>
    <option>Unisex</option>
</select>
    <button onclick="update()" class="btn_update">Cập nhật</button> 
    <br>
    <input type="text" id="image" placeholder="Ảnh" value="${oldProduct.image}">
    <br>
     <img src="${oldProduct.image}" alt="">
    </div>
`
}
// Sửa sản phẩm
function update() {
    let id = +document.getElementById("id").value;
    let name = document.getElementById("name").value;
    let price = document.getElementById("price").value;
    let image = document.getElementById("image").value;
    let date = time()
    let category = document.getElementById("option").value;
    let newProduct = new Product(id, name, price, image, date, category);
    store.update(id, newProduct);
    showAll();
}

// localStorage.setItem("list", JSON.stringify([]));
//JSON.stringify giúp tạo ra 1 chuỗi "[]"

// Tìm sản phẩm
function searchProduct() {
    let name = document.getElementById("search").value;
    let arr = store.searchProductByName(name);
   display(arr);
}
//tìm ngày tháng năm
function time() {
    let date = new Date();
    if(date.getMonth() < 10) {
        return  lich = `${date.getDate()}/0${  date.getMonth() + 1}/${date.getFullYear()}`;
    } else {
        return lich = `${date.getDate()}/${  date.getMonth() + 1}/${date.getFullYear()}`;
    }
}
//tìm theo phân loại
function findProduct(e) {
    let category = e.target.dataset.category;
    let arr = store.searchProductByCategory(category);
     display(arr);

}
