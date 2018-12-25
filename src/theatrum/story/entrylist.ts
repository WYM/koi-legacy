import { TalkEntry, SceneEntry, ActorEntry } from "./entry";

export interface EntryList {
    id: number,
    list: Partial<TalkEntry | SceneEntry | ActorEntry>[];
}