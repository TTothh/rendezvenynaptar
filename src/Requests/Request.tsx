//represents a successful request to a site. returns the response document

import Requester from "./Requester.tsx";

interface RequestProps {
	url?: string
}

function Request({url}: RequestProps) {
	return Requester(url);
}

export default Request;