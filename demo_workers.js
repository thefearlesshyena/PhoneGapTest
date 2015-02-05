var i = 0;

var msInterval = 500;


function setWorkerInterval(val){

	msInterval = val;

}

function timedCount() {
    i = i + 1;
    postMessage(i);
    setTimeout("timedCount()",msInterval);
}

timedCount(); 
