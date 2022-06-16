(function (){

    let elems = document.getElementsByClassName('splide');

    for(let i = 0; i < elems.length; i++) {
        new Splide(elems[i]).mount();
    }

})();
