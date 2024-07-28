import {v4 as uuidv4} from 'uuid';
import {Event, Genre} from '../Interfaces/Interfaces.tsx';
import venue from "../Enums/Venue.tsx";

function EventCard({ EventObject, Genres} : {EventObject: Event, Genres: Array<Genre>}) {
	console.log(EventObject);
	const Name: string = EventObject.name;
	const EventDate: Date = new Date(EventObject.date);
	const EventTime: string | undefined = EventObject.time //new Date(1970, 0, 1, EventObject.Time?.getHours(), EventObject.Time?.getMinutes(), EventObject.Time?.getSeconds());
	const Room: string | undefined = EventObject.room;
	//const Description: string | undefined = EventObject.description;
	const URL: string = EventObject.url;
	const CoverURL: string | undefined = EventObject.coverUrl;
	const Venue: string | undefined = EventObject.venue;
	
	return (
		<div className={"eventCard"} key={uuidv4()}>
			<div className={"eventBannerContainer"}>
				<img className={"eventBannerBackDrop"} src={(!CoverURL) ? "src/assets/altBanner/A38.png" : CoverURL} alt={"¯\\_(ツ)_/¯"} key={uuidv4()}/>
				<img className={"eventBanner"} src={(!CoverURL) ? "src/assets/altBanner/A38.png" : CoverURL} alt={"¯\\_(ツ)_/¯"} key={uuidv4()}/>
			</div>
			<div style={{position: "relative", height: "150px"}}>
				<div className={"eventData"}>
					<a className={"eventName"} href={URL} target={"_blank"}>{Name}</a>
					<div className={"eventDateTime"}>
						<p className={"eventDate"}>{EventDate.toLocaleDateString("hu-HU")}</p>
						{EventTime && <p className={"eventTime"}>{EventTime}</p>}
					</div>
				</div>
				<div className={"eventMisc"}>
					<div className={"eventGenres"}>
						{Genres.map((g: Genre) => (<span className={"eventGenre"} key={uuidv4()}>{g.genre1}</span>))}
					</div>
					<div className={"eventVenueInfo"}>
						<div className={"eventVenue"}>
							<img className={"venue"} src={venue(Venue ?? "")} alt={"venue"}/>
						</div>
						{!(!Room) && <div className={"eventRoom"}>{Room}</div>}
					</div>
				</div>
			</div>
		</div>
	)
}

export default EventCard;