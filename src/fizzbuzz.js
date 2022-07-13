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

function fizzBuzzSimple(lower, upper) {
  arr1 = []
  for (let i = lower - 1; i < upper; ) {
    arr1.push((++i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') || i)
  }
  return arr1
}
console.log(fizzBuzzSimple(1, 15))
// TODO: Change undefined below to the name of your function
module.exports = fizzBuzzSimple
