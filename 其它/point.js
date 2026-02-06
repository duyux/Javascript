class Point{
   constructor(x,y){
      this.x=x;
      this.y=y;
   }
   get xValue(){
      return this.x;
   }

   set xValue(value){
      this.x=value;
   }

   toString(){
      return '('+this.x+','+this.y+')';
   }


}


class ColorPoint extends Point {
   constructor(x,y,color){
      super(x,y);
      this.color=color;
   }
   toString(){
      return this.color+' '+super.toString();
   }
}

var cp=new ColorPoint(12,4,'green');
console.log(cp.toString())

console.log(Object.getPrototypeOf(ColorPoint));