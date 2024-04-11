class Song {
    public readonly id: number;
    private name6: string;
    private length6: number;
  
    constructor(id: number, name: string, length: number) {
      this.id = id;
      this.name6 = name;
      this.length6 = length;
    }
  
    get name(): string {
      return this.name6;
    }
  
    set name(newName: string) {
      this.name6 = newName;
    }
  
    get length(): number {
      return this.length6;
    }
  
    set length(newLength: number) {
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