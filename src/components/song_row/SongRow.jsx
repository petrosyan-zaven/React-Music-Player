import React from 'react';
import { useData } from '../../Contexts/ContextProvider';
import './songRow.css';
import { CaretRightOutlined } from '@ant-design/icons';

function SongRow() {
    const data = useData();

    const handlePlay =  (e) => {
        console.log("Play  " + e);
       }

    return (
        <table className='music_table'>
            <thead>
                <tr>
                    <th></th>
                    <th>Song Name</th>
                    <th>Artist Name</th>
                    <th>Track</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {data?.map((song) => (
                    <tr key={song.id}>
                        <td><i className="fa-solid fa-border-none"></i><button onClick={(e)=> {handlePlay(song.songName)}}><CaretRightOutlined /></button></td>
                        <td>{song.songName}</td>
                        <td>{song.artistName}</td>
                        <td>{song.trackNumber}</td>
                        <td className='icons'><i className="fa-solid fa-heart"></i>  <i className="fa-solid fa-check"></i> <i className="fa-solid fa-share"></i>  <i className="fa-solid fa-caret-down"></i></td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default SongRow;