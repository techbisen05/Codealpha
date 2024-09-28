// script.js

document.getElementById("ageForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get input values
    const day = parseInt(document.getElementById("day").value);
    const month = parseInt(document.getElementById("month").value);
    const year = parseInt(document.getElementById("year").value);

    // Get current date
    const today = new Date();
    const currentDay = today.getDate();
    const currentMonth = today.getMonth() + 1; // January is 0
    const currentYear = today.getFullYear();

    // Calculate age
    let age = currentYear - year;

    // Adjust age if the birthday hasn't occurred this year
    if (currentMonth < month || (currentMonth === month && currentDay < day)) {
        age--;
    }

    // Display result
    document.getElementById("result").textContent = `Your age is: ${age} years.`;
});