// TODO: Write your function in this file

function fizzBuzz(lower, upper) {
  const arr = []
  for (i = lower; i <= upper; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      arr.push('FizzBuzz')
    } else if (i % 3 === 0) {
      arr.push('Fizz')
    } else if (i % 5 === 0) {
      arr.push('Buzz')
    } else {
      arr.push(i)
    }
  }
  return arr
}

console.log(fizzBuzz(1, 15))
// TODO: Change undefined below to the name of your function
module.exports = fizzBuzz
