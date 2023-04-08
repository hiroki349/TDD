import FizzBuzz from "../src/fizzbazz"

describe('FizzBuzzTest', () => {
  it('Test実装されている', () => {
    FizzBuzz(1)
  })

  it('引数にとった値を文字列で返す', () => {
    expect(FizzBuzz(1)).toEqual('1')
  })

  it('ただし、3の倍数の時は「Fizz」を返す', () => {
    expect(FizzBuzz(3)).toEqual('Fizz')
  })

  it('ただし、5の倍数の時は「Buzz」を返す', () => {
    expect(FizzBuzz(5)).toEqual('Buzz')
  })

  it('ただし、3と5の両方の倍数の場合には「FizzBuzz」を返す', () => {
    expect(FizzBuzz(15)).toEqual('FizzBuzz')
  })

  it('引数が1から100までの数でない場合は例外にする。', () => {
    expect(() => FizzBuzz(101)).toThrow('Error!')
  })
})