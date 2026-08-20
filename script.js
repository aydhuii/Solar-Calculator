
//CALCUJLATOR CODE
function calculate() {

    calculateSolarSection();

    calculateBatterySection();

    calculateInverterSection();

    calculateControllerSection();

   
    updateInputSummary();

}

function updateInputSummary() {

    let energy =
        Number(document.getElementById("energy").value);

    let sunHours =
        Number(document.getElementById("sunHours").value);

    let efficiencyPercent =
        Number(document.getElementById("efficiency").value);

    let panelWattage =
        Number(document.getElementById("panelWattage").value);

    let autonomy =
        Number(document.getElementById("autonomy").value);

    let batteryVoltage =
        Number(document.getElementById("batteryVoltage").value);

    let dodPercent =
        Number(document.getElementById("dod").value);

    let batteryModule =
        Number(document.getElementById("batteryModule").value);

    let peakLoad =
        Number(document.getElementById("peakLoad").value);

    let surgeLoad =
        Number(document.getElementById("surgeLoad").value);

    let inverterMarginPercent =
        Number(document.getElementById("inverterMargin").value);

    let controllerMarginPercent =
        Number(document.getElementById("controllerMargin").value);

    document.getElementById("summaryEnergy").textContent =
        energy > 0 ? formatNumber(energy, 0) + " Wh/day" : "--";
        //show energy if > 0, show -- if else
    document.getElementById("summarySunHours").textContent =
        sunHours > 0 ? formatNumber(sunHours, 1) + " hours/day" : "--";

    document.getElementById("summaryEfficiency").textContent =
        efficiencyPercent > 0 ? formatNumber(efficiencyPercent, 1) + "%" : "--";

    document.getElementById("summaryPanelWattage").textContent =
        panelWattage > 0 ? formatNumber(panelWattage, 0) + " W" : "--";

    document.getElementById("summaryAutonomy").textContent =
        autonomy > 0 ? formatNumber(autonomy, 1) + " days" : "--";

    document.getElementById("summaryBatteryVoltage").textContent =
        batteryVoltage > 0 ? formatNumber(batteryVoltage, 1) + " V" : "--";

    document.getElementById("summaryDod").textContent =
        dodPercent > 0 ? formatNumber(dodPercent, 1) + "%" : "--";

    document.getElementById("summaryBatteryModule").textContent =
        batteryModule > 0 ? formatNumber(batteryModule, 0) + " Wh" : "--";

    document.getElementById("summaryPeakLoad").textContent =
        peakLoad > 0 ? formatNumber(peakLoad, 0) + " W" : "--";

    document.getElementById("summarySurgeLoad").textContent =
        surgeLoad > 0 ? formatNumber(surgeLoad, 0) + " W" : "--";

    document.getElementById("summaryInverterMargin").textContent =
        inverterMarginPercent > 0 ? formatNumber(inverterMarginPercent, 1) + "%" : "--";

    document.getElementById("summaryControllerMargin").textContent =
        controllerMarginPercent > 0 ? formatNumber(controllerMarginPercent, 1) + "%" : "--";
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

let batteryPresets = {

    "5120": {
        wh: 5120,
        voltage: 51.2,
        ah: 100
    },

    "10240": {
        wh: 10240,
        voltage: 51.2,
        ah: 200
    },

    "15360": {
        wh: 15360,
        voltage: 51.2,
        ah: 300
    }

};

function applyBatteryPreset() { 

    let selectedPreset =
        document.getElementById("batteryPreset").value;

    let batteryModuleInput =
        document.getElementById("batteryModule");

    let batteryVoltageInput =
        document.getElementById("batteryModuleVoltage");

    let batteryAhInput =
        document.getElementById("batteryModuleAh");

    if (selectedPreset === "custom") {

        batteryModuleInput.value = "";
        batteryVoltageInput.value = "";
        batteryAhInput.value = "";

        batteryModuleInput.focus();

        return;
    }

    let preset =
    batteryPresets[selectedPreset];

    batteryModuleInput.value =
        preset.wh;

    batteryVoltageInput.value =
        preset.voltage;

    batteryAhInput.value =
        preset.ah;
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
        "inverterMinimum",
        "inverterDesignTarget",
        "inverterRecommended",
        "inverterSurge",
        "inverterWarning",
        "controllerMinimum",
        "controllerDesignTarget",
        "controllerRecommended",
        "summaryEnergy",
        "summarySunHours",
        "summaryEfficiency",
        "summaryPanelWattage",
        "summaryAutonomy",
        "summaryBatteryVoltage",
        "summaryDod",
        "summaryBatteryModule",
        "summaryPeakLoad",
        "summarySurgeLoad",
        "summaryInverterMargin",
        "summaryControllerMargin",
        "batterySeries",
        "batteryParallel",
        "batteryConfiguredCount",
        "batteryConfiguredVoltage",
        "batteryConfiguredAh",
        "batteryConfiguredWh"
    ];

    resultIds.forEach(function(id) {
        let resultElement =
            document.getElementById(id);

        if (resultElement) {
            resultElement.textContent = "--";
        }
    });
    
    document.getElementById("errorMessage").textContent = "";

    let applianceContainer =
    document.getElementById("applianceRows");

    let applianceRows =
        applianceContainer.querySelectorAll(".appliance-row");

    applianceRows.forEach(function(row, index) {

        if (index > 0) {
            row.remove();
        }
    });

    let firstApplianceRow =
        applianceContainer.querySelector(".appliance-row");

    firstApplianceRow.querySelector(".appliance-name").value = "";
    firstApplianceRow.querySelector(".appliance-watts").value = "";
    firstApplianceRow.querySelector(".appliance-hours").value = "";
    firstApplianceRow.querySelector(".appliance-quantity").value = 1;
    firstApplianceRow.querySelector(".appliance-energy").textContent = "0 Wh";

    document.getElementById("loadBuilderTotal").textContent =
        "0 Wh/day";

    document.getElementById("appliancePreset").value =
        "";

    document.getElementById("applianceError").textContent =
        "";

    document.getElementById("batterySpecWarning").textContent =
        "";
}

