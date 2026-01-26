
// Bài tập: Quản lý Sản phẩm - Constructor Function & Array Methods
// Câu 1: Khai báo constructor function Product
function Product(id, name, price, quantity, category, isAvailable) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.category = category;
    this.isAvailable = isAvailable;
}

function runAllExercises() {
    // Câu 2: Khởi tạo mảng products
    const products = [
        new Product('P001', 'iPhone 15 Pro', 25000000, 10, 'Electronics', true),
        new Product('P002', 'Samsung Galaxy S24', 22000000, 5, 'Electronics', true),
        new Product('P003', 'Tai nghe AirPods Pro', 5000000, 20, 'Accessories', true),
        new Product('P004', 'Ốp lưng iPhone', 500000, 0, 'Accessories', false),
        new Product('P005', 'MacBook Pro M3', 45000000, 3, 'Electronics', true),
        new Product('P006', 'Bàn phím cơ', 3500000, 15, 'Accessories', true),
        new Product('P007', 'Chuột không dây', 1200000, 8, 'Accessories', true),
        new Product('P008', 'Laptop Dell', 18000000, 0, 'Electronics', false)
    ];

    console.log('=== CÂU 2: Mảng products đã khởi tạo ===');
    console.log('Số lượng sản phẩm:', products.length);
    console.log('Danh mục:', [...new Set(products.map(p => p.category))]);
    console.log('');

    // Câu 3: Tạo mảng mới chỉ chứa name và price
    const productNamePrice = products.map(product => ({
        name: product.name,
        price: product.price
    }));

    console.log('=== CÂU 3: Mảng chứa name và price ===');
    console.log(productNamePrice);
    console.log('');

    // Câu 4: Lọc các sản phẩm còn hàng (quantity > 0)
    const productsInStock = products.filter(product => product.quantity > 0);

    console.log('=== CÂU 4: Sản phẩm còn hàng (quantity > 0) ===');
    console.log(productsInStock);
    console.log('Số lượng:', productsInStock.length);
    console.log('');

    // Câu 5: Kiểm tra có ít nhất một sản phẩm giá > 30.000.000
    const hasExpensiveProduct = products.some(product => product.price > 30000000);

    console.log('=== CÂU 5: Có sản phẩm giá > 30.000.000? ===');
    console.log(hasExpensiveProduct ? 'Có' : 'Không');
    if (hasExpensiveProduct) {
        const expensiveProducts = products.filter(p => p.price > 30000000);
        console.log('Sản phẩm:', expensiveProducts.map(p => p.name).join(', '));
    }
    console.log('');

    // Câu 6: Kiểm tra tất cả sản phẩm "Accessories" có isAvailable = true
    const accessoriesProducts = products.filter(p => p.category === 'Accessories');
    const allAccessoriesAvailable = accessoriesProducts.length > 0 && 
        accessoriesProducts.every(product => product.isAvailable === true);

    console.log('=== CÂU 6: Tất cả sản phẩm Accessories đang bán? ===');
    console.log(allAccessoriesAvailable ? 'Có' : 'Không');
    console.log('Danh sách sản phẩm Accessories:');
    accessoriesProducts.forEach(p => {
        console.log(`  - ${p.name}: isAvailable = ${p.isAvailable}`);
    });
    console.log('');

    // Câu 7: Tính tổng giá trị kho hàng (price * quantity)
    const totalInventoryValue = products.reduce((total, product) => {
        return total + (product.price * product.quantity);
    }, 0);

    console.log('=== CÂU 7: Tổng giá trị kho hàng ===');
    console.log('Tổng giá trị:', totalInventoryValue.toLocaleString('vi-VN'), 'VNĐ');
    console.log('');

    // Câu 8: Dùng for...of để in: Tên - Danh mục - Trạng thái
    console.log('=== CÂU 8: Duyệt mảng bằng for...of ===');
    for (const product of products) {
        const status = product.isAvailable ? 'Đang bán' : 'Ngừng bán';
        console.log(`${product.name} - ${product.category} - ${status}`);
    }
    console.log('');

    // Câu 9: Dùng for...in để in tên thuộc tính và giá trị
    console.log('=== CÂU 9: Duyệt đối tượng bằng for...in ===');
    const firstProduct = products[0];
    console.log('Sản phẩm đầu tiên:');
    for (const key in firstProduct) {
        console.log(`  ${key}: ${firstProduct[key]}`);
    }
    console.log('');

    // Câu 10: Lấy danh sách tên sản phẩm đang bán và còn hàng
    const availableInStockProducts = products
        .filter(product => product.isAvailable === true && product.quantity > 0)
        .map(product => product.name);

    console.log('=== CÂU 10: Sản phẩm đang bán và còn hàng ===');
    console.log('Danh sách tên sản phẩm:');
    availableInStockProducts.forEach((name, index) => {
        console.log(`  ${index + 1}. ${name}`);
    });
    console.log('Tổng số:', availableInStockProducts.length);
}

if (typeof window === 'undefined') {
    runAllExercises();
}
