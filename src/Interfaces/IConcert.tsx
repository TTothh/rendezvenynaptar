import {ReactNode} from "react";

export interface Concert {
	name: string;
	date: Date;
	room: string | undefined;
	genres: Array<string>;
	description: string | undefined;
	link: string | undefined;
	readonly _html: ReactNode;
}