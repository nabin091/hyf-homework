// Add song to database
const songDatabase = [{
    songId: 1,
    title: 'My baby',
    artist: 'Soggy socks',
  },
  {
    songId: 2,
    title: '3 nails in wood',
    artist: 'The carpenters',
  },
  {
    songId: 3,
    title: 'Blacker than black',
    artist: 'Instant coffee',
  },
  {
    songId: 4,
    title: 'When is enough too little?',
    artist: 'The spies girls',
  },
];

const myPlaylist = [];

//adding new song to database
function addSongToDatabase(song){
    songDatabase.push(song);
}
addSongToDatabase({songId:5,title:"resham firi firi",artist:"Amrit gurung"});
addSongToDatabase({songId:6,title:"man magan",artist:"Dhiraj rai"});
console.log(songDatabase);

//searching for a song
function getSongByTitle(title){
    for (let i = 0; i <songDatabase.length; i++)
    if (title === songDatabase[i].title){
        return songDatabase[i];
    }
}
    const searchedSong = getSongByTitle ("resham firi firi");
console.log(searchedSong); // return song

// creating own playlist
const ownPlaylist=[];
function addSongToMyPlaylist(title){
ownPlaylist.push(getSongByTitle(title))
}
addSongToMyPlaylist("My baby");
console.log(ownPlaylist);