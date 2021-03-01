import React from 'react';

const Club = (props) => {
    const club = props.club;
    console.log(club);
    const total = club.reduce((total, player) => total + player.salary, 0);
    return (
        <div className="club">
            <h4>Club Details</h4>
            <p>Players Added: {club.length}</p>
            <p>Total Salary: ${total}</p>
        </div>
    );
};

export default Club;