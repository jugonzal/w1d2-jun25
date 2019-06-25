// collect a bunch of numbers
// add them up
// display final result

let input = process.argv.slice(2);
let total = 0;

for (i = 0; i < input.length; i++) {
  console.log("i: ",i, parseInt(input[i]));
  total = total + parseInt(input[i]);
  console.log("total: ", total);
}

console.log("Result: ", total)