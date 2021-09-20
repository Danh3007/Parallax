products = [
    {name: "Abc dâdad", price: 10},
    {name: "cba", price: 5},
    {name: "bac", price: 3},
    {name: "bca", price: 2},
    {name: "cab", price: 1},
    {name: "acb", price: 60},
]

function compare(a,b) {
    if (a.name > b.name) {
        return 1
    }
    if (a.name < b.name) {
        return -1
    }
    return 0
}

console.log(products.sort(compare));
console.log(products[0].name.replace(/\s/g, '').toUpperCase());