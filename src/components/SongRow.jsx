import React from 'react';
import { useData } from '../Contexts/ContextProvider';

function SongRow() {
    const data = useData();

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
                    <tr className="custom-row" key={song.id}>
                        <td>"pl"</td>
                        <td>{song.songName}</td>
                        <td>{song.artistName}</td>
                        <td>{song.trackNumber}</td>
                        <td>sirt pt</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default SongRow;