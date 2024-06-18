import Concert from "../Types/Concert.tsx";
import {v4 as uuidv4} from 'uuid';
import Months from "../Enums/Months.tsx";

function Akvariumklub(html: Document): Array<Concert> {
	const events = new Array<Concert>();
	
	const eventsDOM = html.getElementsByClassName("grid-item");
	
	for (const event of eventsDOM) {
		const link: string = event.getAttribute("href") ?? "";
		const date: Date = new Date;
		const banner: URL = new URL((event.querySelector(".ofi-cover-center") as HTMLImageElement)?.getAttribute("data-lazy-src")?.trim() ?? "https://akvariumklub.hu/programok/");
		const month: string = event.querySelector(".date__month")?.innerHTML.toLowerCase().replace(/[0-9]/g, "").replace(/\./g,"").trim() ?? "január";
		const day: string = event.querySelector(".date__day")?.innerHTML.replace(".", "").trim() ?? "";
		date.setFullYear((new Date).getFullYear(), Months(month) ?? 1, parseInt(day) ?? 1);
		const name: string = (event.querySelector(".m-card__description")?.children[0] as HTMLHeadingElement).innerText.replace("\\n", "").trim() ?? "Koncert";
		const room: string = event.classList[event.classList.length - 1].toString().trim();
		const genres: Array<string> = new Array<string>;
		const desc: string = "";
		
		const html = <>
			<div className="eventCard" key={uuidv4()}>
				<img src={banner.href} alt={name} key={uuidv4()} />
				<div className="eventCard__info" key={uuidv4()}>
					<p className="eventCard__name" key={uuidv4()}>{name}</p>
					<p className="eventCard__date" key={uuidv4()}>{new Intl.DateTimeFormat('hu-HU', {dateStyle: "medium"}).format(date)}</p>
					<p className="eventCard__venue" key={uuidv4()}>Akváriumklub - {room}</p>
					<div className="eventCard__genres" key={uuidv4()}>
						{genres.map(x => <><p className="eventCard__genre" key={uuidv4()}>{x}</p></>)}
					</div>
				</div>
			</div>
		</>
		
		events.push(new Concert(name, date, genres, html, uuidv4(), room, desc, link))
	}
	
	return events;
}

export default Akvariumklub;