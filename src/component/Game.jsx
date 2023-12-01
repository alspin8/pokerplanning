import React, {useState} from "react";

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

    return(
        <>
            {gameState === "config" && <LandingPage config={config} modeHook={modeHook} tasksHook={tasksHook} playersHook={playersHook} gStateHook={gameStateHook}/>}
        </>
    );
}

export default Game;