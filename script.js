
//CALCUJLATOR CODE
function calculate() {

    //INPUT VALUES

    let energy = 
        Number(document.getElementById("energy").value);

    let sunHours = 
        Number(document.getElementById("sunHours").value);

    let efficiencyPercent =
    parseFloat(document.getElementById("efficiency").value);

    let dodPercent =
    parseFloat(document.getElementById("dod").value);

    let panelWattage = 
        Number(document.getElementById("panelWattage").value);

    let autonomy =
        Number(document.getElementById("autonomy").value);

    let batteryVoltage =
        Number(document.getElementById("batteryVoltage").value);

    let batteryModule = 
        Number(document.getElementById("batteryModule").value);

    let errorMessage = 
        document.getElementById("errorMessage");

    let peakLoad =
    Number(document.getElementById("peakLoad").value);

    let surgeLoad =
    Number(document.getElementById("surgeLoad").value);

    let inverterMarginPercent =
    Number(document.getElementById("inverterMargin").value);

    let inverterWarning =
    document.getElementById("inverterWarning");

    
    //create input array

    let inputValues = [
        energy,
        sunHours,
        efficiencyPercent,
        panelWattage,
        autonomy,
        batteryVoltage,
        dodPercent,
        batteryModule,
        peakLoad,
        surgeLoad,
        inverterMarginPercent
    ];

    let hasInvalidInput = 
        inputValues.some(function(value) {
            return Number.isNaN(value) || value <= 0;
        });

    //CHECK INPUTS BEFORE CALCULATING

    if (hasInvalidInput) {
        errorMessage.textContent = 
        "Please enter a positive value in every field.";

        return;
    }

    if (
        efficiencyPercent > 100 ||
        dodPercent > 100 
    ) {
        errorMessage.textContent = 
        "Please enter a value between 1 and 100 for efficiency or depth of discharge."

        return;
    }

    if (inverterMarginPercent > 100) {
        errorMessage.textContent = 
            "The inverter safety margin needs to be between 1 and 100 percent.";

        return;
    }

    if (surgeLoad < peakLoad) {
        errorMessage.textContent = 
            "The peak surge load can't be lower than the peak continuous load"

        return;
    }




     errorMessage.textContent = "";
     


    //convert percentages to decimals
    let efficiency =
    efficiencyPercent / 100;

    let dod =
    dodPercent / 100;

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

    let inverterMargin = 
        inverterMarginPercent / 100;
    
    let minimumInverterW =           //absolute min continuous output needed to power expected load.
        peakLoad;
    
    let inverterDesignTargetW =
        peakLoad * (1 + inverterMargin);
        
    let inverterRoundingIncrementW = 
        250;

    let recommendedInverterW =              //round upwards in 250W increments
        Math.ceil(
            inverterDesignTargetW /
            inverterRoundingIncrementW 
        ) * inverterRoundingIncrementW;

    //INVERTER WARNING
    if (inverterMarginPercent < 20) {
        inverterWarning.textContent =
            "Warning: The selected continuous-load safety margin is below 20%.";
    } else if (surgeLoad > recommendedInverterW) {
        inverterWarning.textContent =
            "Check that the selected inverter can provide at least " +
            formatNumber(surgeLoad, 0) +
            " W of short-term surge output.";
    } else {
        inverterWarning.textContent =
            "The entered surge requirement doesn't exceed the rounded continuous recommendation.";
    }

    //RESULTS

    document.getElementById("solarSize").textContent =
    formatNumber(solarArray, 0) +
    " W (" +
    formatNumber(solarArray / 1000, 2) +
    " kW)";

    document.getElementById("panelCount").textContent =
        formatNumber(numberOfPanels, 0) +
        " panels";

    document.getElementById("installedSolarW").textContent =
        formatNumber(installedSolarCapacityW, 0) +
        " W (" +
        formatNumber(installedSolarCapacityW / 1000, 2) +
        " kW)";

    document.getElementById("solarMargin").textContent =
        formatNumber(solarCapacityMarginW, 0) +
        " W above required (" +
        formatNumber(solarCapacityMarginPercent, 1) +
        "%)";

    document.getElementById("batteryWh").textContent =
        formatNumber(batteryCapacityWh, 0) +
        " Wh (" +
        formatNumber(batteryCapacityWh / 1000, 2) +
        " kWh)";

    document.getElementById("batteryAh").textContent =
        formatNumber(batteryCapacityAh, 1) +
        " Ah at " +
        formatNumber(batteryVoltage, 0) +
        " V";

    document.getElementById("batteryCount").textContent =
        formatNumber(numberOfBatteries, 0) +
        " batteries";

    document.getElementById("installedBatteryWh").textContent =
        formatNumber(installedBatteryCapacityWh, 0) +
        " Wh (" +
        formatNumber(installedBatteryCapacityWh / 1000, 2) +
        " kWh)";

    document.getElementById("batteryMargin").textContent =
        formatNumber(batteryCapacityMarginWh, 0) +
        " Wh above required (" +
        formatNumber(batteryCapacityMarginPercent, 1) +
        "%)";
    
    document.getElementById("summaryEnergy").textContent =
    formatNumber(energy, 0) +
    " Wh/day";

    document.getElementById("summarySunHours").textContent =
        formatNumber(sunHours, 1) +
        " hours/day";

    document.getElementById("summaryEfficiency").textContent =
        formatNumber(efficiencyPercent, 1) +
        "%";

    document.getElementById("summaryPanelWattage").textContent =
        formatNumber(panelWattage, 0) +
        " W";

    document.getElementById("summaryAutonomy").textContent =
        formatNumber(autonomy, 1) +
        " days";

    document.getElementById("summaryBatteryVoltage").textContent =
        formatNumber(batteryVoltage, 0) +
        " V";

    document.getElementById("summaryDod").textContent =
        formatNumber(dodPercent, 1) +
        "%";

    document.getElementById("summaryBatteryModule").textContent =
        formatNumber(batteryModule, 0) +
        " Wh";

    document.getElementById("inverterMinimum").textContent = 
        formatNumber(minimumInverterW, 0) +
        "W minimum continous rating";

    document.getElementById("inverterDesignTarget").textContent = 
        formatNumber(inverterDesignTargetW, 0) + 
        "W calculated design target";

    document.getElementById("inverterRecommended").textContent = 
        formatNumber(recommendedInverterW, 0) + 
        "W rounded recommendation";

    document.getElementById("inverterSurge").textContent = 
        formatNumber(surgeLoad, 0) + 
        "W required surge rating"

    document.getElementById("summaryPeakLoad").textContent =
        formatNumber(peakLoad, 0) +
        " W";

    document.getElementById("summarySurgeLoad").textContent =
        formatNumber(surgeLoad, 0) +
        " W";

    document.getElementById("summaryInverterMargin").textContent =
        formatNumber(inverterMarginPercent, 1) +
        "%";
}

