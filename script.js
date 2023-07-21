const sidebar = document.querySelector('aside');
const openSidebar = document.querySelector('#menu');
const closeSidebar = document.querySelector('#close-menu');

function handleMenuToggle() {
  sidebar.classList.toggle('open');
}

openSidebar.addEventListener('click', handleMenuToggle);
closeSidebar.addEventListener('click', handleMenuToggle);
