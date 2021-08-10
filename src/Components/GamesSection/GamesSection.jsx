import React from 'react';
import Game from '../Game/Game';
import classes from './GamesSection.module.css'

const GamesSection = () => {

    

    return (
        <div className={classes.gamesSection}>
            <Game />
            <Game />
            <Game />
            <Game />
            <Game />
        </div>
    );
};

export default GamesSection;