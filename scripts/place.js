const temperature = 20; 
const windSpeed = 14; 

function calculateWindChill(temp, wind) { 
    return 13.12 + (0.6215 * temp) - (11.37 * Math.pow(wind, 0.16)) + (0.3965 * temp * Math.pow(wind, 0.16));
}

function updateWindChill() {
    let windChillFactor = 'N/A';

    if (temperature <= 10 && windSpeed > 4.8) {
        windChillFactor = calculateWindChill(temperature, windSpeed).toFixed(1) + '°C'; 
    }

    document.getElementById("windchill").textContent = windChillFactor;
}

window.onload = updateWindChill;