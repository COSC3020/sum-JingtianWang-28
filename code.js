function sum(a) {
    if (!Array.isArray(a)) return 0;
    let sum = 0; 
    for (let i = 0; i < a.length; i++) {
        if (typeof a[i] !== "number") return 0;
        sum += a[i];
    }
    return sum;
}
console.log(sum([1, 2, 3])); 
