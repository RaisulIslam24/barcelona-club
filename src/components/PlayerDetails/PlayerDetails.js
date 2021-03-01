import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import './PlayerDetails.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const PlayerDetails = (props) => {
    const {img, name, salary} = props.player;
    const [isClicked, setIsClicked] = useState(false);
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
                    disabled={isClicked}
                    className="btn btn-danger"
                    onClick={() => {props.handleAddPlayer(props.player)
                    setIsClicked(true)
                }}
                    >
                        <FontAwesomeIcon icon={faUserPlus} />
                        {isClicked ? " Already added" : " Add Player"}
                    </button>
            </div>
        </div>
    );
};

export default PlayerDetails;