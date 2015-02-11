var i = 0;

var msInterval = 500;


/* Need to define 'document' for this to work.

document.addEventListener('deviceready', function () {
    // window.plugin.notification.local is now available
}, false);
*/

//trying to rewrite showAlert in a way that makes sense to me.
function showAlert(message, title){
if (navigator.notification) {
        navigator.notification.alert(message, null, title, 'OK');
    } else {
        alert(title ? (title + ": " + message) : message);
    }
	}

/*showAlert: function (message, title) {
    if (navigator.notification) {
        navigator.notification.alert(message, null, title, 'OK');
    } else {
        alert(title ? (title + ": " + message) : message);
    }
	}*/

function setWorkerInterval(val){

	msInterval = val;

}

function timedCount() {
    i = i + 1;
    postMessage(i);
	postMessage(fname);
    setTimeout("timedCount()",msInterval);
	//added the following line to create a notification when user presses worker interval.	
	//window.plugin.notification.local.add({ message: 'Great app!' });
}

timedCount(); 
