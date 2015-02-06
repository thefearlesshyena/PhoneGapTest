var i = 0;

var msInterval = 500;

//notification plugin
document.addEventListener('deviceready', function () {
    // window.plugin.notification.local is now available
}, false);

function setWorkerInterval(val){

	msInterval = val;

}

function timedCount() {
    i = i + 1;
    postMessage(i);
    setTimeout("timedCount()",msInterval);
}

timedCount(); 
