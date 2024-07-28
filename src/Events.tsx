import {useEffect, useState} from "react";
import RenderEvents from "./RenderEvents.tsx";
import {Event, Genre} from './Interfaces/Interfaces.tsx';
import Filter from './Filter.tsx'
import './EventCard/EventCard.scss';
import './Filter.scss';

function Events() {
	const [events, setEvents] = useState<Event[]>([]);
	const [genres, setGenres] = useState<Genre[]>([]);
	const [error, setError] = useState<string | null>(null);
	const [filters, setFilters] = useState<NonNullable<unknown>>({
		displayHours: false,
		genres: [],
		venues: [],
		startDate: new Date(),
		endDate: new Date()
	});
	
	useEffect(() => {
		const getData = async () => {
			try {
				const response = await fetch("https://127.0.0.1:7198/api/Events", { method: "GET" });
				if (!response.ok) {
					console.error(new Error("Failed to fetch events"));
				}
				const data = await response.json();
				setEvents(data.sort((a: Event,b: Event)=> new Date(a.date).getTime() - new Date(b.date).getTime()));
				setFilters((prevState: NonNullable<unknown>) => ({
					...prevState,
					startDate: events[0].date
						
					//const filter = {...prevState};
					//filter.startDate = events[0].date;
					//return { filter }
				}));
			} catch (error) {
				setError((error as Error).message);
			}
		};
		getData().then((): void => console.log("Events fetched from API"));
	}, [events]);
	
	useEffect(() => {
		const getGenres = async () => {
			try {
				const response = await fetch("https://127.0.0.1:7198/api/Genres", { method: "GET" });
				if (!response.ok) {
					console.error(new Error("Failed to fetch genres"));
				}
				
				const genres = await response.json();
				setGenres(genres);
			} catch (error) {
				setError((error as Error).message);
			}
		};
		getGenres().then((): void => console.log("Genres fetched from API"));
	}, []);
	
	if (error) {
		return <div>Error: {error}</div>;
	}
	
	return (
		<>
			<Filter state={filters} setFilters={setFilters} />
			<RenderEvents Events={events} Genres={genres} />
		</>
	);
}

export default Events