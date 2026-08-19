const products = [
    {
        id: 1,
        name: "Laptop",
        price: 2000,
        category: "electronics",
        amount: 20
    },
    {
        id: 2,
        name: "Phone",
        price: 1000,
        category: "electronics",
        amount: 2
    },
    {
        id: 3,
        name: "Book",
        price: 20,
        category: "book",
        amount: 10
    },
    {
        id: 4,
        name: "Keyboard",
        price: 100,
        category: "electronics",
        amount: 0
    },
    {
        id: 5,
        name: "Mouse",
        price: 50,
        category: "accessory",
        amount: 15
    }
];


// ==================================================
// 1. HIỂN THỊ TẤT CẢ SẢN PHẨM
// ==================================================

console.log("===== DANH SÁCH SẢN PHẨM =====");

for (const product of products) {
    console.log(
        `ID: ${product.id} | ${product.name} | $${product.price} | ${product.category} | Số lượng: ${product.amount}`
    );
}


// ==================================================
// 2. HIỂN THỊ SẢN PHẨM CÒN HÀNG
// ==================================================

console.log("\n===== SẢN PHẨM CÒN HÀNG =====");

for (const product of products) {
    if (product.amount > 0) {
        console.log(product.name);
    }
}


// ==================================================
// 3. HIỂN THỊ SẢN PHẨM HẾT HÀNG
// ==================================================

console.log("\n===== SẢN PHẨM HẾT HÀNG =====");

for (const product of products) {
    if (product.amount === 0) {
        console.log(product.name);
    }
}


// ==================================================
// 4. TÍNH TỔNG SỐ LƯỢNG SẢN PHẨM
// ==================================================

let totalAmount = 0;

for (const product of products) {
    totalAmount += product.amount;
}


// ==================================================
// 5. TÍNH TỔNG GIÁ TRỊ KHO HÀNG
// ==================================================

let totalValue = 0;

for (const product of products) {
    totalValue += product.price * product.amount;
}


// ==================================================
// 6. TÍNH GIÁ TRUNG BÌNH
// ==================================================

let totalPrice = 0;

for (const product of products) {
    totalPrice += product.price;
}

const averagePrice = totalPrice / products.length;


// Hiển thị thống kê
console.log("\n===== THỐNG KÊ =====");

console.log(`Tổng số lượng: ${totalAmount}`);
console.log(`Tổng giá trị kho: ${totalValue}`);
console.log(`Giá trung bình: ${averagePrice}`);


// ==================================================
// 7. TÌM SẢN PHẨM CÓ GIÁ CAO NHẤT
// ==================================================

let mostExpensive = products[0];

for (const product of products) {
    if (product.price > mostExpensive.price) {
        mostExpensive = product;
    }
}

console.log("\n===== SẢN PHẨM ĐẮT NHẤT =====");

console.log(
    `${mostExpensive.name} - $${mostExpensive.price}`
);


// ==================================================
// 8. TÌM SẢN PHẨM CÓ SỐ LƯỢNG LỚN NHẤT
// ==================================================

let mostAmount = products[0];

for (const product of products) {
    if (product.amount > mostAmount.amount) {
        mostAmount = product;
    }
}

console.log("\n===== SẢN PHẨM CÓ SỐ LƯỢNG LỚN NHẤT =====");

console.log(
    `${mostAmount.name} - ${mostAmount.amount} sản phẩm`
);


// ==================================================
// 9. TÌM SẢN PHẨM CÓ ID = 3
// ==================================================

const searchId = 3;

console.log("\n===== TÌM THEO ID =====");

for (const product of products) {
    if (product.id === searchId) {
        console.log(
            `${product.name} - $${product.price} - ${product.category} - ${product.amount}`
        );
    }
}


// ==================================================
// 10. TÌM SẢN PHẨM THEO CATEGORY
// ==================================================

const category = "electronics";

console.log("\n===== ELECTRONICS =====");

for (const product of products) {
    if (product.category === category) {
        console.log(product.name);
    }
}


// ==================================================
// 11. ĐẾM SỐ LƯỢNG SẢN PHẨM THEO CATEGORY
// ==================================================

let electronics = 0;
let book = 0;
let accessory = 0;

for (const product of products) {

    if (product.category === "electronics") {
        electronics++;

    } else if (product.category === "book") {
        book++;

    } else if (product.category === "accessory") {
        accessory++;
    }
}

console.log("\n===== THỐNG KÊ CATEGORY =====");

console.log(`Electronics: ${electronics}`);
console.log(`Book: ${book}`);
console.log(`Accessory: ${accessory}`);


// ==================================================
// 12. PHÂN LOẠI SẢN PHẨM THEO GIÁ
// ==================================================

console.log("\n===== PHÂN LOẠI =====");

for (const product of products) {

    let level;

    if (product.price >= 1000) {
        level = "Cao cấp";

    } else if (product.price >= 100) {
        level = "Trung bình";

    } else {
        level = "Giá rẻ";
    }

    console.log(`${product.name} → ${level}`);
}