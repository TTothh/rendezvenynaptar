import React, {ReactNode} from "react";

class Concert implements Concert {
	private _name: string;
	private _date: Date;
	private _room: string | undefined;
	private _genres: Array<string>;
	private _description: string | undefined;
	private _link: string | undefined;
	private readonly _html: ReactNode;
	
	constructor(name: string, date: Date, genres: Array<string>, html: ReactNode, room?: string, description?: string, link?: string) {
		this._name = name;
		this._date = date;
		this._html = html;
		this._room = room;
		this._genres = genres;
		this._description = description;
		this._link = link;
	}
	
	get html(): React.ReactNode {
		//build html here
		return this._html;
	}
	
	get link(): string | undefined {
		return this._link;
	}
	
	set link(value: string | undefined) {
		this._link = value;
	}
	
	get name(): string {
		return this._name;
	}
	
	set name(value: string) {
		this._name = value;
	}
	
	get date(): Date {
		return this._date;
	}
	
	set date(value: Date) {
		this._date = value;
	}
	
	get room(): string | undefined {
		return this._room;
	}
	
	set room(value: string | undefined) {
		this._room = value;
	}
	
	get genres(): Array<string> {
		return this._genres;
	}
	
	set genres(value: Array<string>) {
		this._genres = value;
	}
	
	get description(): string | undefined {
		return this._description;
	}
	
	set description(value: string | undefined) {
		this._description = value;
	}
}

export default Concert