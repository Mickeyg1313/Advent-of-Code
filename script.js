// This function will be triggered when the "Run Puzzle Solution" button is clicked
function runPuzzle() {
    const puzzleInput = document.getElementById('puzzleInput').value.trim();
    if (!puzzleInput) {
        displayResult('Please enter puzzle input!');
        return;
    }

    // Process puzzle input and display the result
    const result = solvePuzzle(puzzleInput);
    displayResult(result);
}

// Function to display results in the output section
function displayResult(result) {
    document.getElementById('result').textContent = result;
}

// This function processes the input as a list of numbers
function solvePuzzle(input) {
    // Split the input into lines, trim spaces, and convert to an array of numbers
    const numbers = input.split('\n').map(line => parseFloat(line.trim()));

    // Example of how to log variables for debugging:  
    console.log('Puzzle Input:', puzzleInput); 

    // Replace the following lines with code for your solution!
    for (var i = 0; i < numbers.length; i++) {
        var first = numbers[i];
        for (var i = 0; i < numbers.length; i++) {
            var second = numbers[i]
            if (first + second == 2020){
                result = first * second;
            } 
        }
    }
    // Return your solution value (adjust this prompt as needed)
    return `Puzzle solution: ${result}`;
}
