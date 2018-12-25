import { EntryList } from "./entrylist";

export class Storyboard {
    
    private _plots: EntryList[];

    public static fromRaw(raw: EntryList[]) {
        const instance = new Storyboard();
        instance._plots = raw;
        return instance;
    }

    public getEntrylist(idx) {
        return this._plots[idx];
    }

}