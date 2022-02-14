console.log('heeeeeeeeeeeeelllllllllloooooooooooo')
var headerAnimations = [
    {
        id: 'taftan-animation-tagvim',
        assetsPath: 'https://nodes.alaatv.com/upload/landing/28/animations/landing28-taftan-top-animation.png',
        jsonPath: '/json/landing28-taftan-animation-tagvim.json',
        // jsonPath: '/bodyMovin/landing-28-taftan/animations/json/landing28-taftan-animation-tagvim.json',
        instance : null
    },
    {
        id: 'taftan-animation-adamak',
        assetsPath: 'https://nodes.alaatv.com/upload/landing/28/animations/landing28-taftan-bottom-animation.png',
        jsonPath: '/json/landing28-taftan-animation-zehn.json',
        // jsonPath: '/bodyMovin/landing-28-taftan/animations/json/landing28-taftan-animation-adamak.json',
        instance : null
    },
    {
        id: 'taftan-animation-zehn',
        assetsPath: 'https://nodes.alaatv.com/upload/landing/28/animations/landing28-taftan-right-animation.png',
        jsonPath: '/json/landing28-taftan-animation-adamak.json',
        // jsonPath: '/bodyMovin/landing-28-taftan/animations/json/landing28-taftan-animation-zehn.json',
        instance : null
    },
    {
        id: 'taftan-animation-fehrest',
        assetsPath: 'https://nodes.alaatv.com/upload/landing/28/animations/landing28-taftan-left-animation.png',
        jsonPath: '/json/landing28-taftan-animation-fehrest.json',
        // jsonPath: '/bodyMovin/landing-28-taftan/animations/json/landing28-taftan-animation-fehrest.json',
        instance : null
    }
];


function loadBodyMovin(animation) {
    animation.instance = bodymovin.loadAnimation({
        container: document.getElementById(animation.id),
        path: animation.jsonPath,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        name: "Demo Animation",
        assetsPath: animation.assetsPath
    });
}

function initBodyMovin() {
    headerAnimations.forEach( item => {
        loadBodyMovin(item);
    });
}

initBodyMovin()
