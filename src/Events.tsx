import {ReactNode, useEffect, useState} from "react";
import Concert from "./Types/Concert.tsx";
import A38 from "./Connectors/A38.tsx";
import Akvariumklub from "./Connectors/Akvariumklub.tsx";
import Durerkert from "./Connectors/Durerkert.tsx";

function Events(): ReactNode {
	const events = new Array<Concert>();
	
	const Fetch = (url: string, handler: (d: Document) => Array<Concert>) => {
		const reverseProxyUrl = "http://localhost:8080/";
		const [doc, setDoc] = useState(new Document());
		useEffect(() => {
			fetch(reverseProxyUrl + url, {headers: {'X-Requested-With': 'XMLHttpRequest'}})
				.then(response => response.text())
				.then(data => {
					setDoc(new DOMParser().parseFromString(data, "text/html"))
				});
		}, [url]);
		
		events.push(...handler(doc));
		return events;
	}
	
	let isLoading = false;
	
	Fetch("www.a38.hu/hu/programok", A38);
	Fetch("akvariumklub.hu/programok", Akvariumklub);
	Fetch("akvariumklub.hu/programok", Durerkert);
	
	isLoading = true;
	
	if(!isLoading) {
		return "Loading...";
	} else {
		return <>
			{events
				.sort((a,b) => a.date.valueOf() - b.date.valueOf())
				.map(x => x.html)}
		</>
	}
	
}

export default Events