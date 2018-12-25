export enum EntryType {
    TALK = 1,
    SCENE = 2,
    ACTOR = 3
}

export interface Entry {
    type: EntryType;
}

export interface TalkEntry extends Entry {
    content: string;
}

export interface SceneEntry extends Entry {
    res: string;
}

export interface ActorEntry extends Entry {
    res: string;
}