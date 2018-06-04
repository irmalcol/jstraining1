weatherApp.adjustAppBackgroundColor = function (temperature) {
    var className = '';
    if (temperature < 0) {
        className = 'cold';
    } else if (temperature >= 0 && temperature < 15) {
        className = 'cool';
    } else if (temperature >= 15 && temperature < 30) {
        className = 'warm';
    } else if (temperature >= 30) {
        className = 'hot';
    }

    document.querySelector('body').setAttribute('class', className);
}