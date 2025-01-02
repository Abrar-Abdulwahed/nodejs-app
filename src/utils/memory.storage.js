const MemoryStorage = require('memorystorage');
const store = new MemoryStorage('note-app');

exports.getKeys = () => {
    const keys = [];
    for (var i=0; i<store.length; i++) {
        var key = store.key(i);
        keys.push(key);
    }
    return keys;
}

exports.getValues = () => {
    const values = [];
    for (var i=0; i<store.length; i++) {
        var key = store.key(i);
        var value = store.getItem(key);
        values.push(value);
    }
    return values;
}
exports.store = store