
function formula() {
    const x = document.getElementById('inputNumber').value;
    if ((x > -3)&&(x < 3)) {
        
        function calculateFunction(x) {
            return (2 / 3 * Math.sqrt(9 - Math.pow(x, 2)));
        }
    
        const result = calculateFunction(parseInt(x));
        document.getElementById('resultTextarea').value = "Результат вычисления функции => " + result;
    
    }
    else {
        alert("Ошибка ввода");
    }
};


