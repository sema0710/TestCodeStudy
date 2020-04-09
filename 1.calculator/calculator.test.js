const { plus, minus, multiple, divide } = require('./calculator');

test('calculator plus test', () => {
    expect(plus(1,2)).toEqual(3);
})

test('calculator minus test', () => {
    expect(minus(2,1)).toEqual(1);
})

test('calculator Multiplication test', () => {
    expect(multiple(2,3)).toEqual(6);
})

test('calculator divide test', () => {
    expect(divide(4,2)).toEqual(2);
})