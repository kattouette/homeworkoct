const students = [
    { name: "Matt", grade: 78, active: true },
    { name: "Chelsea", grade: 50, active: true },
    { name: "Maria", grade: 85, active: false },
    { name: "Jeremy", grade: 90, active: true },
    { name: "Liam", grade: 86, active: false }
];

const passedStudents = students.filter(function(student) {
    return student.active === true && student.grade >= 70;
}).map(function(student) {
    return student.name;
});

console.log(passedStudents);

let sum = 0;
for (let i = 0; i < students.length; i++) {
    sum = sum + students[i].grade;
}
let average = sum / students.length;

console.log(average);

const products = [
    { title: "Ноутбук Lenovo", price: 30000, discount: 10, category: "Електроніка" },
    { title: "Смартфон Samsung", price: 15000, discount: 15, category: "Електроніка" },
    { title: "Навушники Apple", price: 4000, discount: null, category: "Аксесуари" },
];
const getProductSummary = (product) => {
    let finalPrice = product.price;

    if (product.discount != null) {
        finalPrice = product.price - (product.price * product.discount / 100);
    }

    return `Товар: ${product.title} | Категорія: ${product.category ?? "Общая"} | Ціна: ${finalPrice} грн`;
};

products.forEach(product => {
    console.log(getProductSummary(product));
});