
"use strict";

// Disable right-click context menu
document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
}, false);

// Disable text selection
document.addEventListener("selectstart", function (e) {
    e.preventDefault();
}, false);

// Disable image dragging
document.addEventListener("dragstart", function (e) {
    e.preventDefault();
}, false);

// Disable printing
const style = document.createElement('style');
style.type = 'text/css';
style.media = 'print';
style.appendChild(document.createTextNode('body { display: none; }'));
document.head.appendChild(style);
