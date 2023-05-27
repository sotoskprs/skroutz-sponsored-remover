const mainContent = document.querySelector(".list")


// Get content changes (e.g. changing search filters)
const mutationObserver = new MutationObserver(function (mutations) {
    console.log("Mutated!");
    const ads = getAds()
    removeAds(ads)
})


function getAds() {
    return document.querySelectorAll('.labeled-product, .labeled-item')
}


function removeAds(list) {
    // Iterate the HTMLcollection and change the opacity for all sponsores products

    [...list].map((item) => {
        // item.style.opacity = 0.2
        item.style.display = "none"
    })
}


(function () {
    'use strict';

    mutationObserver.observe(mainContent, {
        attributes: true
    })

    // Find all sponsored items and remove them
    const ads = getAds()
    removeAds(ads)

})()