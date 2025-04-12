
document.addEventListener("DOMContentLoaded", function () {
    const tempElement = document.getElementById("temp");
    const windElement = document.getElementById("wind");
    const windChillElement = document.getElementById("windchill");

    let temp = parseFloat(tempElement.textContent);
    let wind = parseFloat(windElement.textContent);

    function calculateWindChill(temp, wind) {
        if (temp > 10 || wind <= 4.8) {
            return "N/A"; 
        }

        let windChill = 13.12 + (0.6215 * temp) - (11.37 * Math.pow(wind, 0.16)) + (0.3965 * temp * Math.pow(wind, 0.16));
        return `${windChill.toFixed(2)} °C`;
    }

    windChillElement.textContent = calculateWindChill(temp, wind);
});
