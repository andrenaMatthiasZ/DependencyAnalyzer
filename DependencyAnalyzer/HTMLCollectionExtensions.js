

function extensions() {
    Object.defineProperty(HTMLCollection.prototype, "map", {
        value: function (action) {
            const indices = [...Array(this.length)].map((_, index) => index);
            return indices.map(index => action(this.item(index)));
        },
        writable: true,
        configurable: true
    });
    
    Object.defineProperty(HTMLCollection.prototype, "toArray", {
        value: function () {
            const indices = [...Array(this.length)].map((_, index) => index);
            return indices.map(index => this.item(index));
        },
        writable: true,
        configurable: true
    });
}

extensions();

export default extensions;
