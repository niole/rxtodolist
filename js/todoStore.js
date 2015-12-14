const Rx = require('rx');

class TodoStore {
  constructor(Do) {
    this.store = [];

    this.savedLists = [];

    this.add = new Rx.Subject();

    this.add.map( value => {
        this.store.push(value);
        return this.store;
      }).subscribe((val) => { Do(val); });

  }
}

module.exports = TodoStore;
