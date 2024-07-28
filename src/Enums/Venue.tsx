function Venues(m: string): string {
	const keys = new Map<string, string>();
	keys.set("a38", "src/assets/VenueIcons/a38.svg");
	keys.set("akvariumklub", "src/assets/VenueIcons/akvarium.svg");
	keys.set("aurora", "src/assets/VenueIcons/aurora.png");
	keys.set("barbanegrar", "src/assets/VenueIcons/barbanegraredstage.png");
	keys.set("barbanegrab", "src/assets/VenueIcons/barbanegrabluestage.png");
	keys.set("durerkert", "src/assets/VenueIcons/durerkert.svg");
	keys.set("mvmdome", "src/assets/VenueIcons/mvmdome.png");
	keys.set("riff", "src/assets/VenueIcons/riff.png");
	
	function getVenue(m: string): string {
		for (const mKey of keys) {
			if(mKey[0] == m) {
				return mKey[1] as string;
			}
		}
		
		return "";
	}
	
	return getVenue(m);
}

export default Venues;