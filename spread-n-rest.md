# 5. Spread syntax & rest operator

1. Both are just three dots ...
2. One collects items into one element (rest)
3. The other lists all items of an element (spread)

## Spread syntax

Spread takes an iterable - for example an array - and lists the individual items. That's why we can use spread to copy arrays.

    let myArray = ['red', 'white', 'blue']
    console.log(myArray) output: ['red', 'white', 'blue']

    let myNewArray = [...myArray, 'silver', 'black']
    console.log(myNewArray) = ['red', 'white', 'blue', 'silver', 'black']

This also works with object literals.

## Rest operator

The rest operator takes listed elements and encloses them into an array. We use the rest operator to make our functions more flexible.

    const makeSum = (a, b, ...moreNumbers) => {
        // a and b are numbers
        // moreNumbers is an array
        // if there are only two numbers,
        // moreNumbers would be an empty array
    }

Keep in mind that our function above needs to be able to process arrays since the `moreNumbers` argument will be an array.

Now we've declared our function to take more than two arguments. Let's call it with some numbers from an array.

    const importantNumbersArray = [1, 2, 3, 4, 5]

    makeSum(...importantNumbersArray)

This works because on one hand we used the rest operator in our function declaration. The function may take any number of arguments.
On the other hand, we call our function by spreading the array items as individial arguments.
