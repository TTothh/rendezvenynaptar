import Concert from "../Types/Concert.tsx";
import {v4 as uuidv4} from 'uuid';
import Months from "../Enums/Months.tsx";
import {useEffect, useState} from "react";

function Durerkert(html: Document): Array<Concert> {
	const Fetch = (url: string) => {
		const reverseProxyUrl = "http://localhost:8080/";
		const [doc, setDoc] = useState(new Document());
		useEffect(() => {
			fetch(reverseProxyUrl + url, {headers: {'X-Requested-With': 'XMLHttpRequest'}})
				.then(response => response.text())
				.then(data => {
					setDoc(new DOMParser().parseFromString(data, "text/html"))
				});
		}, [url]);
		return doc;
	}
	
	const events = new Array<Concert>();
	
	
	const eventsDOM = html.getElementsByClassName("grid-item");
	
	for (const event of eventsDOM) {
		const link = event.getAttribute("href") ?? "";
		const date: Date = new Date;
		const banner: URL = new URL((event.querySelector(".ofi-cover-center") as HTMLImageElement)?.getAttribute("data-lazy-src")?.trim() ?? "https://akvariumklub.hu/programok/");
		console.log(event.querySelector(".ofi-cover-center"))
		const month = event.querySelector(".date__month")?.innerHTML.toLowerCase().replace(/[0-9]/g, "").replace(/\./g,"").trim() ?? "január";
		const day = event.querySelector(".date__day")?.innerHTML.replace(".", "").trim() ?? "";
		date.setFullYear((new Date).getFullYear(), Months(month) ?? 1, parseInt(day) ?? 1);
		const name = (event.querySelector(".m-card__description")?.children[0] as HTMLHeadingElement).innerText.replace("\\n", "").trim() ?? "Koncert";
		const room = event.classList[event.classList.length - 1].toString().trim();
		const genres: Array<string> = new Array<string>;
		const desc = "";
		
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

export default Durerkert;