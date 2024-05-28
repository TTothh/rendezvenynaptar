import {useState} from "react";

function Requester(url: string | undefined): string {
	const uri: string = "http://localhost:8080/" + url;
	const [response, setResponse] = useState("");

	const x = new XMLHttpRequest();
	x.open("GET", uri)
	x.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
	x.send(null);
	x.onload = x.onerror = function() {
		setResponse(x.responseText);
		console.log(response);
	};

	return response;
}

export default Requester