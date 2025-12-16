/*

Instructions
Start by Understanding the Errors:
Run the program and observe the exceptions that occur. Document what the exceptions are and where they happen.

Write Exception Handling Code:
Use try/catch blocks to handle the errors so the program doesn’t crash when incorrect input or unexpected situations occur.

Test and Debug:
Test the program with valid and invalid inputs to confirm that exceptions are handled gracefully
and the program continues running as intended.
console.log("Welcome to the Pet Shelter System");


*/

// readline sync to read the users imput
const readlineSync = require('readline-sync');

// Initial Code with Bugs (that was provided)
let animals = [];                                         //empty array
let fees = [];                                          //empty array
function addAnimal(name, fee) {
    if (!name || fee < 0) {
        throw new Error("Invalid animal name or adoption fee!");
    }
    animals.push(name);
    fees.push(fee);
}
function getAdoptionFee(animalName) {
    let index = animals.indexOf(animalName);
    if (index === -1) {
        throw new Error("Animal not found in records!");
    }
    return fees[index];
}
// Main program
console.log("Welcome to the Pet Shelter System");
while (true) {
    let action = readlineSync.question("Choose an action: 'add', 'fee', or 'exit': ").toLowerCase();
    if (action === "exit") {
        console.log("Goodbye!");
        break;
    }

    if (action === "add") {
            try {                                                 // adding the try catch block
                let animal = readlineSync.question("Enter the animal's name: ");
                let feeInput = readlineSync.question("Enter the adoption fee: ");
                let fee = Number(feeInput);

            if (Number.isNaN(fee)) {                               // this will prevent a return of NAN if an invlid number is entered
            throw new Error("Adoption fee must be a valid number.");
             }

                // This may throw an error if input is invalid
                addAnimal(animal, fee);

                console.log(`${animal} added with a fee of $${fee}.`);
            } catch (error) {                                     // closiong the try catch block
                console.log("Error:", error.message);
            }
                                                                
    } else if (action === "fee") {
        try {                                                   // This try catch is for looking for a name that does not exist
            let animal = readlineSync.question(
                "Enter the animal's name to find its adoption fee: "
            );

            console.log(`${animal}'s adoption fee is $${getAdoptionFee(animal.toLowerCase())}.`);

        } catch (error) {                               //with this the program should not error
            console.log("Error:", error.message);
            console.log("Please try again.");
        }

    } else {
        console.log("Invalid action. Please choose 'add', 'fee', or 'exit'.");
    }
}

/*
Problems to Solve

Invalid Input Errors:
  What happens if the user provides a negative adoption fee or leaves the name blank? The program crashes
  What happens if the user tries to find the fee for an animal that hasn’t been added? The program crashes

Code Flow Problems:
  What happens if the program throws an exception? Does the rest of the code continue running?
The errors can be found, but there is no proper way to handel them
Structured Exception Handling:
  Add try/catch blocks to handle the above errors gracefully.
*/
