//makes the request to a site and returns a Document type

function Requester(url: string | undefined): Document {
	const uri: string = "http://localhost:8080/" + url;
	const htmlParser = new DOMParser();
	let response = new Document();

	const xhr = new XMLHttpRequest();
	xhr.open("GET", uri)
	xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
	xhr.send(null);
	xhr.onload = xhr.onerror = function() {
		response = htmlParser.parseFromString(xhr.responseText, "text/html");
	};

	return response;
}

export default Requester