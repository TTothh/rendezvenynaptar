import Requester from "./Requests/Requester.tsx";

interface RequestProps {
	url?: string
}

function Request({url}: RequestProps) {
	return (
		<>
			<pre>{Requester(url)}</pre>
		</>
	);
}

export default Request;