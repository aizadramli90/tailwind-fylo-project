const darkId = document.getElementById('dark-id');
const toLight = document.getElementById('to-light');
const toDark = document.getElementById('to-dark');

toLight.addEventListener('click', toLightToggle);
toDark.addEventListener('click', toDarkToggle);

function toLightToggle() {
    darkId.classList.remove('dark');  
}

function toDarkToggle() {
    darkId.classList.add('dark')
}