function calculateApplianceLoad() {

    let rows =
        document.querySelectorAll(".appliance-row");

    let totalDailyLoad = 0;
    let hasApplianceError = false;

    let applianceError =
        document.getElementById("applianceError");

    rows.forEach(function(row) {

        let watts =
            Number(row.querySelector(".appliance-watts").value);

        let hours =
            Number(row.querySelector(".appliance-hours").value);

        let quantity =
            Number(row.querySelector(".appliance-quantity").value);

        let energyDisplay =
            row.querySelector(".appliance-energy"); //only search in this particular row

        let rowIsInvalid =
            watts < 0 ||
            hours < 0 ||
            hours > 24 ||
            quantity < 1;

        if (rowIsInvalid) {

            row.classList.add("appliance-error");

            energyDisplay.textContent = "--";

            hasApplianceError = true;

        } else {

            row.classList.remove("appliance-error");

            let applianceEnergy =
                watts * hours * quantity;

            energyDisplay.textContent =
                formatNumber(applianceEnergy, 0) + " Wh";

            totalDailyLoad += applianceEnergy;
        }
    });

    if (hasApplianceError) {

        applianceError.textContent =
            "Check your appliance values. Hours must be 0–24 and quantity must be at least 1.";

    } else {

        applianceError.textContent = "";
    }

    document.getElementById("loadBuilderTotal").textContent =
        totalDailyLoad.toLocaleString() + " Wh per day";

    return totalDailyLoad;
}


let applianceRows =
    document.getElementById("applianceRows");

applianceRows.addEventListener("input", function(event) {

    if (
        event.target.matches(".appliance-watts") ||
        event.target.matches(".appliance-hours") ||
        event.target.matches(".appliance-quantity")
    ) {
        calculateApplianceLoad();
    }

});

