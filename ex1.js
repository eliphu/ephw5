class square{
    constructor(s1) {
        this.side = s1;
        this.per;
        this.a;
        this.d;
    }
    perimeter(){
        this.per = 4 * this.side;
        return this.per;
    }
    area(){
        this.a = this.side * this.side;
        return this.a;
    }
    diagonal(){
        this.d = Math.pow(2, .5) * Math.pow(this.side, 2);
        return this.d;
    }
    describe(){
        this.per = this.perimeter();
        this.a = this.side * this.side;
        this.d = Math.pow(2, .5) * Math.pow(this.side, 2);
        return 'Square with side ' + this.side + ' has perimeter of ' + this.per + ', area of ' +this.a+ ', and diagonal of ' + this.d;
    }
}
boop = new square(Number(prompt("Enter a side for boop")));
beep = new square(Number(prompt("Enter a side for beep")));
blip = new square(Number(prompt("Enter a side for blip")));
console.log("Boop: " + boop.describe());
console.log("Beep: " + beep.describe());
console.log("Blip: " + blip.describe());