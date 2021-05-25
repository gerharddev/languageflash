import React,{ createContext } from "react";
import { configure } from "mobx";
import CardStore from "./cardStore";


configure({ enforceActions: 'always' });

export class RootStore {
    cardStore: CardStore;

    constructor() {
        this.cardStore = new CardStore(this);
    }
}

export const RootStoreContext = createContext(new RootStore());