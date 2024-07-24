export interface Event {
	id: string,
	name: string,
	date: string,
	time?: string,
	room?: string,
	description?: string,
	url: string,
	coverUrl?: string
}

export interface Genre {
	pk: number,
	id: string,
	genre1: string
}