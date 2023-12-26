import React, {useState} from "react";

import {ReactComponent as Tapis     } from "../resource/svg/tapis.svg";
import {ReactComponent as Card0     } from "../resource/svg/0.svg";
import {ReactComponent as Card1     } from "../resource/svg/1.svg";
import {ReactComponent as Card1_2   } from "../resource/svg/1_2.svg";
import {ReactComponent as Card2     } from "../resource/svg/2.svg";
import {ReactComponent as Card3     } from "../resource/svg/3.svg";
import {ReactComponent as Card5     } from "../resource/svg/5.svg";
import {ReactComponent as Card8     } from "../resource/svg/8.svg";
import {ReactComponent as Card13    } from "../resource/svg/13.svg";
import {ReactComponent as Card20    } from "../resource/svg/20.svg";
import {ReactComponent as Card40    } from "../resource/svg/40.svg";
import {ReactComponent as Card100   } from "../resource/svg/100.svg";
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

    const gameStateHook = useState("config");
    const [gameState, setGameState] = gameStateHook;

    console.log(tasks);
    console.log(players);

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
              <Tapis style={{ width: "70%", height: "auto" }} />
              
              {/* Test d'affichage des taches et joueurs pour voir si le passage à une autre page marche. */}
              <div>
                <h2>Tâches choisies :</h2>
                <ul>
                    
                  {tasks.map((task, index) => (
                    <li key={index}>{task.text}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h2>Joueurs choisis :</h2>
                <ul>
                  {players.map((player, index) => (
                    <li key={index}>{player}</li>
                  ))}
                </ul>
              </div>
            </>
          )}
        </>
      );
    };

export default Game;