// ==UserScript==
// @name         Skroutz sponsored remover
// @namespace    https://www.skroutz.gr
// @version      1.2
// @description  Removes all sponsored products from product list (sponsored products are dublicates, so you will see them at their natural order).
// @author       Sotiris Kipouros
// @license      MIT
// @match        https://www.skroutz.gr/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=skroutz.gr
// @grant        none
// ==/UserScript==

const mainContent = document.querySelector(".list")


// Detect content changes (e.g. changing search filters) and remove again the ads
const mutationObserver = new MutationObserver(function (mutations) {
    console.log("Content changed!"); // Notify in the console when the content has changed
    removeAds(getAds())
})

// Finds the adds on the current page
function getAds() {
    return document.querySelectorAll('.labeled-product, .labeled-item')
}

// Removes the adds found with getAds()
function removeAds(list) {
    // Iterate the HTMLcollection and change the opacity for all sponsores products

    [...list].map((item) => {
        // item.style.opacity = 0.2
        item.style.display = "none"
    })
}

// Initialize the script
(function () {
    'use strict';

    mutationObserver.observe(mainContent, {
        attributes: true
    })

    // Find all sponsored items and remove them
    const ads = getAds()
    removeAds(ads)

})()
