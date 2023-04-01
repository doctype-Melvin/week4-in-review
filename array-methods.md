# 3. Array Methods

Array methods are looping functions that are predefined inside of the array object.

For example: The Array.filter() does something like the following:

    const myArray = ["Julia", "Calle", "Jakob", "Frank", "Mona"];

    function myFilter(array) {
    let result = [];
    for (let i = 0; i < array.length; i += 1) {
    if (array[i].startsWith("J")) {
    result.push(array[i]);
    }
    }
    console.log(result);
    return result;
    }

    myFilter(myArray); //output: ['Julia', 'Jakob']

Ok, this is very static. Let's create a more general version

    function myFilterCallback(array, callback) {
    let result = [];
    for (let i = 0; i < array.length; i += 1) {
        if (callback(array[i])) {
        result.push(array[i]);
        }
    }
    console.log(result);
    return result;
    }

    myFilterCallback(myArray, (name) => name.startsWith("J"));
