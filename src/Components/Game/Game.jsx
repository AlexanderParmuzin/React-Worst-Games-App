import React from 'react';
import classes from './Game.module.css'

const Game = () => {

    return (
        <div className={classes.game}>
            <h3 style={{ textAlign: "center", paddingBottom: "10px", color: "#cd774c" }}>Chosen !</h3>
            <img src="#" width="200px" height="300px"></img>
            <br></br>
            <p className={classes.game__title}>Long Long Long Long Game name</p>
            <button className={classes.button}>Select</button>
        </div>
    );
};

export default Game;