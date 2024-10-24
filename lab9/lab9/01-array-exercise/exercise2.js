// Task: Write a JavaScript function to get the first element of an array.
// Passing a parameter 'n' will return the first 'n' elements of the array.
// Hint: You might want to check the documentation of array.slice() function

const first = (input_array, number_of_elements) => {
    // Add your code here
    const new_array = input_array.filter( x =>  {
        for (let i = 0; i < number_of_elements; i++){
            return input_array[i]
        }
    })
    return new_array
}


// DO NOT EDIT CODE BELOW
// Test Cases :
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2, 9 ],4));


// Expected Results
// [7, 9, 0]
// [7, 9, 0, -2]