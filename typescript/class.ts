let Engine = function(){
    return{
        bhp: 1000,
        oilcool:true ,

    }
}();
let Car = function(eng){
    console.log(`Bhp-${eng.bhp}, Oilcool-${eng.oilcool}`)

}(Engine);
