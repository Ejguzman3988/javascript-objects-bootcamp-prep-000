var playlist = {'Kanye West': 'Jesus Walks'};

function updatePlaylist(obj, artist, song){
  return Object.assign(obj, {[artist]: song})
  
  
}

function removeFromPlaylist(obj, name){
  if (delete obj.name){
    return obj
  }
  else{
    return obj
  }
}