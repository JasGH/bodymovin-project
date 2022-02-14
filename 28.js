var TaftanLanding = function() {

    var headerAnimations = null

    function initProps(data){
        headerAnimations = data.headerAnimations
    }

    function addEvents() {}

    function initBodyMovin() {
        headerAnimations.forEach( item => {
            loadBodyMovin(item);
        });
    }

    function loadBodyMovin(animation) {
        animation.instance = lottie.loadAnimation({
            container: document.querySelector(animation.id),
            path: animation.jsonPath,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            name: 'Demo Animation',
            assetsPath: animation.assetsPath
        });
    }

    function init(data) {
        initProps(data);
        initBodyMovin();
        addEvents();

        // setLogin();
    }


    return {
        init: init
    };
}();

TaftanLanding.init({
    headerAnimations : window.headerAnimations
});
