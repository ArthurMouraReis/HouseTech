// Selecionando os elementos do DOM
const lampOnButton = document.getElementById('lampOn');
const lampOffButton = document.getElementById('lampOff');
const lampStatus = document.getElementById('lampStatus');

const thermoOnButton = document.getElementById('thermoOn');
const thermoOffButton = document.getElementById('thermoOff');
const thermoStatus = document.getElementById('thermoStatus');

// Funções para controlar a lâmpada
function turnLampOn() {
    lampStatus.textContent = 'Status: Ligada';
}

function turnLampOff() {
    lampStatus.textContent = 'Status: Desligada';
}

// Funções para controlar o termostato
function turnThermoOn() {
    thermoStatus.textContent = 'Status: Ligado';
}

function turnThermoOff() {
    thermoStatus.textContent = 'Status: Desligado';
}

// Adicionando eventos aos botões
lampOnButton.addEventListener('click', turnLampOn);
lampOffButton.addEventListener('click', turnLampOff);

thermoOnButton.addEventListener('click', turnThermoOn);
thermoOffButton.addEventListener('click', turnThermoOff);
