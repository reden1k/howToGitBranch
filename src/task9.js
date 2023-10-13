const loanTermYears = 2;
const annualInterestRate = 10;
const loanAmount = 200000;

    const numberOfMonths = loanTermYears * 12;
    const monthlyInterestRate = (annualInterestRate / 100) / 12;
    const monthlyPayment = (loanAmount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -numberOfMonths));
    const totalPayment = monthlyPayment * numberOfMonths;
    const totalOverpayment = totalPayment - loanAmount;

    console.log(totalOverpayment.toFixed(2));
