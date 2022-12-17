function calculateTimeToPayOffDebt(debt, interestRate, monthlyIncome) {
    var monthlyInterestRate = interestRate / 12; // Calculate the monthly interest rate by dividing the annual interest rate by 12
    
    var totalPayments = debt / monthlyIncome * monthlyInterestRate; // Calculate the total number of payments needed to pay off the debt by dividing the debt by the monthly income and then multiplying by the monthly interest rate
    
    console.log("It will take a total of " + totalPayments + " payments to pay off the debt."); // Print the number of payments to the screen
}

calculateTimeToPayOffDebt(20279, 17, 2000);
