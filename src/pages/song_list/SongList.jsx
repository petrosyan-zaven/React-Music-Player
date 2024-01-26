import React from 'react'
import SongRow from '../../components/song_row/SongRow'
import Player from '../../components/player/Player'
import  './songList.css'

function SongList() {

  // const play = buttons("PLAY")

  return (
    <div className='song-list'>
        <Player />
        <SongRow />
    </div>
  )
}

export default SongList