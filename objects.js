var playlist = {'Kanye West': 'Jesus Walks'};

function updatePlaylist(obj, artist, song){
  Object.assign(obj, {artist: song})
  return newPlaylist
  
}

function removeFromPlaylist(obj, artist){
  delete obj.artist;
  return obj
}