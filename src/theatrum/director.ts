import { Storyteller } from "./story/storyteller";
import { EntryList } from "./story/entrylist";
import { EntryType } from "./story/entry";
import { Storyboard } from "./story/storyboard";

export class Director {

    private _teller: Storyteller;

    public createScript() {

        const rawScript: EntryList[] = [
            {
                id: 1,
                list: [
                    { type: EntryType.TALK, content: "first word." }
                ]
            },
            {
                id: 2,
                list: [
                    { type: EntryType.TALK, content: "second word." }
                ]
            },
            {
                id: 3,
                list: [
                    { type: EntryType.TALK, content: "third word." }
                ]
            }
        ];
        const storyboard = Storyboard.fromRaw(rawScript);

        const teller = new Storyteller();
        teller.giveStoryboard(storyboard);
        this._teller = teller;

        window['tell'] = () => {
            this._teller.next();
        };
    }

}