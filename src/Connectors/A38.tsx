import Concert from "../Types/Concert.tsx";
import {v4 as uuidv4} from 'uuid';
import Months from "../Enums/Months.tsx";

function A38(html: Document): Array<Concert> {
	const events = new Array<Concert>();
	
	const eventsDOM = html.getElementsByClassName("eventCard");
	
	for (const event of eventsDOM) {
		const link = event.getAttribute("href") ?? "";
		const date: Date = new Date;
		const banner: URL = new URL((event.querySelector(".artistCard__img") as HTMLImageElement)?.getAttribute("data-src")?.trim() ?? "https://www.a38.hu/hu/programok");
		const month = event.querySelector(".l-verticalCenter")?.children[0].innerHTML.toLowerCase().trim() ?? "január";
		const day = event.querySelector(".dateBox-item-day")?.innerHTML ?? "";
		date.setFullYear((new Date).getFullYear(), Months(month) ?? 1, parseInt(day) ?? 1);
		const name = (event.querySelector(".eventCard__details__title")?.children[0] as HTMLDivElement).innerText.replace("\\n", "").trim() ?? "Koncert";
		const room = event.querySelector("[itemprop='location']")?.children[0].innerHTML.trim() ?? "Helység";
		const genres: Array<string> = new Array<string>;
		const genArr = event.querySelector(".list--tag")?.children ?? new HTMLCollection();
		for (const item of genArr) {
			genres.push(item.children[0].innerHTML.trim());
		}
		const desc = event.querySelector(".eventCard__details__description")?.children[0].innerHTML.trim();
		
		const html = <>
			<div className="eventCard" key={uuidv4()}>
				<img src={banner.href} alt={name} key={uuidv4()} />
				<div className="eventCard__info" key={uuidv4()}>
					<p className="eventCard__name" key={uuidv4()}>{name}</p>
					<p className="eventCard__date" key={uuidv4()}>{new Intl.DateTimeFormat('hu-HU', {dateStyle: "medium"}).format(date)}</p>
					<p className="eventCard__venue" key={uuidv4()}>A38 - {room}</p>
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

export default A38;