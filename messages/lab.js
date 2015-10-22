// Your JavaScript goes here...
//Job: to modify this to open up data.json using XTMLHttpRequest, parse JSON data, and output messages
//      in the "messages" section of index.html, as ordered in JSON
//
// Messages in HTML looks like this :
//
//		<body onload="parse()">
//			<h1>Messages</h1>
//			<div id="messages"></div>
//		</body>
//
function parse(){
	
	var request = XTMLHttpRequest;
	var data;
	var parseddata;
	request.open("GET", "index.html", true);
	request.send();

};
