import Concert from "./Types/Concert.tsx";
import A38 from "./Connectors/A38.tsx";
import { useFetch } from "@uidotdev/usehooks";


function Events() {
	const events = new Array<Concert>();
	//const [eventsFiltered, setEventsFiltered] = useState(new Array<Concert>);
	//TODO fix re-render problems
	const {error, data} = useFetch("http://localhost:8080/https://www.a38.hu/hu/programok")
	console.log(error);
	events.push(...A38(data));
	
	if(data === new Document()){
		return null;
	}
	
	return (
		<>
			{events.map(x => x.html)};
		</>
	)
}

export default Events