const playlistsController = require("../DL/controller/playlists.controller");
const { addSong } = require("./songs.service");

async function getAllplaylists() {
  const allPlaylists = await playlistsController.read();
  if (!allPlaylists) throw "No playlists found";
  return allPlaylists;
}
//need to pass idFavorit: true if the playlist is liked songs
async function addPlaylist(data) {
  if(data.name.trim().length < 1 || !data.userId) throw "Missing data"
  if(data.isFavorite === true){
    const isLikedSongsPlaylistExist = await getLikedSongsPlaylist(data.userId)
    if(isLikedSongsPlaylistExist)  return isLikedSongsPlaylistExist
  }
  // why is that ruin the request?
  const newPlaylist = await playlistsController.create(data);
  return newPlaylist
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
async function addSongToPlaylist(songData, playlistId) {
  const playlist = await getPlaylistById(playlistId);
  if (!playlist) throw "playlist not found";
  const songId = await addSong(songData);
  if (!playlist.songsId?.find(song => song._id.toString() == songId.toString())) {
     await playlistsController.update({ _id: playlistId },{ $push: {songsId: songId}});
  } 
  return songData
}
async function getLikedSongsPlaylist(userId) {
  const LikedSongsPlaylist = await playlistsController.readOne({ userId: userId, isFavorite: true })
  return LikedSongsPlaylist
}
async function deleteSongFromPlaylist(playlistId, songId){
  const updatedPlaylist = await playlistsController.update({_id: playlistId}, { $pull: { songsId: songId } })
  if (!updatedPlaylist) {
    throw "Playlist not found"
  }
  return "The song was deleted from the playlist"
  // const updatedPlaylistData = await playlistsController.readOne({_id: playlistId});
  // return updatedPlaylistData
}
module.exports = {
  addSongToPlaylist,
  getPlaylistsByUserId,
  getPlaylistById,
  addPlaylist,
  getAllplaylists,
  getLikedSongsPlaylist,
  deleteSongFromPlaylist
};
