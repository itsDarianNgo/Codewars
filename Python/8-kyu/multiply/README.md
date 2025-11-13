# Multiply

**Difficulty:** 8 kyu  
**Link:** [CodeWars Link](https://www.codewars.com/kata/50654ddff44f800200000004)

## Problem

This code does not execute properly. Try to figure out why.

## Solution

```python
def multiply(a, b):
	return a * b
```

## Explanation

It's a common and simple mistake to forget basic syntax such as, 'return' when manually coding.

In the age of vibe coding it's become less common and usually happens when the AI is cutoff. 


## Complexity

- **Time:** O(n)
- **Space:** O(n)

## Sample Tests

```python
import codewars_test as test
from solution import multiply

@test.describe("Fixed Tests")
def fixed_tests():
	@test.it('Basic Test Cases')
	def basic_test_cases():
		test.assert_equals(multiply(2,1), 2)
		test.assert_equals(multiply(5,0), 0)
		test.assert_equals(multiply(0,5), 0)
		test.assert_equals(multiply(0,0), 0)
```

## Tags
`debugging` `fundamentals`