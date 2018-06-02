var arr = [];
for (var i = 0; i <= 100; i++) {
    arr.push(/3/.test(i) || i % 3 === 0 ? 'PA' : i) //当含有3或者为3的倍数时，用PA替换  
}
console.log(arr.join(','));