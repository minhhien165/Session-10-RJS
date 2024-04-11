"use strict";
class Song {
    constructor(id, name, length) {
        this.id = id;
        this.name6 = name;
        this.length6 = length;
    }
    get name() {
        return this.name6;
    }
    set name(newName) {
        this.name6 = newName;
    }
    get length() {
        return this.length6;
    }
    set length(newLength) {
        this.length6 = newLength;
    }
}
let song = new Song(1, "123", 180);
console.log(song.name);
console.log(song.length);
song.name = "456";
song.length = 200;
console.log(song.name);
console.log(song.length);
