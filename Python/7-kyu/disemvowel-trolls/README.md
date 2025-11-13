# [Kata Title]

**Difficulty:** 7 kyu  
**Link:** [CodeWars Link](https://www.codewars.com/kata/52fba66badcd10859f00097e)

## Problem

Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata `y` isn't considered a vowel.

## Solution

```python
def disemvowel(string_):
	for vowel in 'aeiouAEIOU':
		string_ = string_.replace(vowel, '')
	return string_
```

## Explanation

So the main thing you want to practice here is your basic problem-solving and reading comprehension skills. 

Reasoning process: 
1. What do I need to 'remove'?
2. Let's remove vowels, case-sensitive.
3. Just replace vowels with nothing using `str.replace()` method

## Complexity

- **Time:** O(n)
- **Space:** O(n)

## Sample Tests

```python
import codewars_test as test
from solution import disemvowel

@test.describe("Fixed Tests")
def basic_tests():
    @test.it("First fixed test")
    def fixed_test_1():
        test.assert_equals(disemvowel("This website is for losers LOL!"), "Ths wbst s fr lsrs LL!", 'Incorrect answer for input="This website is for losers LOL!"\n')
    @test.it("Second fixed test")
    def fixed_test_2():
        test.assert_equals(disemvowel("No offense but,\nYour writing is among the worst I've ever read"), "N ffns bt,\nYr wrtng s mng th wrst 'v vr rd", 'Incorrect answer for input="No offense but,\nYour writing is among the worst I\'ve ever read"\n')
    @test.it("Third fixed test")
    def fixed_test_3():
        test.assert_equals(disemvowel("What are you, a communist?"), "Wht r y,  cmmnst?", 'Incorrect answer for input="What are you, a communist?"\n')

## Tags
`strings` `regular expressions` `fundamentals`