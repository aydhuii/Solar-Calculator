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


    document.getElementById("result").innerHTML =
    "Daily Energy Usage: " + energy + " Wh<br><br>" +
    "Peak Sun Hours: " + sunHours + " hours<br><br>" +
    "System Efficiency: " + (efficiency * 100).toFixed(0) + "%<br><br>" +

    "<strong>Solar Array Size:</strong><br>" +
    (solarArray / 1000).toFixed(2) + " kW (" +
    solarArray.toFixed(0) + " Watts)<br><br>" +

     "<strong>Solar Panels Required:</strong><br>" + 
    numberOfPanels + " panels of " + panelWattage + " Watts each";

    "<strong>Battery Capacity:</strong><br>" +
    batteryCapacityWh.toFixed(0) + " Wh<br>" +

    batteryCapacityAh.toFixed(1) + " Ah";





}