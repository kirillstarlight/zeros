module.exports = function getZerosCount(number) {
  let counter = 0;
  while (number>=5){
  	counter+=Math.floor(number/5);
  	number=Math.floor(number/5);	
  }
  return counter;
}
