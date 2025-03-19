const currentyear = new Date().getFullYear();
document.getElementById("currentyear").textContent = `©${currentyear}`;

let lastmodify = new Date(document.lastModified);
document.getElementById("lastmodify").textContent = `Last Modified: ${lastmodify}`;