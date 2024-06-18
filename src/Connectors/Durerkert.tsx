import Concert from "../Types/Concert.tsx";
import {v4 as uuidv4} from 'uuid';
import {useEffect, useState} from "react";

// @ts-ignore
function Durerkert(html: Document): Array<Concert> {
	const events = new Array<Concert>();
	
	const Fetch = (url: string, handler: (d: Document) => Array<Concert>) => {
		//rewrite this for puppeteer, wait for load and then pass the handler the loaded doc
		//const reverseProxyUrl: string = "http://localhost:8080/";
		const [doc, setDoc] = useState(new Document());
		useEffect(() => {
			fetch(`http://localhost:4000/screenshot?url=${url}?selector=".dxGKyk"`)
				.then(response => response.text())
				.then(data => {
					setDoc(new DOMParser().parseFromString(data, "text/html"))
				});
		}, [url]);
		events.push(...handler(doc));
	}
	
	function getEvents(html: Document): Array<Concert> {
		const monthlyEvents = new Array<Concert>();
		const eventsDOM = html.getElementsByClassName("dxGKyk");
		console.log(html)
		for (const event of eventsDOM) {
			const link: string = (event.querySelector(".ihPYiO")?.children[0] as HTMLAnchorElement).href ?? "";
			const date: Date = new Date;
			const banner: URL = new URL((event.querySelector(".brwXgh") as HTMLImageElement)?.src.trim() ?? "https://www.durerkert.com/favicon/favicon-32x32.png");
			const fullDate = event.querySelector(".gYESBo")?.innerHTML.split(".") ?? new Array<string>(4);
			date.setFullYear((new Date).getFullYear(), parseInt(fullDate[1].trim()) ?? 1, parseInt(fullDate[2].trim()) ?? 1);
			const name: string = (event.querySelector(".ihPYiO")?.children[0] as HTMLAnchorElement).innerText.replace("\\n", "").trim() ?? "Koncert";
			const room: string = event.querySelector(".dMMFeM")?.firstChild?.textContent?.replace("\\n", "").trim() ?? "";
			const genres: Array<string> = new Array<string>;
			const genArr = event.querySelector(".ipvnWA")?.children ?? new HTMLCollection();
			for (const item of genArr) {
				genres.push((item as HTMLSpanElement).innerText.trim());
			}
			const desc: string = "";
			
			const html = <>
				<div className="eventCard" key={uuidv4()}>
					<img src={banner.href} alt={name} key={uuidv4()}/>
					<div className="eventCard__info" key={uuidv4()}>
						<p className="eventCard__name" key={uuidv4()}>{name}</p>
						<p className="eventCard__date"
						   key={uuidv4()}>{new Intl.DateTimeFormat('hu-HU', {dateStyle: "medium"}).format(date)}</p>
						<p className="eventCard__venue" key={uuidv4()}>Dürerkert - {room}</p>
						<div className="eventCard__genres" key={uuidv4()}>
							{genres.map(x => <><p className="eventCard__genre" key={uuidv4()}>{x}</p></>)}
						</div>
					</div>
				</div>
			</>
			
			monthlyEvents.push(new Concert(name, date, genres, html, uuidv4(), room, desc, link))
		}
		console.log(monthlyEvents);
		return monthlyEvents;
	}
	
	for (let i = 0; i < 12; i++) {
		Fetch(`www.durerkert.com/events?view=list&month=${i}&year=2024`, getEvents)
	}
	
	return events;
}

export default Durerkert;