const currentYear = new Date().getFullYear();

document.getElementById("copyright").innerText = `© ${currentYear}`;

const lastModified = document.lastModified;

document.getElementById("lastModified").innerText = `Last Modified: ${lastModified}`;
