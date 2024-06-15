import Concert from "../Types/Concert.tsx";
import months from "../enums/months.tsx";

function A38(html: Document): Array<Concert> {
	const events = new Array<Concert>();
	
	const eventsDOM = html.getElementsByClassName("eventCard");
	
	for (const event of eventsDOM) {
		const link = event.getAttribute("href") ?? "";
		const date: Date = new Date;
		const banner: URL = new URL((event.querySelector(".artistCard__img") as HTMLImageElement)?.src ?? "https://www.a38.hu/hu/programok");
		const month = event.querySelector(".l-verticalCenter")?.children[0].innerHTML.toLowerCase() ?? "január";
		const day = event.querySelector(".dateBox-item-day")?.innerHTML ?? "";
		date.setFullYear((new Date).getFullYear(), months[month as keyof typeof months] ?? 1, parseInt(day) ?? 1);
		const name = event.querySelector(".eventCard__details__title")?.children[0].innerHTML ?? "Koncert";
		const room = event.querySelector("[itemprop='location']")?.children[0].innerHTML ?? "Helység";
		const genres: Array<string> = new Array<string>;
		const genArr = event.querySelector(".list--tag")?.children ?? new HTMLCollection();
		for (const item of genArr) {
			genres.push(item.children[0].innerHTML);
		}
		const desc = event.querySelector(".eventCard__details__description")?.children[0].innerHTML;
		
		const html = <>
			<div className="eventCard">
				<img src={banner.href} alt={name}/>
				<div className="eventCard__info">
					<p className="eventCard__name">{name}</p>
					<p className="eventCard__date">{new Intl.DateTimeFormat('hu-HU', {dateStyle: "medium"}).format(date)}</p>
					<p className="eventCard__venue">A38 - {room}</p>
					<div className="eventCard__genres">
						{genres.map(x => <><p className="eventCard__genre">{x}</p></>)}
					</div>
				</div>
			</div>
		</>
		
		events.push(new Concert(name, date, genres, html, room, desc, link))
	}
	
	return events;
}

export default A38;