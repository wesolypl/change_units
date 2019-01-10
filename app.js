const input = document.querySelector('#input');
const inputUnit = document.querySelector("#inputUnit");
const outputUnit = document.querySelector("#outputUnit");
const changeToMeter = (inputValue, inputUnitValue, outputUnitValue) => {
    let inputValueInMeter = 0;
    if (inputUnitValue === "km") {
        inputValueInMeter = inputValue * 1000;
    }
    else if (inputUnitValue === "m") {
        inputValueInMeter = inputValue;
    }
    else if (inputUnitValue === "dm") {
        inputValueInMeter = inputValue * 0.1;
    }
    else if (inputUnitValue === "cm") {
        inputValueInMeter = inputValue * 0.01;
    }
    else if (inputUnitValue === "mm") {
        inputValueInMeter = inputValue * 0.001;
    }
    else if (inputUnitValue === "in") {
        inputValueInMeter = inputValue * 0.0254;
    }
    else if (inputUnitValue === "ft") {
        inputValueInMeter = inputValue * 0.3048;
    }
    else if (inputUnitValue === "yd") {
        inputValueInMeter = inputValue * 0.9144;
    }
    else if (inputUnitValue === "mi") {
        inputValueInMeter = inputValue * 1609.344;
    }
    return changeToChooseUnit(inputValueInMeter, outputUnitValue)
}

const changeToChooseUnit = (inputValueInMeter, outputUnitValue) => {
    let outputValue = 0;
    if (outputUnitValue === "km") {
        outputValue = inputValueInMeter * 0.001;
    }
    else if (outputUnitValue === "m") {
        outputValue = inputValueInMeter;
    }
    else if (outputUnitValue === "dm") {
        outputValue = inputValueInMeter * 10;
    }
    else if (outputUnitValue === "cm") {
        outputValue = inputValueInMeter * 100;
    }
    else if (outputUnitValue === "mm") {
        outputValue = inputValueInMeter * 1000;
    }
    else if (outputUnitValue === "in") {
        outputValue = inputValueInMeter * 39.3700787402;
    }
    else if (outputUnitValue === "ft") {
        outputValue = inputValueInMeter * 3.280839895;
    }
    else if (outputUnitValue === "yd") {
        outputValue = inputValueInMeter * 1.0936132983;
    }
    else if (outputUnitValue === "mi") {
        outputValue = inputValueInMeter * 0.0006213712;
    }
    document.querySelector('#output').textContent = outputValue;
}

const getValues = () => {
    if (isNaN(input.value)) {
        alert("Nieprawidłowa wartość")
    }
    else if (input.value === "") {
        document.querySelector('#output').textContent = "";
    }
    else {
        const inputValue = parseFloat(input.value);
        const inputUnitValue = inputUnit.value;
        const outputUnitValue = outputUnit.value;
        if (inputUnitValue === outputUnitValue) {
            document.querySelector('#output').textContent = "";
            return alert("nie można zamieniać na tą samą jednostkę")
        }
        return changeToMeter(inputValue, inputUnitValue, outputUnitValue)
    }
}
input.addEventListener('input', getValues)
inputUnit.addEventListener('change', getValues);
outputUnit.addEventListener('change', getValues)