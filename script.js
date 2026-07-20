function calculate() {

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

    let solarArray = 
        energy / (sunHours * efficiency);

    let numberOfPanels = 
        Math.ceil(solarArray / panelWattage);

    let batteryCapacityWh =
        (energy * autonomy) / dod;

    let batteryCapacityAh = 
        batteryCapacityWh / batteryVoltage;

     if (
        energy <= 0 ||
        sunHours <= 0 ||
        efficiency <= 0 ||
        autonomy <= 0 ||
        batteryVoltage <= 0 ||
        dod <= 0 ||
        panelWattage <= 0 
    ) {
        alert("Please enter valid positive values for all fields.");
        return;
    }

    document.getElementById("result").innerHTML =
    "Daily Energy Usage: " + energy + " Wh<br><br>" +
    "Peak Sun Hours: " + sunHours + " hours<br><br>" +
    "System Efficiency: " + (efficiency * 100).toFixed(0) + "%<br><br>" +

    document.getElementById("solarSize").textContent = 
    (solarArray / 1000).toFixed(2) + " kW";

    document.getElementById("panelCount").textContent = 
    numberOfPanels + " panels";

    document.getElementById("batteryWh").textContent = 
    batteryCapacityWh.toFixed(0) + " Wh";

    document.getElementById("batteryAh").textContent = 
    batteryCapacityAh.toFixed(1) + " Ah";





}