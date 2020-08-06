var finalValue = 0;
var percentValue = 0;

// Adding a listening element so that when button is clicked, it does something
// addition buttons
document.getElementById("onehundred").addEventListener("click", addOneHundred);
document.getElementById("fivehundred").addEventListener("click", addFiveHundred);
document.getElementById("onethousand").addEventListener("click", addOneThousand);
document.getElementById("twothousand").addEventListener("click", addTwoThousand);
document.getElementById("fivethousand").addEventListener("click", addFiveThousand);
document.getElementById("tenthousand").addEventListener("click", addTenThousand);
// reset button
document.getElementById("reset").addEventListener("click", resetNumber);
// subtraction buttons
document.getElementById("minusonehundred").addEventListener("click", minusOneHundred);
document.getElementById("minusfivehundred").addEventListener("click", minusFiveHundred);
document.getElementById("minusonethousand").addEventListener("click", minusOneThousand);
document.getElementById("minustwothousand").addEventListener("click", minusTwoThousand);
document.getElementById("minusfivethousand").addEventListener("click", minusFiveThousand);
document.getElementById("minustenthousand").addEventListener("click", minusTenThousand);
// percent buttons
document.getElementById("minustenpercent").addEventListener("click", minusTenPercent);
document.getElementById("plustenpercent").addEventListener("click", addTenPercent);

function minusTenPercent(){
    percentValue = finalValue * .10;
    finalValue = finalValue - percentValue;
    document.getElementById("final").value = Math.round(finalValue);
    percentValue = 0
    
}

function addTenPercent(){
    percentValue = finalValue * .10;
    finalValue = finalValue + percentValue;
    document.getElementById("final").value = Math.round(finalValue);
}


function addOneHundred(){
    document.getElementById("final").value = Math.round(finalValue + 100);
    finalValue = finalValue + 100;
}

function addFiveHundred(){
    document.getElementById("final").value = Math.round(finalValue + 500);
    finalValue = finalValue + 500;
}

function addOneThousand(){
    document.getElementById("final").value = Math.round(finalValue + 1000);
    finalValue = finalValue + 1000;
}

function addTwoThousand(){
    document.getElementById("final").value = Math.round(finalValue + 2000);
    finalValue = finalValue + 2000;
}

function addFiveThousand(){
    document.getElementById("final").value = Math.round(finalValue + 5000);
    finalValue = finalValue + 5000;
}

function addTenThousand(){
    document.getElementById("final").value = Math.round(finalValue + 10000);
    finalValue = finalValue + 10000;
}

function resetNumber(){
    finalValue = 0;
    document.getElementById("final").value = finalValue;
}

function minusOneHundred(){
    document.getElementById("final").value = Math.round(finalValue - 100);
    finalValue = finalValue - 100;
}

function minusFiveHundred(){
    document.getElementById("final").value = Math.round(finalValue - 500);
    finalValue = finalValue - 500;
}

function minusOneThousand(){
    document.getElementById("final").value = Math.round(finalValue - 1000);
    finalValue = finalValue - 1000;
}

function minusTwoThousand(){
    document.getElementById("final").value = Math.round(finalValue - 2000);
    finalValue = finalValue - 2000;
}

function minusFiveThousand(){
    document.getElementById("final").value = Math.round(finalValue - 5000);
    finalValue = finalValue - 5000;
}

function minusTenThousand(){
    document.getElementById("final").value = Math.round(finalValue - 10000);
    finalValue = finalValue - 10000;
}

