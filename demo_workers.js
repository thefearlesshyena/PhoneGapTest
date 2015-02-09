var i = 0;

var msInterval = 500;



function setWorkerInterval(val){

	msInterval = val;

}

function timedCount() {
    i = i + 1;
    postMessage(i);
    setTimeout("timedCount()",msInterval);
	//added the following line to create a notification when user presses worker interval.	
window.plugin.notification.local.add({ message: 'Great app!' });
}

timedCount(); 
