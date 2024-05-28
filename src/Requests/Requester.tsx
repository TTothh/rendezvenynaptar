function Requester(url: string | undefined): string {
	const uri: string = "http://localhost:8080/" + url;
	let response: string = "";

	const x = new XMLHttpRequest();
	x.open("GET", uri)
	x.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
	x.send(null);
	x.onload = x.onerror = function() {
		response = x.responseText;
		console.log(response);
	};

	return response;
}

export default Requester