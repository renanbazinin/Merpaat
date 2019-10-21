class RaService1 {
    _elementHashToOldHTML = {};

    isElementExist(element) {
        const elementHash = element.id;
        return !!this._elementHashToOldHTML[elementHash];
    }

    addElement(element) {
        const elementHash = element.id;
        this._elementHashToOldHTML[elementHash] = element.innerHTML;
    }

    addIfNotExist(element) {
        if (!this.isElementExist(element)) {
            this.addElement(element);
        }
    }

    getElementHTML(element){
        const elementHash = element.id;
        return this._elementHashToOldHTML[elementHash];
    }
}

class RaService {
    instance;

    static getInstance() {
        // check if instance is available
        if (!this.instance) {
            this.instance = new RaService1();
            delete this.instance.constructor; // or set it to null
        }
        return this.instance;
    }
}
