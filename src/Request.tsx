import Requester from "./Requests/Requester.tsx";

interface RequestProps {
	url?: string
}

function Request({url}: RequestProps) {
	console.log(Requester(url));
	return (
		<>
			<pre></pre>
		</>
	);
}

export default Request;