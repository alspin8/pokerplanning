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
import { ReactComponent as CardCafe } from "../resource/svg/PauseCafe.svg";

import usePlayer from "../hooks/UsePlayer";
import useTask from "../hooks/UseTask";
import GameSetting from "./GameSetting";
import "../resource/style/style.css";

//variables externes
var playersPlayed = 0;

const Game = () => {

    const config = {
        modes: ["mean", "majority"],
        cards: [CardInter, Card0, Card1, Card1_2, Card2, Card3, Card5, Card8, Card13, Card20, Card40, Card100, CardCafe],
        maxPlayer: 4
    }


    //constantes
    const playersHook = usePlayer();
    const [players, addPlayer, removePlayer, setPlayer] = playersHook;
    const tasksHook = useTask();
    const [tasks, addTask, removeTask, setTask] = tasksHook;
    const modeHook = useState(config.modes[0]);
    const [mode, setMode] = modeHook;

    const [currentTaskIndex, setCurrentTaskIndex] = useState(0);
    const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
    const [cardPlayed, setCardPlayed] = useState(0);

    const gameStateHook = useState("config");
    const [gameState, setGameState] = gameStateHook;

    //MARCHE PAS A CORRIGER
    const unanime = () => {
        console.log("resolution");
        //MARCHE QUE POUR 4
        for (let i = 0; i < players.length-2; i++) {
            if (players[i].card == players[i+1].card){
                setTask(currentTaskIndex, {card: players[i].card});
                setCurrentTaskIndex((prevIndex) => (prevIndex + 1) % tasks.length);
                console.log("Hey yo");
            }
            else{
                alert("Veuillez faire un débat et recommencer le vote pour cette tâche")
                setTask(currentTaskIndex, {card: undefined});
                setCurrentTaskIndex((prevIndex) => (prevIndex) % tasks.length);
                console.log("Yo Hey");
                break;
            }
        }
    };

    //Afficher la bonne carte en fonction du choix des joueurs
    const renderCardByIndex = (indexCard, indexPlayer) => {
        var nomClasse = "card_onTable_"+indexPlayer
        switch (indexCard) {
            case -1:
                return <CardInter className={nomClasse} />
            case 0:
                return <Card0 className={nomClasse} />;
            case 1:
                return <Card1 className={nomClasse} />;
            case 2:
                return <Card1_2 className={nomClasse} />;
            case 3:
                return <Card2 className={nomClasse} />;
            case 4:
                return <Card3 className={nomClasse} />;
            case 5:
                return <Card5 className={nomClasse} />;
            case 6:
                return <Card8 className={nomClasse} />;
            case 7:
                return <Card13 className={nomClasse} />;
            case 8:
                return <Card20 className={nomClasse} />;
            case 9:
                return <Card40 className={nomClasse} />;
            case 10:
                return <Card100 className={nomClasse} />;
            case 11:
                return <CardCafe className={nomClasse} />;
            default:
                return null;
        }
    };

    //Choix de la carte joué 
    const updateCard = (cardIndex) => {
        setCardPlayed(cardIndex); 
        if (playersPlayed == players.length){
            playersPlayed = 0;
        }  
    }

    //Fin du tour (clique sur le bouton)
    const endTurn = () => {
        setCurrentPlayerIndex((prevIndex) => (prevIndex + 1) % players.length);
        setPlayer(currentPlayerIndex, { card: cardPlayed });
        setCardPlayed(0);
        playersPlayed += 1;
        if (playersPlayed === players.length) {
            unanime()
        }
    };

    return (
        <>
            {gameState === "config" && (
                <>
                    <GameSetting
                        config={config}
                        hooks={[playersHook, tasksHook, modeHook]}
                        start={() => setGameState("play")}
                    />
                </>
            )}

            {gameState === "play" && (
                <>
                    

                    <h1 className="titre_page">Planning Poker</h1>
                        <Tapis style={{ width: "50%", height: "auto", marginLeft: "25%", zIndex: 1 }}/>

                    {playersPlayed === (players.length) && (
                        <div>
                            {players.map((Player, index) =>
                                renderCardByIndex((Player.card)-1, index)
                                
                            )}
                            
                        </div>
                    )}

                    <div className="titre_text">
                        <h3>{tasks[currentTaskIndex]?.text}</h3>
                        <h2>{`${players[currentPlayerIndex].text}, à toi de jouer`}</h2>

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