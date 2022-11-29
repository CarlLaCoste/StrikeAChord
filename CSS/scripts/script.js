/*
Student Name: Carl LaCoste
File Name: script.js
Date: 09/24/2022
*/

function hamburger() {
    var menu = document.getElementById("menu-links");
    if (menu.style.display === "block") {
        menu.style.display = "none";
        } else {
            menu.style.display = "block";
        }
    }