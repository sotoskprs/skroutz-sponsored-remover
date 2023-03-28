const mainContent = document.querySelector(".list")


const mutationObserver = new MutationObserver(function (mutations) {
    console.log("Mutated!");
    const ads = getAds()
    removeAds(ads)
})


function getAds() {
    return document.getElementsByClassName('labeled-product')
}


function removeAds(list) {
    // Iterate the HTMLcollection and change the opacity for all sponsores products
    for (let item of list) {
        // item.style.opacity = 0.2
        item.style.display = "none"
    }
}


(function () {
    'use strict';

    mutationObserver.observe(mainContent, {
        attributes: true
    })

    // Find all sponsored items by their classname
    const ads = getAds()
    removeAds(ads)


})()