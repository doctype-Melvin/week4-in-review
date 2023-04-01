# 1. Loops

We use loops to execute some code for x times.
Analogous to functions, the logic goes between the `{}`
The x stands for the steps or iterations our loop should take
Loops could go on infinitely, that's why we give them a condition
to make them stop.

## The While Loop

Initialize an iterator that will track the loop's steps. Conventionally that is `let i = 0` (if you want to start at 0 - which is what we mostly do when iterating over arrays).

    let i = 0;

    // Define a condition that stops the loop after a certain number of steps (iterations)

    while (i <= 5) {
    console.log(`I am iteration number ${i}`);
    // And don't forget to increment the iterator (i) to prevent infinite loops
    i += 1;
    }

## The For Loop

Very similar to a while loop but different syntax.

    for (let i = 1; i <= 3; i += 1) {
    console.log(`I'm line ${i} from the for loop`);
    }
