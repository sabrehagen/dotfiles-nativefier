// ==UserScript==
// @name         Dark Theme for FB's Messenger
// @version      0.1
// @description  Dark theme for messenger.com
// @author       Rafikus
// @match        https://www.messenger.com/*
// @grant        none
// @namespace https://greasyfork.org/users/737196
// ==/UserScript==

(function () {
    "use strict";
    
    document.querySelector("head > style").innerHTML = document.querySelector("head > style").innerHTML.replace(":root,.__fb-light-mode", "none").replace("__fb-dark-mode:root,.__fb-dark-mode", ":root,.__fb-light-mode");
})();
