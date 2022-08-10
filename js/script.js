/*
 * Open the drawer when the menu icon is clicked.
 */
 var menu = document.querySelector('#menu');
 var main = document.querySelector('main');
 var drawer = document.querySelector('#drawer');

 menu.addEventListener('click', (event) => {
 	drawer.classList.toggle('open');
 	event.stopPropagation(); /* Prevents propagation of the same event from being called. Propagation means bubbling up to parent elements or capturing down to child elements. The stopPropagation() method allows you to prevent propagation of the current event. */
 })
 main.addEventListener('click', () => {
 	drawer.classList.remove('open');
 })