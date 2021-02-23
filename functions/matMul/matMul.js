//##################Random Matrix multiplication in nodesjs as part of Runtime benchmarking experiments for CVCG DRD PAE CCE FaaS framework ###############


const  math = require('mathjs');
//var a = nj.random([2,2]);
//var b = nj.int32(a);
//function matMul(m1,m2){

//console.log(result);
//return result

//}

function matMul(args) {

//get dimensions of matrix
var dim = args.dim || 3000


var matrix1 = math.randomInt([dim,dim],0,100000000)
var matrix2 = math.randomInt([dim,dim],0,100000000)

//var result = math.dotMultiply(m1,m2)
var result = math.dotMultiply(matrix1,matrix2)
var res = result[dim-2].toString()
console.log(result)

return {result: res}
}


exports.main = matMul;

