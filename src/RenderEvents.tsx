import EventCard from "./EventCard/EventCard.tsx";
import {ReactElement} from "react";
import {v4 as uuidv4} from "uuid";
import {Event, Genre} from './Interfaces/Interfaces.tsx';

function RenderEvents({Events, Genres} : {Events: Array<Event>, Genres: Array<Genre>}): ReactElement {
	return (
		<>
			<div id={"eventCards"} className={"EventCardContainer"} style={{display: "block"}}>
				{Events.sort((a: Event,b: Event)=> new Date(a.date).getTime() - new Date(b.date).getTime()).map((e: Event) => <EventCard EventObject={e} Genres={Genres.filter((g: Genre) => g.id == e.id)} key={uuidv4()}/>)};
			</div>
		</>
	);
}

export default RenderEvents;