applianceRows.addEventListener("click", function(event) {

    if (event.target.matches(".remove-appliance")) {

        let rows =
            applianceRows.querySelectorAll(".appliance-row");

        if (rows.length > 1) {

            let row =
                event.target.closest(".appliance-row");

            row.remove();

            calculateApplianceLoad();
        }

    }

});


    

document.getElementById("useLoadTotal")
    .addEventListener("click", function() {

        let dailyLoad = calculateApplianceLoad();

        document.getElementById("energy").value = dailyLoad;
    });

document.getElementById("addAppliance")
    .addEventListener("click", function() {

        let container =
            document.getElementById("applianceRows");

        let firstRow =
            container.querySelector(".appliance-row");

        let newRow =
            firstRow.cloneNode(true); //copies html element, true copies everything inside
        newRow.querySelector(".appliance-name").value = "";
        newRow.querySelector(".appliance-watts").value = "";
        newRow.querySelector(".appliance-hours").value = "";
        newRow.querySelector(".appliance-quantity").value = 1;
        newRow.querySelector(".appliance-energy").textContent = "0 Wh";
        container.appendChild(newRow); //append child inserts copy into page

        calculateApplianceLoad();
    });

    let appliancePresets = {

         refrigerator: {
            name: "Refrigerator",
            watts: 150,
            hours: 8
        },

        ledLight: {
            name: "LED Light",
            watts: 10,
            hours: 5
        },

        laptop: {
            name: "Laptop",
            watts: 60,
            hours: 5
        },

        tv: {
            name: "Television",
            watts: 100,
            hours: 4
        },

        fan: {
            name: "Fan",
            watts: 50,
            hours: 8
        }
        
    };

        document.getElementById("appliancePreset")
            .addEventListener("change", function(event) {

                let selectedPreset = event.target.value;

                if (selectedPreset === "") {
                    return;
                }

                let preset =
                    appliancePresets[selectedPreset];

                let container =
                    document.getElementById("applianceRows");

                let firstRow =
                    container.querySelector(".appliance-row");

                let firstRowIsEmpty =
                    firstRow.querySelector(".appliance-name").value === "" &&
                    firstRow.querySelector(".appliance-watts").value === "" &&
                    firstRow.querySelector(".appliance-hours").value === "";

                let targetRow;

                    if (firstRowIsEmpty) {

                        targetRow = firstRow;

                    } else {

                        targetRow = firstRow.cloneNode(true);

                        targetRow.querySelector(".appliance-name").value = "";
                        targetRow.querySelector(".appliance-watts").value = "";
                        targetRow.querySelector(".appliance-hours").value = "";
                        targetRow.querySelector(".appliance-quantity").value = 1;
                        targetRow.querySelector(".appliance-energy").textContent = "0 Wh";

                        container.appendChild(targetRow);
                            }
                    targetRow.querySelector(".appliance-name").value =
                        preset.name;

                    targetRow.querySelector(".appliance-watts").value =
                        preset.watts;

                    targetRow.querySelector(".appliance-hours").value =
                        preset.hours;

                    targetRow.querySelector(".appliance-quantity").value =
                        1;
                    calculateApplianceLoad();

                        event.target.value = "";
            });
                        
