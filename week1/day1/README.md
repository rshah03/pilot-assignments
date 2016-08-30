# Week 1 - Day 1 Assignments

Submit a pull request to submit your work

## JavaScript Basics

### 1. Hash-triangle
Write a for-loop that makes seven calls to `console.log` to output the following triangle:

```
#
##
###
####
#####
######
#######
```

You can find the length of a string by writing `.length` after it.

```javascript
console.log("taco".length);
// → 4
```

### 2. FizzBuzz
Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions.

Exceptions:
  1. For numbers divisible by 3, print "Fizz" instead of the number.
  2. For numbers divisible by 5 (and not 3), print "Buzz" instead.

When you have that working, modify your program to print "FizzBuzz", for numbers that are divisible by **both** 3 and 5.

### 3. Chess board

Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a “#” character. The characters should form a chess board.

Passing this string to console.log should show something like this:

```
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
```

When you have a program that generates this pattern, define a variable size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.

Requirements:
- You can only `console.log` once
- Creates 8x8 grid
- Can dynamically create a grid from variable

Bonus Requirements:
- Only use two variables (this includes the variables in the loops)

HINT: You will need a loop inside of a loop
