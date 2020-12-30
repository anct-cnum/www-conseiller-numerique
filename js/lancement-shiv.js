var canvasElement = document.createElement('canvas');
if (!canvasElement.getContext) {
    var shivNew = document.createElement('script');
    shivNew.setAttribute('type', 'text/javascript');
    shivNew.src = 'html5shiv.min.js';
    shivNew.async = true;
    var shiv0 = document.getElementsByTagName('script')[0];
    shiv0.parentNode.insertBefore(shivNew, shiv0);
}