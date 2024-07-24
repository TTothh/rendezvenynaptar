import {useEffect, useState} from "react";
import RenderEvents from "./RenderEvents.tsx";
import {Event, Genre} from './Interfaces/Interfaces.tsx';

function Events() {
	const [events, setEvents] = useState<Event[]>([]);
	const [genres, setGenres] = useState<Genre[]>([]);
	const [error, setError] = useState<string | null>(null);
	
	useEffect(() => {
		const getData = async () => {
			try {
				const response = await fetch("https://127.0.0.1:7198/api/Events", { method: "GET" });
				if (!response.ok) {
					throw new Error("Failed to fetch events");
				}
				const data = await response.json();
				setEvents(data);
			} catch (error) {
				setError((error as Error).message);
			}
		};
		getData();
	}, []);
	
	useEffect(() => {
		const getGenres = async () => {
			try {
				const response = await fetch("https://127.0.0.1:7198/api/Genres", { method: "GET" });
				if (!response.ok) {
					throw new Error("Failed to fetch genres");
				}
				const genres = await response.json();
				setGenres(genres);
			} catch (error) {
				setError((error as Error).message);
			}
		};
		getGenres();
	}, []);
	
	if (error) {
		return <div>Error: {error}</div>;
	}
	
	return (
		<RenderEvents Events={events} Genres={genres} />
	);
}

export default Events