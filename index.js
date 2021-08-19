var billAmount = document.querySelector("#bill-amount");
var cashGiven = document.querySelector("#cash-given");
var cashGivenDisplay = document.querySelector(".cash-given-display");
var changeTableDisplay = document.querySelector(".change-table")
var nextButton = document.querySelector("#next-button")
var checkButton = document.querySelector("#check-button");
var errorMessage = document.querySelector("#error-message");
var noOfNotes = document.querySelectorAll(".no-of-notes");
var availableNotes = [2000, 500, 100, 50, 20, 10, 5, 1];

nextButton.addEventListener("click", validateAndDisplayCashGivenHandler);

function validateAndDisplayCashGivenHandler() {
    hideMessage();
    if (billAmount.value > 0) {
        nextButton.style.display = "none";
        cashGivenDisplay.style.display = "flex";
    } else {
        showMessage("Enter Valid Bill Amount ");
    }

}

checkButton.addEventListener("click", validateBillAndCashAmountHandler);

function validateBillAndCashAmountHandler() {
    hideMessage();
    var cashAmountValue = Number(cashGiven.value);
    var billAmountValue = Number(billAmount.value);
    if (cashAmountValue > 0) {
        if (cashAmountValue >= billAmountValue) {
            var amountToBeReturned = cashAmountValue - billAmountValue;
            calculateChange(amountToBeReturned);
        } else {
            showMessage("The cash provided should be atleast equal to bill amount");
        }

    } else {
        showMessage("Invalid Cash Amount");
    }
}

function calculateChange(amountToBeReturned) {
    changeTableDisplay.style.display = "flex";
    for (let i = 0; i < availableNotes.length; i++) {
        var numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);
        amountToBeReturned = amountToBeReturned % availableNotes[i];
        noOfNotes[i].innerText = numberOfNotes;
    }

}

function showMessage(msg) {
    errorMessage.style.display = "block";
    errorMessage.innerText = msg;
    changeTableDisplay.style.display = "none";
}

function hideMessage(msg) {
    errorMessage.style.display = "none";
}