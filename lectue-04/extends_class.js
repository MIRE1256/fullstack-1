class Medie {
    constructor(info){
        this.publishDate = info.publishDate;
        this.name = info.name;
    }
}
class Song extends Medie{
    constructor(songDate){
        super(songDate);
        this.artist = songDate.artist
    }
}

const mySong = new Song({
    artist:"Queen",
    name: "bobbe",
    publishDate: 1975,
});
console.log(mySong);