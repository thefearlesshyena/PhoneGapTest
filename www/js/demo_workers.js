var i = 0;
var target;
var msInterval = 1000;
var remaining;
var val

onmessage = function(e){
target = e.data;
//postMessage("gotthis" + target);
};

/*function interv(val){
Interval = val;
timeElapsed();

}*/


function timedCount() {
    i = i + 1;
   	
	remaining=target-i;
	

	setTimeout("timedCount()",msInterval);
	if(remaining<=0){
	postMessage(["done",0]);
	//postMessage({'cmd':'done','msg':'finally'});
	//We should put some handshaking and error checking here later.
	self.close();
	}
	else{
	postMessage(["working",remaining]);
	}
	
	
	
}

timedCount(); 
