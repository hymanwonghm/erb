// Task: Write a JavaScript function to find an array contains a specific element.
// Hint: You should leverage the array.indexOf() function and if else statement

const contains =  (array, target) => {
    // Add your code here
    if (array.indexOf(target) === -1){
        return false
    } else {
        return true
    }
}


// DO NOT EDIT CODE BELOW
// Test Case
arr = [2, 5, 9, 6];
console.log(contains(arr, 5));

// Expected Output
// true