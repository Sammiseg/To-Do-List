function calculate(operation) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const resultElement = document.getElementById('result');

    if (isNaN(num1) || isNaN(num2)) {
        resultElement.value = 'Please enter valid numbers';
        return;
    }

    let result;
    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            if (num2 === 0) {
                resultElement.value = 'Cannot divide by zero';
                return;
            }
            result = num1 / num2;
            break;
        case 'clear':
            document.getElementById('num1').value = '';
            document.getElementById('num2').value = '';
            resultElement.value = '';
            return;
        default:
            resultElement.value = 'Invalid operation';
            return;
    }

    resultElement.value = result;
}
