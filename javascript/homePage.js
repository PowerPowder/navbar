let hideScrollbar = document.body.style.overflow = 'hidden';
let showScrollbar = document.body.style.overflow = 'visible';

var myListener = function () {
    document.removeEventListener('mousemove', myListener, false);
    document.body.style.overflow = 'show';
};

document.addEventListener('mousemove', myListener, false);