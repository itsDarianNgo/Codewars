# Find the Odd Int

**Difficulty:** 6 kyu  
**Link:** [CodeWars Link](https://www.codewars.com/kata/54da5a58ea159efa38000836)

## Problem

Given an array of integers, find the one that appears an odd number of times. There will always be only one integer that appears an odd number of times.

## Solution

```python
def find_it(seq):
    counts = {}
    for num in seq:
        counts[num] = counts.get(num, 0) + 1
    
    for num, count in counts.items():
        if count % 2 == 1:
            return num
```

## Explanation

Use a dictionary to count occurrences of each number as we iterate through the array. Then find and return the number that has an odd count.

Alternative one-liner using XOR: `return reduce(lambda x, y: x ^ y, seq)` - works because XOR cancels out pairs.

## Complexity

- **Time:** O(n)
- **Space:** O(n)

## Sample Tests

```python
import codewars_test as test
from solution import find_it

@test.describe("Example Tests")
def test_group():
    @test.it("should return 5")
    def test_case():
        test.assert_equals(find_it([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]), 5)
    
    @test.it("should return -1")
    def test_case():
        test.assert_equals(find_it([1,1,2,-2,5,2,4,4,-1,-2,5]), -1)
    
    @test.it("should return 0")
    def test_case():
        test.assert_equals(find_it([20,1,1,2,2,3,3,5,5,4,20,4,5]), 5)
    
    @test.it("should return 10")
    def test_case():
        test.assert_equals(find_it([10]), 10)
    
    @test.it("should return 10")
    def test_case():
        test.assert_equals(find_it([1,1,1,1,1,1,10,1,1,1,1]), 10)
```

## Tags
`arrays` `hash-map` `algorithms` `fundamentals`