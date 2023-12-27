import React, { useState } from "react";

import { ReactComponent as Tapis } from "../resource/svg/tapis.svg";
import { ReactComponent as CardInter } from "../resource/svg/inter.svg";
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
import "../resource/style/style.css";

const Game = () => {

    const config = {
        modes: ["mean", "majority"],
        cards: [CardInter, Card0, Card1, Card1_2, Card2, Card3, Card5, Card8, Card13, Card20, Card40, Card100],
        maxPlayer: 4
    }

    const playersHook = usePlayer();
    const [players, addPlayer, removePlayer, setPlayerCardTurn] = playersHook;
    const tasksHook = useTask();
    const [tasks, addTask, removeTask, setTaskText, setTaskCard] = tasksHook;
    const modeHook = useState(config.modes[0]);
    const [mode, setMode] = modeHook;

    const [currentTaskIndex, setCurrentTaskIndex] = useState(0);
    const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
    const [cardPlayed, setCardPlayed] = useState(0);
    const [playerCard, setPlayerCard] = useState(0);
    const [playersPlayed, setPlayersPlayed] = useState(0);

    const gameStateHook = useState("config");
    const [gameState, setGameState] = gameStateHook;

    //Problème : Afficher Carte sur le tapis (quoi mettre en défaut genre choix caché) 
    //Ajouter la carte que le joueur a choisi à son état ? Pour l'afficher à la fin du tour de tous les joueurs

    //Fin du tour (clique sur le bouton)
    const endTurn = () => {
        //console.log(playerCard);
        //MARCHE PAS
        console.log(currentPlayerIndex);
        console.log(cardPlayed);
        setPlayerCardTurn(currentPlayerIndex, cardPlayed);

        setCurrentPlayerIndex((prevIndex) => (prevIndex + 1) % players.length);
        playCard();
    };

    //Choix de la carte joué 
    const updateCard = (cardIndex) => {
        setCardPlayed(cardIndex);
    //     setPlayerCard(() => {
    //         return cardIndex;});
    }
    
    // Fonction pour passer au tour suivant si une carte a été choisi
    const playCard = () => {
        setCardPlayed(0);
        setPlayersPlayed((prevCount) => prevCount + 1);
        if (playersPlayed === players.length - 1) {
            setPlayersPlayed(0);
            console.log("Tout le monde à jouer");
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

            {gameState === "play" && (
                <>
                    <h1 className="titre_page">Planning Poker</h1>
                    <Tapis style={{ width: "50%", height: "auto", marginLeft: "25%" }} />

                    <div className="titre_text">
                        <h3>{tasks[currentTaskIndex]?.text}</h3>
                        <h2>{`${players[currentPlayerIndex]}, à toi de jouer`}</h2>

                        <div className="card_list">
                            {config.cards.map((Card, index) => (
                                <div key={index} className="card_div">
                                    <Card
                                        className={`card ${cardPlayed === index ? 'card_selected' : ''}`}
                                        onClick={() => updateCard(index)}
                                    />
                                </div>
                            ))}
                        </div>

                        <button
                            className="button-endTurn"
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