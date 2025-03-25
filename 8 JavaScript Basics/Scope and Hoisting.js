function testScope(){
    var a = 10;
    let b = 20;
    const c = 30;


    if (true){
        var a = 50;
        let b = 60;
        const c = 70;
        console.log(a,b,c);  //50,60,70
    }
    console.log(a,b,c);   //50,20,30
}
testScope();

//  Hoisting Example
console.log(hoistedvar);
var hoistedvar = 10;

console.log(notHoistedvar);
let notHoistedvar = 20;
