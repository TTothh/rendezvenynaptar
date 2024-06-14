import Concert from "../Types/Concert.tsx";
import months from "../enums/months.tsx";

function A38(html: Document): Array<Concert> {
	let events = new Array<Concert>();
	
	let eventsDOM = html.getElementsByClassName("eventCard");
	
	for (let event of eventsDOM) {
		let link = event.getAttribute("href") ?? "";
		let date: Date = new Date;
		let month = event.querySelector(".l-verticalCenter")?.children[0].innerHTML.toLowerCase() ?? "január";
		let day = event.querySelector(".dateBox-item-day")?.innerHTML ?? "";
		date.setFullYear((new Date).getFullYear(), months[month as keyof typeof months] ?? 1, parseInt(day) ?? 1);
		let name = event.querySelector(".eventCard__details__title")?.children[0].innerHTML ?? "Koncert";
		let room = event.querySelector("[itemprop='location']")?.children[0].innerHTML ?? "Helység";
		let genres: Array<string> = new Array<string>;
		let genArr = event.querySelector(".list--tag")?.children ?? new HTMLCollection();
		for (let item of genArr) {
			genres.push(item.children[0].innerHTML);
		}
		let desc = event.querySelector(".eventCard__details__description")?.children[0].innerHTML;
		
		events.push(new Concert(name, date, genres, room, desc, link))
	}
	
	return events;
}

export default A38;