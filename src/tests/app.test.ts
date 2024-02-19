import { fibonacci, fibWithMemoize } from '../index';

describe('Fibonacci with memoize and without memoize', () => {

  test('should return the correct Fibonacci number for a given index without memoization', () => {
    expect(fibonacci(0)).toBe(0);
    expect(fibonacci(1)).toBe(1);
    expect(fibonacci(2)).toBe(1);
    expect(fibonacci(3)).toBe(2);
    expect(fibonacci(4)).toBe(3);
    expect(fibonacci(5)).toBe(5);
  });

  test('should have fewer calls with memoization compared to without memoization', () => {
    expect(fibWithMemoize(3)).toBe("Recordering in the cache: 3");
    expect(fibWithMemoize(3)).toBe("Already in the cache: 3");
  });

});