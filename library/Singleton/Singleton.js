export class Singleton {
    constructor() {
        if (!Singleton._instance) {
            Singleton._instance = this;
        }
        return Singleton._instance;
    }

    GetTime = new Date().getTime()

    static getInstance() {
        return this._instance;
    }
}

