import { v4 as uuidv4 } from 'uuid';
import {Component, ReactElement} from "react";

interface Event {
	Id: string,
	Name: string,
	Date: Date,
	Time?: string,
	Room?: string,
	Description?: string,
	URL: URL,
	CoverURL?: URL
}

interface Genre {
	PK: number,
	Id: string,
	Genre: string
}

class EventCard extends Component<{ EventObject: Event, Genres: Array<Genre> }> {
	render(): ReactElement {
		const {EventObject, Genres} = this.props;
		
		const Id: string = EventObject.Id;
		const Name: string = EventObject.Name;
		const EventDate: Date = EventObject.Date;
		const EventTime: string | undefined = EventObject.Time //new Date(1970, 0, 1, EventObject.Time?.getHours(), EventObject.Time?.getMinutes(), EventObject.Time?.getSeconds());
		const Room: string | undefined = EventObject.Room;
		const Description: string | undefined = EventObject.Description;
		const URL: URL = EventObject.URL;
		const CoverURL: URL | undefined = EventObject.CoverURL;
		
		return (
			<div className={"eventCard"} key={uuidv4()}>
				<div className={"eventBannerContainer"}>
					<img className={"eventBanner"} src={(!CoverURL) ? "src/assets/altBanner/A38.png" : CoverURL.href} alt={"¯\\_(ツ)_/¯"} key={uuidv4()} />
				</div>
				<div>
					<div className={"eventData"}>
						<p className={"eventName"}>{Name}</p>
						<p className={"eventDate"}>{(!EventTime) ? EventDate.toLocaleDateString() : Date.parse(EventDate + "T" + EventTime)}</p>
					</div>
				</div>
			</div>
		);
	}
}

export default EventCard;