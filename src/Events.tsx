import Concert from "./Types/Concert.tsx";
import A38 from "./Connectors/A38.tsx";
import Requester from "./Requests/Requester.tsx";
import {useState} from "react";

function Events() {
	let events = new Array<Concert>();
	let [eventsFiltered, setEventsFiltered] = useState(new Array<Concert>);
	
	events.push(...A38(Requester("https://www.a38.hu/hu/programok")));
	
	return (
		<>
			{eventsFilterd.map(x => x.html)};
		</>
	)
}



export default Events