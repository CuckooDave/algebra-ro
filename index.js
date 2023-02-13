const dateElement = document.querySelector("#date");

const dns = new Date();

dateElement.innerHTML = dns.toLocaleString();

console.log("Hello world!");