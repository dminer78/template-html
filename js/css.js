if(screen.width <= 700 || screen.height <= 700) {
    $('head').append('<link rel="stylesheet" href="css/mobile.css" type="text/css" />');
    var screen = "MOBILE";
} else {
    $('head').append('<link rel="stylesheet" href="css/desktop.css" type="text/css" />');
    var screen = "DESKTOP";
}

console.log(screen + " css sheet appended");