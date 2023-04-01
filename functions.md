# 0.Functions

All functions have something in common...

- They all use `(){}`
- Of course, there are exceptions to this rule. More on that later...
- The `()` are part of our function definition and are the place
  where we put our parameters that the function accepts.
- The `()` also indicate a function call AFTER we've defined a function.
- We need the `()` to make the code inside the function work.
- The actual code/logic of our function goes between `{}`.
- On the last line before the `}` we usually put our 'return' keyword.
- Anything that our function returns, now is accessible outside the function

1. function declarations - named function

syntax pattern: keyword name() {}

    function myFirstFunction() {
    console.log(`I'm coming from a function declaration!`);
    }

2. function expression - one line (has an 'implicit' return - no return keyword needed)

syntax pattern: variable = () =>

    const mySecondFunction = () => console.log(`I'm coming from a function expression`);

3. function expression - multiple lines

syntax pattern: variable = arrow function () => {
return (if you want to return something - generally you do!)
}

    const myThirdFunction = () => {
    console.log(`1: This is the first line`);
    console.log(`2: This is the second line`);
    // There could be many more lines after this
    // and would have to use a return to actually
    // return something from a multiline arrow function
    // ... and we need these bad boys {} to wrap the code content
    };

4. Sometimes we don't need named functions or
   function expressions to get the job done
   We could just write `function (){}` or `() => `
