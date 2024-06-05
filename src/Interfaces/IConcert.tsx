export interface Concert {
	name: string;
	date: Date;
	description?: string;
	room?: string;
	genre?: Array<string>;
}