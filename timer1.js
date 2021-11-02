const argArray = process.argv.slice(2); 
//console.log(argArray);
/*
No numbers are provided: Easy. It should just not beep at all and end immediately since no beeps should get scheduled.
An input is a negative number: Ignore/skip any numbers that are negative. We can't schedule anything in the past.
An input is not a number: Ignore/skip these as well, instead of attempting to call setTimeout with a non-number.
*/
// convert output from argArr to number
const argNums = argArray.map (elm => Number(elm));
//console.log(argNums);

const postiveNums = argNums.filter(num => num > 0);
//console.log(postiveNums);

// let delay = 0;
// postiveNums.forEach(num => {
//   setTimeout(() => {
//     process.stdout.write()
//   }, delay)
// })

for (let num of postiveNums) {
  setTimeout(() => {
    process.stderr.write("\007")
  }, num * 100)
}

postiveNums.forEach(element => {
  setTimeout(() => {
    process.stdout.write('\n');
  }, element);
});