function syncPanelPreset() {
    let panelValue =
        document.getElementById("panelWattage").value;

    let panelPreset =
        document.getElementById("panelPreset");

    let presetValues = [
        "400",
        "450",
        "500",
        "550"
    ];

    if (presetValues.includes(panelValue)) {
        panelPreset.value = panelValue;
    } else {
        panelPreset.value = "custom";
    }
}

function formatNumber(value, decimals = 0) {
    return value.toLocaleString("en-US", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals
    });
}

function syncBatteryPreset() {
    let batteryValue =
        document.getElementById("batteryModule").value;

    let batteryPreset =
        document.getElementById("batteryPreset");

    let presetValues = [
        "5120",
        "10240",
        "15360"
    ];

    if (presetValues.includes(batteryValue)) {
        batteryPreset.value = batteryValue;
    } else {
        batteryPreset.value = "custom";
    }
}   

//BATTERY PRESET CODE

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

//PANEL PRESET CODE
function applyPanelPreset() {
    let selectedWattage =
        document.getElementById("panelPreset").value;

    let panelWattageInput =
        document.getElementById("panelWattage");

    if (selectedWattage === "custom") {
        panelWattageInput.value = "";
        panelWattageInput.focus();
        return;
    }

    panelWattageInput.value = selectedWattage;
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

    document.getElementById("panelPreset").value =
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
        "batteryMargin",
        "summaryEnergy",
        "summarySunHours",
        "summaryEfficiency",
        "summaryPanelWattage",
        "summaryAutonomy",
        "summaryBatteryVoltage",
        "summaryDod",
        "summaryBatteryModule",
        "inverterMinimum",
        "inverterDesignTarget",
        "inverterRecommended",
        "inverterSurge",
        "inverterWarning",
        "summaryPeakLoad",
        "summarySurgeLoad",
        "summaryInverterMargin"
    ];

    resultIds.forEach(function(id) {
        let resultElement =
            document.getElementById(id);

        if (resultElement) {
            resultElement.textContent = "--";
        }
    });
    
    document.getElementById("errorMessage").textContent = "";
}





