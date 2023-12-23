const displayValue = (val) => {
document.getElementById("display").value = document.getElementById("display").value + val;

}

const clearDisplay= () => {
    document.getElementById("display").value = "";
}

function displayResult()  {
    var userInput = document.getElementById("display").value ;
    var result = eval(userInput);

    document.getElementById("display").value = result;
}