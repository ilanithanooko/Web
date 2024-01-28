document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');
    let currentInput = '';
    let operation = null;
    let previousInput = '';

    function updateDisplay() {
        display.textContent = currentInput;
    }

    function handleNumber(number) {
        if(number == 'e'){
            currentInput = '';
            number = Math.E;
        }
        if(number == 'π'){
            currentInput = '';
            number = Math.PI;
        }
        if(number == 'Rand'){
            currentInput = '';
            number = Math.random();
        }
        if (currentInput.length < 10) {
            currentInput += number;
            updateDisplay();
        }
    }

    function handleOperation(op) {
        if (currentInput) {
            if (previousInput) {
                calculate();
            } else {
                previousInput = currentInput;
                currentInput = '';
            }
            operation = op;
        }
    }

    function calculate() {
        let result;
        const prev = parseFloat(previousInput);
        const current = parseFloat(currentInput);

        switch (operation) {
            case '+':
                result = prev + current;
                break;
            case '—':
                result = prev - current;
                break;
            case '✕':
                result = prev * current;
                break;
            case '÷':
                result = prev / current;
                break;
            case 'n√x':
                result = Math.pow(prev, 1/current);
                break;
            case 'xy':
                result = Math.pow(prev, current);
                break;
            default:
                return;
        }

        currentInput = String(result);
        operation = null;
        previousInput = '';
        updateDisplay();
        currentInput = ''
    }

    function factorial(n) {
        var e = n;
        if (e == 1 | e == 0) return 1;
        while (n--) {
            if (n < 1)
                break;
            e *= n;
        }
        return e
    }

    document.querySelectorAll('.numberBut').forEach(button => {
        button.addEventListener('click', function () {
            handleNumber(this.textContent);
        });
    });

    document.querySelectorAll('.signBut').forEach(button => {
        button.addEventListener('click', function () {
            handleOperation(this.textContent.trim());
        });
    });

    document.getElementById('percent').addEventListener('click', function () {
        if (currentInput) {
            currentInput = String(parseFloat(currentInput) / 100);
            updateDisplay();
        }    });

    document.getElementById('plusMinus').addEventListener('click', function () {
        if (currentInput) {
            currentInput = String(parseFloat(currentInput * (-1)));
            updateDisplay();
        }
    });

    document.getElementById('nthRoot').addEventListener('click', function () {
        handleOperation(this.textContent.trim());
    });

    document.getElementById('ythSquare').addEventListener('click', function () {
        handleOperation(this.textContent.trim());
    });

    document.getElementById('powerOf10').addEventListener('click', function () {
        if (currentInput) {
            currentInput = String(parseFloat(Math.pow(10,currentInput)));
            updateDisplay();
        }    });

    document.getElementById('3rdSquare').addEventListener('click', function () {
        if (currentInput) {
            currentInput = String(parseFloat(Math.pow(currentInput, 3)));
            updateDisplay();
        }
    });
    
    document.getElementById('2ndSquare').addEventListener('click', function () {
        if (currentInput) {
            currentInput = String(parseFloat(Math.pow(currentInput, 2)));
            updateDisplay();
        }    
    });

    document.getElementById('log').addEventListener('click', function () {
        if (currentInput) {
            currentInput = String(parseFloat(Math.log10(currentInput)));
            updateDisplay();
        } else{
            display.textContent = 'Error';
        }    
    });

    document.getElementById('3rdRoot').addEventListener('click', function () {
        if (currentInput) {
            currentInput = String(parseFloat(Math.pow(currentInput, 1/3)));
            updateDisplay();
        }
    });

    document.getElementById('2ndRoot').addEventListener('click', function () {
        if (currentInput) {
            currentInput = String(parseFloat(Math.pow(currentInput, 1/2)));
            updateDisplay();
        }
    });

    document.getElementById('exponent').addEventListener('click', function () {
        if (currentInput) {
            currentInput = String(parseFloat(Math.exp(currentInput)));
            updateDisplay();
        }
    });

    document.getElementById('opposite').addEventListener('click', function () {
        if (currentInput) {
            currentInput = String(parseFloat(1/currentInput));
            updateDisplay();
        }
    });

    document.getElementById('factorial').addEventListener('click', function () {
        if (currentInput) {
            currentInput = String(parseFloat(factorial(currentInput)));
            updateDisplay();
        }
    });

    document.getElementById('ln').addEventListener('click', function () {
        if (currentInput) {
            currentInput = String(parseFloat(Math.log(currentInput)));
            updateDisplay();
        } else{
            display.textContent = 'Error';
        }    
    });


    document.getElementById('acButton').addEventListener('click', function () {
        currentInput = '0'; // Set currentInput to '0'
        previousInput = '';
        operation = null;
        updateDisplay(); // Update the display to show '0'
        currentInput = '';
    });

    document.querySelector('.signBut:contains("=")').addEventListener('click', calculate);
});



// custom config for the MTW app 
const mtwAppConfig = {
    border: true // app border in the MTW page                    
}

///////////////////////////////////////////////////////
// implement this functions in order to use private API        
const sendPrivateApiRequest = async () => {
    // your code here:
    // sendRequestToParent({ cat: 'getAssets' })
}        

const acceptPrivateApiResponse = async (data) => {
    // process received data here:
    // console.log(data)
}

// use this in order to send on document load
document.addEventListener('DOMContentLoaded', () => {
    // your code here:
    //sendRequestToParent({ method: 'getAssets' })
})