export function FizzBuzz(num: number): string {
  if (num < 1 || 100 < num) {
    throw new Error('Error!')
  }
  if (num % 3 === 0 && num % 5 === 0) {
    return 'FizzBuzz'
  }
  if (num % 3 === 0) {
    return 'Fizz'
  }
  if (num % 5 === 0) {
    return 'Buzz'
  }
  return num.toString()
}

export default FizzBuzz