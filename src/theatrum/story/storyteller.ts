import { Storyboard } from "./storyboard";
import { EntryType, TalkEntry } from "./entry";

export class Storyteller {

    private _counter = 0;
    private _storyboard: Storyboard;

    public giveStoryboard(storyboard: Storyboard) {
        this._storyboard = storyboard;
    }

    public next() {
        var entryList = this._storyboard.getEntrylist(this._counter);
        this._counter ++;

        if (!entryList) {
            console.error('story has been told.');
            return;
        }
        
        const list = entryList.list;
        for (let i = 0, len = list.length; i < len; ++i) {
            const entry = list[i];
            if (entry.type === EntryType.TALK) {
                console.log((entry as TalkEntry).content);
            }
        }
    
    }

}