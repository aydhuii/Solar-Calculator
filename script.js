

//CALCUJLATOR CODE
function calculate() {

    //INPUT VALUES

    let energy = 
        Number(document.getElementById("energy").value);

    let sunHours = 
        Number(document.getElementById("sunHours").value);

    let efficiency =
        Number(document.getElementById("efficiency").value) / 100;

    let panelWattage = 
        Number(document.getElementById("panelWattage").value);


    let autonomy =
        Number(document.getElementById("autonomy").value);

    let batteryVoltage =
        Number(document.getElementById("batteryVoltage").value);

    let dod =
        Number(document.getElementById("dod").value) / 100;

    let batteryModule = 
        Number(document.getElementById("batteryModule").value);

    let errorMessage = 
        document.getElementById("errorMessage");

    //CHECK INPUTS BEFORE CALCULATING

     if (
        energy <= 0 ||
        sunHours <= 0 ||
        efficiency <= 0 ||
        autonomy <= 0 ||
        batteryVoltage <= 0 ||
        dod <= 0 ||
        panelWattage <= 0 ||
        batteryModule <= 0 
     )  {
        errorMessage.textContent =
            "Please enter a positive value in every field";
    
        return;
    } 

    errorMessage.textContent = "";
    //CALCULATIONS

    let solarArray = 
        energy / (sunHours * efficiency);

    let numberOfPanels = 
        Math.ceil(solarArray / panelWattage);

    let installedSolarCapacityW = 
        numberOfPanels * panelWattage;

    let solarCapacityMarginW =
        installedSolarCapacityW - solarArray;

    let solarCapacityMarginPercent = 
        (solarCapacityMarginW / solarArray) * 100;

    let batteryCapacityWh =
        (energy * autonomy) / dod;

    let batteryCapacityAh = 
        batteryCapacityWh / batteryVoltage;

    let numberOfBatteries = 
        Math.ceil(batteryCapacityWh / batteryModule);

    let installedBatteryCapacityWh =
        numberOfBatteries * batteryModule;

    let batteryCapacityMarginWh =
        installedBatteryCapacityWh - batteryCapacityWh;
        
    let batteryCapacityMarginPercent = 
        (batteryCapacityMarginWh / batteryCapacityWh) * 100;
    //RESULTS

    document.getElementById("solarSize").textContent = 
        (solarArray / 1000).toFixed(2) + " kW";

    document.getElementById("panelCount").textContent = 
        numberOfPanels + " panels";

    document.getElementById("batteryWh").textContent = 
        batteryCapacityWh.toFixed(0) + " Wh";

    document.getElementById("batteryAh").textContent = 
        batteryCapacityAh.toFixed(1) + " Ah";

    document.getElementById("batteryCount").textContent =
        numberOfBatteries + " batteries";

    document.getElementById("installedBatteryWh").textContent =
        installedBatteryCapacityWh.toFixed(0) +
        " Wh (" +
        (installedBatteryCapacityWh / 1000).toFixed(2) +
        " kWh)";

    document.getElementById("batteryMargin").textContent =
        batteryCapacityMarginWh.toFixed(0) +
        " Wh above the required (" + 
        batteryCapacityMarginPercent.toFixed(1) +
        "%)";

    document.getElementById("installedSolarW").textContent =
        installedSolarCapacityW.toFixed(0) +
        " W (" + 
        (installedSolarCapacityW / 1000).toFixed(2) +
        " kW)";

    document.getElementById("solarMargin").textContent = 
        solarCapacityMarginW.toFixed(0) + 
        " W above required (" +
        solarCapacityMarginPercent.toFixed(1) + 
        "%)";

   
        
}

//PRESET CODE

function applyBatteryPreset() { 
    let selectedCapacity = 
        document.getElementById("batteryPreset").value;

    let batteryModuleInput = 
        document.getElementById("batteryModule");

    if (selectedCapacity === "custom") {
        batteryModuleInput.value = "";
        batteryModuleInput.focus();
        return;
    }

    batteryModuleInput.value = selectedCapacity;
}

//reset button
function resetCalculator() {
    let numberInputs =
        document.querySelectorAll('input[type="number"]');

    numberInputs.forEach(function(input) {
        input.value = "";
    });

    document.getElementById("batteryPreset").value =
        "custom";

    let resultIds = [
        "solarSize",
        "panelCount",
        "installedSolarW",
        "solarMargin",
        "batteryWh",
        "batteryAh",
        "batteryCount",
        "installedBatteryWh",
        "batteryMargin"
    ];

    resultIds.forEach(function(id) {
        let resultElement =
            document.getElementById(id);

        if (resultElement) {
            resultElement.textContent = "--";
        }
    });
}





