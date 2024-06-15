//makes the request to a site and returns a Document type

import {useState} from "react";

function Requester(url: string | undefined): Document {
	const uri: string = "http://localhost:8080/" + url;
	const htmlParser = new DOMParser();
	const [response, setResponse] = useState(new Document());

	const xhr = new XMLHttpRequest();
	xhr.open("GET", uri)
	xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
	xhr.send(null);
	xhr.onload = xhr.onerror = function() {
		setResponse(htmlParser.parseFromString(xhr.responseText, "text/html"));
	};

	return response;
}

export default Requester