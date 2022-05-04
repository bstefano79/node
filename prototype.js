//Le arrow function non vanno usate come metodi
var v=[1,2,3];
//v.myfunction();  output --> error v.myfunction is not a function

Array.prototype.f1 = function () {console.log(this); return 0;};
Array.prototype.f2 = () => {console.log(this); return 0;};

v.f1();
v.f2();

/*Array.prototype.myfunction = (f) => {
    this.map((x)=>f(x));
}*/