function Months(m: string): number {
	const keys = new Map<string[], number>();
	keys.set(["január", "jan", "january", "jan"], 0);
	keys.set(["február", "febr", "february", "feb"], 1);
	keys.set(["március", "márc", "march", "march"], 2);
	keys.set(["április", "ápr", "april", "apr"], 3);
	keys.set(["május", "máj", "may", "may"], 4);
	keys.set(["június", "jún", "june", "jun"], 5);
	keys.set(["július", "júl", "july", "jul"], 6);
	keys.set(["augusztus", "aug", "august", "aug"], 7);
	keys.set(["szeptember", "szept", "september", "sep"], 8);
	keys.set(["október", "okt", "october", "oct"], 9);
	keys.set(["november", "nov", "november", "nov"], 10);
	keys.set(["december", "dec", "december", "dec"], 11);
	
	function getMonth(m: string): number {
		for (const mKey of keys) {
			if(mKey[0].includes(m)) {
				return mKey[1] as number;
			}
		}
		
		return 0;
	}
	
	return getMonth(m);
}

export default Months;