//1. This is a simple JavaScript program that checks if a score is above or below a certain threshold and prints the result to the console.
function checkScores(score){
    if (score >= 180){
        console.log("passed");
    }
    else {
        console.log("failed");
    }
};
// Example usage
let score = 190;
checkScores(score);

//2. this is a simple program that checks if you are eligible to vote based on your age and prints the result to the console.
function votingEligibility(age){
    if(age >= 18){
       return "You are eligible to vote";
    }
    else {
       return "You are not eligible to vote";
    };
};
// Example usage
let age = 16;
console.log(votingEligibility(age));

//3. A simple program to check if a student has passed or failed based on their score and prints the result to the console.
function checkPerformance(name, scores){
    if (scores >= 90){
        return name + " excelled";
    }else if (scores >= 75){
        return name + " good scores";
    
}else if (scores >= 50){
        return name + " average scores";
    }
    else {
        return name + " failed";
    }
};
// Example usage
let name = "John";
let scores = 85;
console.log(checkPerformance(name, score));

//4. A function to check if a person has an ID and is above 18 years old, and returns a message accordingly.
function checkAccess(hasID, isAbove18) {
    return hasID && isAbove18 ? "Access granted" : "Access denied";
};
// Example usage
let hasID = true;
let isAbove18 = false;
console.log(checkAccess(hasID, isAbove18));


//5. loop through an array of scores and check if each score is above or below a certain threshold, and print the result to the console.
const studentsScores = [45, 67, 89, 32, 55, 50, 90, 48];// Array of student scores

// Function to check if each student has passed or failed based on their score
function checkScores(studentsScores) {
    for (let i = 0; i < studentsScores.length; i++) {
        if (studentsScores[i] > 50) {
            console.log("Your score is " + (i + 1) + ": passed");
        } else {
            console.log("Your score is " + (i + 1) + ": failed");
        }
    }
}
// Example usage
checkScores(studentsScores);


//6. Write an arrow function that returns "Yes" if a student passed both Math and English (score ≥ 50), else "No".
const checkPassing = (mathScore, englishScore) => {
    return (mathScore >= 50 && englishScore >= 50) ? "Yes" : "No";
};
// Example usage
let mathScore = 60;
let englishScore = 70;
console.log(checkPassing(mathScore, englishScore)); // Output: Yes


//7. Create a function that checks if a user has either an email or a phone number before signing up.
function checkSignUp(email, phoneNumber) {
    if (email || phoneNumber) {
        return "You can sign up";
    }
    else {
        return "You need to provide either an email or a phone number to sign up";
    };
}
// Example usage
let email = "iorvertersur@gmail.com";
let phoneNumber = "1234567890";
console.log(checkSignUp(email, phoneNumber)); // Output: You can sign up


//8. Write a function that takes username and password. If either one is empty, return "Invalid input" using the || operator.
function validateCredentials(username, password) {
    if (!username || !password) {
        return "Invalid input";
    }
    return "Valid input";
}
// Example usage
let username = "rexter";
let password = "password123";
console.log(validateCredentials(username, password)); // Output: Valid input

//9. Write a function that accepts hours worked. If hours ≥ 40, return "Full-time", else "Part-time" using a ternary operator.
function checkHoursWorked(hours) {
    return (hours >= 40) ? "Full-time" : "Part-time";
}
// Example usage
let hoursWorked = 45;
console.log(checkHoursWorked(hoursWorked)); // Output: Full-time


//10. Write an arrow function that takes two numbers and returns the larger one.
const findLargerNumber = (num1, num2) => {
    return (num1 > num2) ? num1 : num2;
};
// Example usage
let number1 = 10;
let number2 = 20;
console.log(findLargerNumber(number1, number2)); // Output: 20

