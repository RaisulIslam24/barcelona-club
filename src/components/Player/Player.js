import React from 'react';
import { useEffect, useState } from 'react';
import playerData from '../../data/data.json';
import './Player.css'
import PlayerDetails from '../PlayerDetails/PlayerDetails';
import Club from '../Club/Club';

const Player = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        setData(playerData);
    }, []);
    const [club, setClub] = useState([]);

    const handleAddPlayer = (player) =>{
        const newClub = [...club, player];
        setClub(newClub);
    }

    return (
        <div className="player-container">
            <div className="playerDetails-container">
                {
                    playerData.map(player => <PlayerDetails
                        handleAddPlayer = {handleAddPlayer}
                        player={player}
                        ></PlayerDetails>)
                }
            </div>
            <div className="club-container">
                <Club club={club}></Club>
            </div>
        </div>
    );
};

export default Player;