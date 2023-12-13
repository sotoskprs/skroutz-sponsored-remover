// ==UserScript==
// @name         Skroutz sponsored remover
// @namespace    http://tampermonkey.net/
// @version      1.4.1
// @description  Removes all sponsored products from product list (sponsored products are dublicates, so you will see them at their natural order).
// @author       Sotiris Kipouros
// @license      MIT
// @match        https://www.skroutz.gr/c/*
// @match        https://www.skroutz.gr/s/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=skroutz.gr
// @grant        none
// @downloadURL  https://update.greasyfork.org/scripts/481045/Skroutz%20sponsored%20remover.user.js
// @updateURL    https://update.greasyfork.org/scripts/481045/Skroutz%20sponsored%20remover.meta.js
// ==/UserScript==

// Get product list element if present
const mainContent = document.querySelector("#sku-list")

// Detect content changes (e.g. changing search filters) and remove again the ads
const mutationObserver = new MutationObserver(function (mutations) {
    // console.log("Content changed!"); // Notify in the console when the content has changed
    removeAds(getAds())
})

// Finds the adds on the current page
function getAds() {
    return document.querySelectorAll('.labeled-product, .labeled-item')
}

// Removes the ads found with getAds()
function removeAds(list) {
    // Iterate the HTMLcollection and change the opacity for all sponsores products

    return false; // DEBUG - stops the ad removal

    [...list].map((item) => {
        // item.style.opacity = 0.2
        item.style.display = "none"
    })
}

// Initialize the script
(function () {
    'use strict';

    // Initialize content changes detection
    mutationObserver.observe(mainContent, {
        attributes: true
    })

    // Find all sponsored items and remove them on page's first load
    const ads = getAds()
    removeAds(ads)
})()
