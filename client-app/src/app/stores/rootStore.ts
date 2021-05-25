
import { createContext } from "react";
import { configure } from "mobx";


configure({ enforceActions: 'always' });

export class RootStore {


    constructor() {

    }
}

export const RootStoreContext = createContext(new RootStore());