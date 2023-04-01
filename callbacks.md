# 3. Callbacks

As we've learned before this is a function...

    function myReturningFunction() {
    return `I'm a return value!`;
    }

as is this...

    const anotherReturningFunction = () => `I'm a return value from an arrow function!`;

Let's write a new arrow function and give it a parameter

    const myArrowFunction = (para) => console.log(para);

    myArrowFunction(
    `Whatever I'm passing here, it will be used inside my function`
    );

Sometimes we want functions to receive other functions. That's what we call callbacks.

    const higherOrderFunction = (callback) => callback();

We could pass a function as an argument (callback) that also can receive an argument.

    const anotherHigherOrder = (someArgument, callback) => callback(someArgument)
