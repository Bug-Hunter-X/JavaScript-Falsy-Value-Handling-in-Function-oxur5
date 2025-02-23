# JavaScript Falsy Value Handling Bug

This repository demonstrates a subtle bug in JavaScript related to how a function handles falsy values. The function `foo` is designed to add two numbers, but its null checks might not cover all edge cases involving falsy values (like 0, false, '', etc.).

## Bug Description

The `foo` function explicitly checks for null values. However, in JavaScript, other values like `0`, `false`, and empty strings are also considered falsy.  The current implementation doesn't handle these edge cases correctly, potentially leading to unexpected results when these falsy values are passed as arguments.

## Solution

The solution improves the function's handling of falsy values by explicitly checking for the type of the input using typeof.  This ensures that only numeric values are processed, providing a more robust solution that correctly handles all falsy inputs.
