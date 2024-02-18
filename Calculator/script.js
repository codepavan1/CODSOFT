function ToMyResults(value) {
    document.getElementById('output').value += value;
}

function DropValue() {
    document.getElementById('output').value = '';
}

function calculatorResults() {
    var result = eval(document.getElementById('output').value);
    document.getElementById('output').value = result;
}
