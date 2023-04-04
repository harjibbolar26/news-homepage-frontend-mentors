const openHam = document.getElementById('ham-open');
const closeHam = document.getElementById('ham-close');
const menuContainer = document.querySelector('.ham-container');
const menuItem = document.querySelector('.menuItem');

openHam.addEventListener('click', openMenu);
closeHam.addEventListener('click', closeMenu);
menuContainer.addEventListener('click', closeMenu);

function openMenu () {
    openHam.style.display = 'none';
    menuContainer.style.display = 'block';
    closeHam.style.display = 'block';
}

function closeMenu () {
    closeHam.style.display = 'none';
    menuContainer.style.display = 'none'
    openHam.style.display = 'block'
}
