import React, { useState } from "react";

import { ReactComponent as Tapis } from "../resource/svg/tapis.svg";
import { ReactComponent as Card0 } from "../resource/svg/0.svg";
import { ReactComponent as Card1 } from "../resource/svg/1.svg";
import { ReactComponent as Card1_2 } from "../resource/svg/1_2.svg";
import { ReactComponent as Card2 } from "../resource/svg/2.svg";
import { ReactComponent as Card3 } from "../resource/svg/3.svg";
import { ReactComponent as Card5 } from "../resource/svg/5.svg";
import { ReactComponent as Card8 } from "../resource/svg/8.svg";
import { ReactComponent as Card13 } from "../resource/svg/13.svg";
import { ReactComponent as Card20 } from "../resource/svg/20.svg";
import { ReactComponent as Card40 } from "../resource/svg/40.svg";
import { ReactComponent as Card100 } from "../resource/svg/100.svg";
// import {ReactComponent as CardInter } from "../resource/svg/inter.svg";
import usePlayer from "../hooks/UsePlayer";
import useTask from "../hooks/UseTask";
import LandingPage from "./LandingPage";

const Game = () => {

    const config = {
        modes: ["mean", "majority"],
        cards: [Card0, Card1, Card1_2, Card2, Card3, Card5, Card8, Card13, Card20, Card40, Card100],
        tapis: Tapis,
        maxPlayer: 4
    }

    const playersHook = usePlayer();
    const [players, addPlayer, removePlayer] = playersHook;
    const tasksHook = useTask();
    const [tasks, addTask, removeTask, setTaskText, setTaskCard] = tasksHook;
    const modeHook = useState(config.modes[0]);
    const [mode, setMode] = modeHook;

    const [currentTaskIndex, setCurrentTaskIndex] = useState(0);
    const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
    const [cardPlayed, setCarPlayed] = useState(0);
    const [playersPlayed, setPlayersPlayed] = useState(0);

    const gameStateHook = useState("config");
    const [gameState, setGameState] = gameStateHook;

    console.log(tasks);
    console.log(players);
    console.log(config.cards);

    const endTurn = () => {
        setPlayersPlayed(0);
        setCurrentPlayerIndex((prevIndex) => (prevIndex + 1) % players.length);
        if (cardPlayed !== ""){
            playCard();
        }
        else{
            alert("Vous devez sélectionnez une carte avant de poursuivre.");
        }
        
    };

    const updateCard = () => {
        setCarPlayed()

    }

    const playCard = () => {
        setPlayersPlayed((prevCount) => prevCount + 1);

        if (playersPlayed === players.length - 1) {
            setPlayersPlayed(0);
            setCurrentTaskIndex((prevIndex) => (prevIndex + 1) % tasks.length);
        }
    };

    return (
        <>
            {gameState === "config" && (
                <>
                    <LandingPage
                        config={config}
                        modeHook={modeHook}
                        tasksHook={tasksHook}
                        playersHook={playersHook}
                        gStateHook={gameStateHook}
                    />
                </>
            )}

            {gameState !== "config" && (
                <>
                    <Tapis style={{ width: "40%", height: "auto", marginLeft: "30%" }} />

                    <div style={{ textAlign: "center" }}>
                        <h3>{tasks[currentTaskIndex]?.text}</h3>
                        <h2>{`${players[currentPlayerIndex]}, à toi de jouer`}</h2>

                        <div style={{ display: "flex", justifyContent: "center" }}>
                            {config.cards.map((Card, index) => (
                                <div key={index} style={{ margin: "5px" }}>
                                    <Card
                                        style={{ width: "50px", height: "auto" }}
                                        onClick={updateCard}
                                    />
                                </div>
                            ))}
                        </div>

                        <button
                            style={{ display: "block", margin: "20px auto", width: "60px" }}
                            onClick={endTurn}
                        >
                            Fin du tour
                        </button>
                    </div>
                </>
            )}
        </>
    );
};

export default Game;