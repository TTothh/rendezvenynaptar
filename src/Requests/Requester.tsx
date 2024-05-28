function Requester(url: string | undefined) {
	let responsetext: string | null = null;
	const uri: string = "http://localhost:8080/" + url;
	
	const x = new XMLHttpRequest();
	x.open("GET", uri);
	x.onload = x.onerror = function() {
		responsetext = x.responseText;
	};
	console.log(x.responseText);
	
	return (
		<>
			<div>
				{responsetext}
			</div>
		</>)
}

export default Requester