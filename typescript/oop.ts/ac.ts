class Pointer{
constructor(private x:number,private y:number){

}
draw()
{
    console.log('X:'+this.x,'Y:'+this.y);
}
get X(){

return this.x;
}
set X(value){
    if(value<0)
    throw new Error('value shoud not less than 0');

point.x=value;
}
}
// let point:Point=new Point(1,2);
 //let x=point.X;
 point.X=10;

