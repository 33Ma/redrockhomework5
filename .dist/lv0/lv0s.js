const person = {
    name: '佐科姐姐',
    age: 1000000,
    address: {
        city: 'ChongQing',
        area: 'NanShan'
    },
    title: ['student', { year: 2022, title: 'GoodStudent' }]
};

const { name, age: year, address: { city, area }, title: [title1, title2] } = person;

console.log(name); // 佐科姐姐
console.log(year); // 1000000
console.log(city); // ChongQing
console.log(area); // NanShan
console.log(title1); // student
console.log(title2); // GoodStudent