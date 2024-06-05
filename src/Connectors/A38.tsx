import Concert from "../Types/Concert.tsx";
import months from "../enums/months.tsx";

function getEvents(html: Document) {
	let events = new Array<Concert>();
	
	let eventsDOM = html.getElementsByClassName("eventCard");
	
	for (let event: HTMLAnchorElement of eventsDOM) {
		let link = event.getAttribute("href") ?? "";
		let date: Date = new Date;
		let month = event.querySelector(".l-verticalCenter")?.children[0].innerHTML.toLowerCase() ?? "január";
		let day = event.querySelector(".dateBox-item-day")?.innerHTML ?? "";
		date.setFullYear((new Date).getFullYear(), months[month as keyof typeof months] ?? 1, parseInt(day) ?? 1);
	}
	
	return (
		<>
			{events.map(x => x.html)}
		</>
	)
}

export default getEvents;