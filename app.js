slowMath.add(6 , 2)
.then((add) => {
    console.log(`${add}`)
    return slowMath.multiply(add , 2);
}).then ((multiply) => {
    console.log(`${multiply}`)
    return slowMath.divide(multiply , 4);
}).then ((divide) => {
    console.log(`${divide}`)
    return slowMath.subtract(divide , 3);
}).then ((subtract) => {
    console.log(`${subtract}`)
    return slowMath.add(subtract , 98);
}).then ((add) => {
    console.log(`${add}`)
    return slowMath.remainder(add , 2);
}).then ((remainder) => {
    console.log(`${remainder}`)
    return slowMath.multiply(remainder , 50);
}).then ((multiply) => {
    console.log(`${multiply}`)
    return slowMath.remainder(multiply , 40);
}).then ((remainder) => {
    console.log(`${remainder}`)
    return slowMath.add(remainder , 32);
}).then ((add) => {
    console.log(`The final result is: ${add}`)
}).catch((err) => {
    console.log(err);
});