function calculateSolarSection() {

    let energy =
        Number(document.getElementById("energy").value);

    let sunHours =
        Number(document.getElementById("sunHours").value);

    let efficiencyPercent =
        Number(document.getElementById("efficiency").value);

    let panelWattage =
        Number(document.getElementById("panelWattage").value);

    let solarWarning =
        document.getElementById("solarWarning");

    let missingSolarFields = [];

    if (energy <= 0) {
        missingSolarFields.push("Daily Energy Usage");
    }

    if (sunHours <= 0) {
        missingSolarFields.push("Peak Sun Hours");
    }

    if (efficiencyPercent <= 0) {
        missingSolarFields.push("System Efficiency");
    }

    if (panelWattage <= 0) {
        missingSolarFields.push("Panel Wattage");
    }

    if (missingSolarFields.length > 0) {

        solarWarning.textContent =
            "REQUIRED: " +
            missingSolarFields.join(", ") +
            ".";

        return;
    }

    if (efficiencyPercent > 100) {

        solarWarning.textContent =
            "System efficiency must be between 1 and 100 percent.";

        return;
    }

    solarWarning.textContent = "";

    let efficiency =
        efficiencyPercent / 100;

    let solarArray =
        energy / (sunHours * efficiency);

    let numberOfPanels =
        Math.ceil(
            solarArray / panelWattage
        );

    document.getElementById("pvStringPanelCount").value =
        numberOfPanels;
    
    let installedSolarCapacityW =
        numberOfPanels * panelWattage;

    document.getElementById("controllerPvCapacity").value =
    installedSolarCapacityW;

    let solarCapacityMarginW =
        installedSolarCapacityW - solarArray;

    let solarCapacityMarginPercent =
        (solarCapacityMarginW / solarArray) * 100;

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

}
   
document.getElementById("calculateSolarOnly")
    .addEventListener("click", function() {

        calculateSolarSection();

    });

