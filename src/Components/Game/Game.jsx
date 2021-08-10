import React, { useState } from 'react';
import classes from './Game.module.css'

const Game = () => {

    const [hidden, setHidden] = useState(true);

    function hide() {
        setHidden();
    }



    return (
        <div className={classes.game}>
            <h3 hidden={hidden} style={{ textAlign: "center", paddingBottom: "10px", color: "#cd774c" }}>Chosen !</h3>
            <img src="#" width="200px" height="300px"></img>
            <br></br>
            <p className={classes.game__title}>Long Long Long Long Game name</p>
            <button onClick={hide} className={classes.button}>Select</button>
        </div>
    );
};

export default Game;