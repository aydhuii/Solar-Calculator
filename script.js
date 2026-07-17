function calculate() {
    
    let energy = 
        Number(document.getElementById("energy").value);

    let sunHours = 
        Number(document.getElementById("sunHours").value);

    let efficiency =
        Number(document.getElementById("efficiency").value) / 100;

    let solarArray = 
        energy / (sunHours * efficiency);

    document.getElementById("result").innerHTML =
        "Daily Energy Usage: " + energy + " Wh<br><br>" +
        "Peak Sun Hours: " + sunHours + " hours<br><br>" +
        "System Efficiency: " + (efficiency * 100).toFixed(0) + "%<br><br>" +

        "Here is your required Solar Array Size:<br><br>" +
        solarArray.toFixed(0) + 
        " Watts (" + 
        (solarArray / 1000).toFixed(2) + 
        " kW)";

}