function calculateBatterySection() {

    let energy =
        Number(document.getElementById("energy").value);

    let autonomy =
        Number(document.getElementById("autonomy").value);

    let dodPercent =
        Number(document.getElementById("dod").value);

    let batteryVoltage =
        Number(document.getElementById("batteryVoltage").value);

    let batteryWarning =
        document.getElementById("batteryWarning");

    let batteryModule =
        Number(document.getElementById("batteryModule").value);

    let batteryModuleVoltage =
        Number(document.getElementById("batteryModuleVoltage").value);

    let batteryModuleAh =
        Number(document.getElementById("batteryModuleAh").value);

    let batteryInputs = [
        energy,
        autonomy,
        dodPercent,
        batteryVoltage
    ];
    

    let hasInvalidBatteryInput =
        batteryInputs.some(function(value) {
            return Number.isNaN(value) || value <= 0;
        });

    let missingBatteryFields = [];

    if (energy <= 0) {
        missingBatteryFields.push("Daily Energy Usage");
    }

    if (autonomy <= 0) {
        missingBatteryFields.push("Autonomy");
    }

    if (dodPercent <= 0) {
        missingBatteryFields.push("Depth of Discharge");
    }

    if (batteryVoltage <= 0) {
        missingBatteryFields.push("Battery Voltage");
    }

    if (missingBatteryFields.length > 0) {

        batteryWarning.textContent =
            "Required: " +
            missingBatteryFields.join(", ") +
            ".";

        return;
    }

    batteryWarning.textContent = "";

    let dod =
    dodPercent / 100;

    let batteryCapacityWh =
        (energy * autonomy) / dod;

    let batteryCapacityAh =
        batteryCapacityWh / batteryVoltage;

    let moduleValues = [
        batteryModule,
        batteryModuleVoltage,
        batteryModuleAh
    ];

    let filledModuleValues =
        moduleValues.filter(function(value) {   //createws a list containing balues that meet a condition
            return value > 0;
        }).length;

    if (
        filledModuleValues > 0 &&
        filledModuleValues < 3
    ) {

        batteryWarning.textContent =
            "For battery configuration, enter Module Wh, Voltage, and Ah.";

        return;
    }

    let advancedBatteryResultIds = [
        "batteryCount",
        "installedBatteryWh",
        "batteryMargin",
        "batterySeries",
        "batteryParallel",
        "batteryConfiguredCount",
        "batteryConfiguredVoltage",
        "batteryConfiguredAh",
        "batteryConfiguredWh"
    ];

    advancedBatteryResultIds.forEach(function(id) {

        document.getElementById(id).textContent = "---";

    });

    if (filledModuleValues === 3) {
        let calculatedModuleWh =
            batteryModuleVoltage * batteryModuleAh;

        let moduleWhDifference =
            Math.abs(
                batteryModule - calculatedModuleWh
            );

        let moduleWhDifferencePercent =
            (moduleWhDifference / batteryModule) * 100;

        if (moduleWhDifferencePercent > 5) {

            batteryWarning.textContent =
                "Battery specifications don't match. Check the Module Wh, Voltage, and Ah.";

            return;
        }

            let modulesInSeries =
                Math.max(
                    1,
                    Math.round(
                        batteryVoltage /
                        batteryModuleVoltage
                    )
                );

            let configuredBankVoltage =
                modulesInSeries *
                batteryModuleVoltage;

            let parallelStrings =
                Math.ceil(
                    batteryCapacityAh /
                    batteryModuleAh
                );

            let configuredBatteryCount =
                modulesInSeries *
                parallelStrings;

            let configuredBankAh =
                parallelStrings *
                batteryModuleAh;

            let configuredBankWh =
                configuredBankVoltage *
                configuredBankAh;

            let batteryCapacityMarginWh =
                configuredBankWh -
                batteryCapacityWh;

            let batteryCapacityMarginPercent =
                (batteryCapacityMarginWh /
                batteryCapacityWh) * 100;

            document.getElementById("batteryCount").textContent =
                formatNumber(configuredBatteryCount, 0) +
                " batteries";

            document.getElementById("installedBatteryWh").textContent =
                formatNumber(configuredBankWh, 0) +
                " Wh (" +
                formatNumber(configuredBankWh / 1000, 2) +
                " kWh)";

            document.getElementById("batteryMargin").textContent =
                formatNumber(batteryCapacityMarginWh, 0) +
                " Wh above required (" +
                formatNumber(batteryCapacityMarginPercent, 1) +
                "%)";

            document.getElementById("batterySeries").textContent =
                formatNumber(modulesInSeries, 0) +
                " modules in series";

            document.getElementById("batteryParallel").textContent =
                formatNumber(parallelStrings, 0) +
                " parallel strings";

            document.getElementById("batteryConfiguredCount").textContent =
                formatNumber(configuredBatteryCount, 0) +
                " total modules";

            document.getElementById("batteryConfiguredVoltage").textContent =
                formatNumber(configuredBankVoltage, 1) +
                " V configured bank";

            document.getElementById("batteryConfiguredAh").textContent =
                formatNumber(configuredBankAh, 1) +
                " Ah installed";

            document.getElementById("batteryConfiguredWh").textContent =
                formatNumber(configuredBankWh, 0) +
                " Wh (" +
                formatNumber(configuredBankWh / 1000, 2) +
                " kWh)";
    
    }   

    

    batteryWarning.textContent = "";


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


    
}

document.getElementById("calculateBatteryOnly")
    .addEventListener("click", function() {

        calculateBatterySection();

    });

