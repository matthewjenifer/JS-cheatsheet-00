function calculateTimeToPayOffDebt(debt, interestRate, monthlyIncome) {
    // Calculate the monthly interest rate by dividing the annual interest rate by 12
    var monthlyInterestRate = interestRate / 12;
    
    // Calculate the total number of payments needed to pay off the debt by dividing the debt by the monthly income and then multiplying by the monthly interest rate
    var totalPayments = debt / monthlyIncome * monthlyInterestRate;
    
    // Print the number of payments to the screen
    console.log("It will take a total of " + totalPayments + " payments to pay off the debt.");
}

calculateTimeToPayOffDebt(20279, 17, 50);
