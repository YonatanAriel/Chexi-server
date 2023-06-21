const playlistsController = require("../DL/controller/playlists.controller");
const { addSong } = require("./songs.service");

async function getAllplaylists() {
  const allPlaylists = await playlistsController.read();
  if (!allPlaylists) throw "No playlists found";
  return allPlaylists;
}
//need to pass idFavorit: true if the playlist is liked songs
async function addPlaylist(data) {
  const newPlaylist = await playlistsController.create(data);
  return newPlaylist;
}
async function getPlaylistsByUserId(userId) {
  const playlists = await playlistsController.read({ userId: userId });
  if (!playlists) throw "No playlists found";
  return playlists;
}
async function getPlaylistById(_id) {
  const playlist = await playlistsController.readOne({ _id: _id });
  return playlist;
}
//need to get song data + playlist _id from client
async function addSongToPlaylist(songData, playlistId) {
  const playlist = await getPlaylistById(playlistId);
  if (!playlist) throw "playlist not found";
  const songId = await addSong(songData);
  if (!playlist.songsId.includes(songId)) {
      playlistsController.update({ _id: playlistId },{ $push: {songsId: songId}});
  } 
  return songData
}
module.exports = {
  addSongToPlaylist,
  getPlaylistsByUserId,
  getPlaylistById,
  addPlaylist,
  getAllplaylists,
};