function calculateInverterSection() {

    let peakLoad =
        Number(document.getElementById("peakLoad").value);

    let surgeLoad =
        Number(document.getElementById("surgeLoad").value);

    let inverterMarginPercent =
        Number(document.getElementById("inverterMargin").value);

    let inverterWarning =
        document.getElementById("inverterSectionWarning");

    let inverterInputs = [
        peakLoad,
        surgeLoad,
        inverterMarginPercent
    ];

    let hasInvalidInverterInput =
        inverterInputs.some(function(value) {
            return Number.isNaN(value) || value <= 0;
        });

    let missingInverterFields = [];

    if (peakLoad <= 0) {
        missingInverterFields.push("Peak Continuous Load");
    }

    if (surgeLoad <= 0) {
        missingInverterFields.push("Peak Surge Load");
    }

    if (inverterMarginPercent <= 0) {
        missingInverterFields.push("Inverter Safety Margin");
    }

    if (missingInverterFields.length > 0) {

        inverterWarning.textContent =
            "Required: " +
            missingInverterFields.join(", ") +
            ".";

        return;
    }

    if (surgeLoad < peakLoad) {

        inverterWarning.textContent =
            "Peak surge load cannot be lower than peak continuous load.";

        return;
    }

    inverterWarning.textContent = "";

    let inverterMargin =
        inverterMarginPercent / 100;

    let minimumInverterW =
        peakLoad;

    let inverterDesignTargetW =
        peakLoad * (1 + inverterMargin);

    let inverterRoundingIncrementW =
        250;

    let recommendedInverterW =
        Math.ceil(
            inverterDesignTargetW /
            inverterRoundingIncrementW
        ) * inverterRoundingIncrementW;

    let inverterResultWarning =
        document.getElementById("inverterWarning");

    if (inverterMarginPercent > 100) {

        inverterWarning.textContent =
            "Inverter safety margin must be between 1 and 100 percent.";

        return;
    }

     if (inverterMarginPercent < 20) {

        inverterResultWarning.textContent =
            "Warning: The selected continuous-load safety margin is below 20%.";

    } else if (surgeLoad > recommendedInverterW) {

        inverterResultWarning.textContent =
            "Check that the selected inverter can provide at least " +
            formatNumber(surgeLoad, 0) +
            " W of short-term surge output.";

    } else {

        inverterResultWarning.textContent =
            "The entered surge requirement doesn't exceed the rounded continuous recommendation.";
    }

    document.getElementById("inverterMinimum").textContent =
        formatNumber(minimumInverterW, 0) +
        " W minimum continuous rating";

    document.getElementById("inverterDesignTarget").textContent =
        formatNumber(inverterDesignTargetW, 0) +
        " W calculated design target";

    document.getElementById("inverterRecommended").textContent =
        formatNumber(recommendedInverterW, 0) +
        " W rounded recommendation";

    document.getElementById("inverterSurge").textContent =
        formatNumber(surgeLoad, 0) +
        " W required surge rating";

   

}

document.getElementById("calculateInverterOnly")
    .addEventListener("click", function() {

        calculateInverterSection();

    });


function calculateControllerSection() {

    let pvCapacity =
        Number(
            document.getElementById("controllerPvCapacity").value
        );


    let batteryVoltage =
        Number(
            document.getElementById("batteryVoltage").value
        );

    let controllerMarginPercent =
        Number(
            document.getElementById("controllerMargin").value
        );

    let controllerWarning =
        document.getElementById("controllerSectionWarning");

    let missingControllerFields = []; //empty array

    if (pvCapacity <= 0) {
        missingControllerFields.push("Installed PV Capacity");
    }

    if (batteryVoltage <= 0) {
        missingControllerFields.push("Battery Voltage");
    }

    if (controllerMarginPercent <= 0) {
        missingControllerFields.push("Controller Safety Margin");
    }

    if (missingControllerFields.length > 0) {

        controllerWarning.textContent =
            "REQUIRED: " +
            missingControllerFields.join(", ") +
            ".";

        return;
    }

    

    if (controllerMarginPercent > 100) {

        controllerWarning.textContent =
            "Controller safety margin must be between 1 and 100 percent.";

        return;
    }

    controllerWarning.textContent = "";

    let controllerMargin =
        controllerMarginPercent / 100;

    let controllerMinimumA =
        pvCapacity / batteryVoltage;

    let controllerDesignTargetA =
        controllerMinimumA *
        (1 + controllerMargin);

    let controllerRoundingIncrementA =
        10;

    let recommendedControllerA =
        Math.ceil(
            controllerDesignTargetA /
            controllerRoundingIncrementA
        ) * controllerRoundingIncrementA;

        document.getElementById("controllerMinimum").textContent =
        formatNumber(controllerMinimumA, 1) +
        " A minimum output current";

    document.getElementById("controllerDesignTarget").textContent =
        formatNumber(controllerDesignTargetA, 1) +
        " A calculated design target";

    document.getElementById("controllerRecommended").textContent =
        formatNumber(recommendedControllerA, 0) +
        " A rounded recommendation";


}

