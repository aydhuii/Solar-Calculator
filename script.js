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
        alert("Please enter valid positive values for all fields.");
        return;
    } 

    //CALCULATIONS

    let solarArray = 
        energy / (sunHours * efficiency);

    let numberOfPanels = 
        Math.ceil(solarArray / panelWattage);

    let batteryCapacityWh =
        (energy * autonomy) / dod;

    let batteryCapacityAh = 
        batteryCapacityWh / batteryVoltage;

    let numberOfBatteries = 
        Math.ceil(batteryCapacityWh / batteryModule);

        
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





}