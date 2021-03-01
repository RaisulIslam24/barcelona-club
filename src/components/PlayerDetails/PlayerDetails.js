import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import './PlayerDetails.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const PlayerDetails = (props) => {
    const {img, name, salary} = props.player;
    return (
        <div className="player">
            <div>
                <img src={img} alt=""/>
            </div>
            <div>
                <h3 className="player-name">Name: {name}</h3>
                <br/>
                <p>Salary: ${salary}</p>
                <br/>
                <button
                    className="btn btn-danger"
                    onClick={() => props.handleAddPlayer(props.player)}
                    >
                        <FontAwesomeIcon icon={faPlus} /> Add Player
                    </button>
            </div>
        </div>
    );
};

export default PlayerDetails;