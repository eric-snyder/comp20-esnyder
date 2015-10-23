var parsedData;		//variable to store the parsed objects

function parse() {
	
	var req = new XMLHttpRequest();
	req.open("GET", "data.json", true);	
	req.send();	
	req.onreadystatechange = function() {
		
		if (req.readyState == 4 && req.status == 200) { 
			parsedData = JSON.parse(req.responseText);
			
			elem = document.getElementById("messages");
			for (var i = 0; i < 2; i++ ) {
				elem.innerHTML += "<p>" + parsedData[i]["username"] + ": " + parsedData[i]["content"] + "</p>";
			}
		}
	}
};
