# You're a square!

**Difficulty:** 7 kyu  
**Link:** [CodeWars Link](https://www.codewars.com/kata/[kata-id])

## Problem

### A square of squares

You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!

However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a _perfect square_.

### Task

Given an integral number, determine if it's a [square number](https://en.wikipedia.org/wiki/Square_number):

> In mathematics, a **square number** or **perfect square** is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

The tests will _always_ use some integral number, so don't worry about that in dynamic typed languages.

### Examples

    -1  =>  false
     0  =>  true
     3  =>  false
     4  =>  true
    25  =>  true
    26  =>  false

## Solution

```python
def is_square(n):
	if n < 0:
		return False

	sqrt = int(n ** 0.5)
	return sqrt * sqrt == n
```

## Explanation

The main goal here is to determine if a number is a perfect square. This question is more of a basic mathematics check to see if you understand how to take the square root of a perfect square. 

Here's my quick thought process:
- Negative numbers can't be perfect squares, so immediately return False
- n ** 0.5 calculates the square root of n
  - int() converts to integer (removes decimal part)
  - Example: int(5.099) = 5

## Complexity

- **Time:** O(1)
- **Space:** O(1)

## Sample Tests

```python
import codewars_test as test
from solution import is_square

@test.describe("Fixed Tests")
def fixed_tests():
	@test.it('Basic Test Cases')
	def basic_test_cases():
		test.assert_equals(is_square(-1), False, "-1: Negative numbers cannot be square numbers")
		test.assert_equals(is_square( 0), True, "0 is a square number (0 * 0)")
		test.assert_equals(is_square( 3), False, "3 is not a square number")
		test.assert_equals(is_square( 4), True, "4 is a square number (2 * 2)")
		test.assert_equals(is_square(25), True, "25 is a square number (5 * 5)")
		test.assert_equals(is_square(26), False, "26 is not a square number")

```

## Tags
`fundamentals` `mathematics`