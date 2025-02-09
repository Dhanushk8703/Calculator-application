document.addEventListener("DOMContentLoaded", function () {
    document.body.classList.add("loaded");
});

function redirectPage(url) {
    document.body.classList.add("fade-out");
    window.location.href = url;
}

function validate() {
    event.preventDefault();
    let isValid = true;

    let amount = document.getElementById("amount").value.trim();
    let invalid_amount = document.getElementById("invalid-amount");
    let amountPattern = /^\d+(\.\d+)?$/;
    if (amount === "") {
        invalid_amount.textContent = "*The Loan amount should not be Null";
        isValid = false;
    } else if (parseFloat(amount) <= 0) {
        invalid_amount.textContent = "*The Loan amount should be positive and Non-zero"
    } else if (parseFloat(amount) < 100000) {
        invalid_amount.textContent = "*The Loan amount should be greater than 1 lakh";
        isValid = false;
    } else if (!amountPattern.test(parseFloat(amount)) ) {
        invalid_amount.textContent = "*The Loan amount should contains only numeric value";
        isValid = false;
    } else {
        invalid_amount.textContent = "";
    }

    let interest = document.getElementById("interest").value.trim();
    let invalid_interest = document.getElementById("invalid-rate");
    let ratePattern = /^\d+(\.\d+)?$/;
    if (interest === "") {
        invalid_interest.textContent = "*The Rate of interest should not be Null";
        isValid = false;
    } else if (!ratePattern.test(parseFloat(interest))) {
        invalid_interest.textContent = "*The Rate of interest should be in Numeric or decimal";
        isValid = false;
    } else {
        invalid_interest.textContent = "";
    }

    let tenure = document.getElementById("tenure").value.trim();
    let invalid_tenure = document.getElementById("invalid-tenure");
    let tenurePattern = /^\d+(\.\d+)?$/;
    if (tenure === "") {
        invalid_tenure.textContent = "*The Loan tenure time should not be Null";
        isValid = false;
    } else if (!tenurePattern.test(parseFloat(tenure))) {
        invalid_tenure.textContent = "*The Loan tenure time should not be character";
        isValid = false;
    } else if (parseFloat(tenure)> 99){
        invalid_tenure.textContent = "*The Loan tenure time should not be greater than 99 years"
        isValid = false;
    } else {
        invalid_tenure.textContent = "";
    }

    if (isValid) {
        sipCalculation(amount,interest,tenure);
    }

    return isValid;
}
function sipCalculation(sipAmount, interest, tenure) {
    let rate = (interest / (12 * 100));
    let months = tenure * 12;
    let compound = Math.pow((1 + rate), months) - 1;

    let maturityAmount = sipAmount * (compound / rate) * (1 + rate); 
    let totalInvestment = sipAmount * months;
    let totalInterest = maturityAmount - totalInvestment;

    document.getElementById("principal").scrollIntoView({ behavior: 'smooth' });
    document.getElementById("principal").focus();
    document.getElementById("t-amount").value = Math.round(maturityAmount).toLocaleString();
    document.getElementById("t-interest").value = Math.round(totalInterest).toLocaleString();
    document.getElementById("principal").value = Math.round(totalInvestment).toLocaleString();
}