document.getElementById("calculateControllerOnly")
    .addEventListener("click", function() {

        calculateControllerSection();

    });

function calculatePvStringSection() {

    let panelVoc =
        Number(document.getElementById("panelVoc").value);

    let panelVmp =
        Number(document.getElementById("panelVmp").value);

    let controllerMaxPvVoltage =
        Number(document.getElementById("controllerMaxPvVoltage").value);

    let minDesignTemp =
        Number(document.getElementById("minDesignTemp").value);

    let vocTempCoeff =
        Number(document.getElementById("vocTempCoeff").value);

    let pvStringWarning =
        document.getElementById("pvStringWarning");

    let totalPanels =
        Number(document.getElementById("pvStringPanelCount").value);

    let missingPvFields = [];

    if (panelVoc <= 0) {
        missingPvFields.push("Panel Voc");
    }

    if (panelVmp <= 0) {
        missingPvFields.push("Panel Vmp");
    }

    if (controllerMaxPvVoltage <= 0) {
        missingPvFields.push("Controller Max PV Voltage");
    }

    if (
        document.getElementById("minDesignTemp").value === ""
    ) {
        missingPvFields.push("Minimum Design Temperature");
    }

    if (
        document.getElementById("vocTempCoeff").value === ""
    ) {
        missingPvFields.push("Voc Temperature Coefficient");
    }

    if (missingPvFields.length > 0) {

        pvStringWarning.textContent =
            "Required: " +
            missingPvFields.join(", ") +
            ".";

        return;
    }

    if (panelVoc <= panelVmp) {

        pvStringWarning.textContent =
            "Panel Voc must be greater than Panel Vmp.";

        return;
    }

    if (totalPanels <= 0) {
    
        missingPvFields.push("Total Number of Panels");

    }

    if (!Number.isInteger(totalPanels)) {

        pvStringWarning.textContent =
            "Total Number of Panels must be a whole number.";

        return;
    } //make sure its a whole number

    pvStringWarning.textContent = "";

    let temperatureDifference =
    Math.max(
        0,
        25 - minDesignTemp
    );

    let vocCoefficientDecimal =
    Math.abs(vocTempCoeff) / 100;

    let correctedPanelVoc =
    panelVoc *
    (
        1 +
        vocCoefficientDecimal *
        temperatureDifference
    );

    let maxPanelsPerString =
    Math.floor(
        controllerMaxPvVoltage /
        correctedPanelVoc
    );

    let panelsPerString = 0;

    for (
        let panels = maxPanelsPerString;
        panels >= 1;
        panels--
    ) {

        if (totalPanels % panels === 0) { //% finds remainder

            panelsPerString = panels;

            break;
        }
    }

    let numberOfStrings =
        totalPanels / panelsPerString;

    let estimatedStringVmp =
        panelsPerString * panelVmp;

    let estimatedStringVmp =
        maxPanelsPerString *
        panelVmp;

    document.getElementById("correctedPanelVoc").textContent =
        formatNumber(correctedPanelVoc, 2) +
        " V";

    document.getElementById("maxPanelsPerString").textContent =
        formatNumber(maxPanelsPerString, 0) +
        " panels";

    document.getElementById("stringVmp").textContent =
        formatNumber(estimatedStringVmp, 1) +
        " V";

    document.getElementById("suggestedPanelsPerString").textContent =
        formatNumber(panelsPerString, 0) +
        " panels/string";

    document.getElementById("numberOfPvStrings").textContent =
        formatNumber(numberOfStrings, 0) +
        " strings";

}

document.getElementById("calculatePvStringOnly")
    .addEventListener("click", function() {

        calculatePvStringSection();

    });