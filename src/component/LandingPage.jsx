import {useState} from "react";
import TaskTable from "./TaskTable";
import PlayerTable from "./PlayerTable";
import "../resource/style/style.css";

const LandingPage = ({config, playersHook, tasksHook, modeHook, gStateHook}, context) => {

    const startGame = () => {
        // Check if the necessary conditions are met (e.g., minimum players, tasks)
        if (players.length < 2 || tasks.length === 0) {
            alert("Jouter au moins 2 joueurs et quelques tâches avant de lancer le jeu.");
            return;
        }
    
        // Update the game state to indicate that the configuration is done
        setGameState("config_done");
    };

    const [name, setName] = useState("");
    const [text, setText] = useState("");
    
    const [numPlayers, setNumPlayers] = useState(2);

    const [players, addPlayer, removePlayer] = playersHook;
    const [tasks, addTask, removeTask] = tasksHook;
    const [mode, setMode] = modeHook;
    const [_, setGameState] = gStateHook;

    return (
        <>
            {/*{config.modes.map(_mode => {*/}
            {/*    return <button style={{backgroundColor: `${mode === _mode ? "red" : "white"}`}} onClick={() => setMode(_mode)}>{_mode}</button>*/}
            {/*})}*/}
            {/*<ul>*/}
            {/*    {players.map((player, index) => {*/}
            {/*        return <li key={index}>*/}
            {/*            {player}*/}
            {/*            <button onClick={() => removePlayer(index)}>Remove</button>*/}
            {/*        </li>*/}
            {/*    })}*/}
            {/*</ul>*/}
            {/*<div style={{display: "flex"}}>*/}
            {/*    <input type="text" id="name" onChange={(e) => setName(e.target.value)}/>*/}
            {/*    <button onClick={() => name !== "" && addPlayer(name)}>AddPlayer</button>*/}
            {/*</div>*/}
            {/*<ul>*/}
            {/*    {tasks.map((task, index) => {*/}
            {/*        return <li key={index}>*/}
            {/*            {task.text}*/}
            {/*            <button onClick={() => removeTask(index)}>Remove</button>*/}
            {/*        </li>*/}
            {/*    })}*/}
            {/*</ul>*/}

            <TaskTable data={tasks} add={addTask} remove={removeTask}/>
            {/*Faire attention a la longueur des taches, on peut définir un max de caractères peut être ? Comme pour le nom un max de joueur*/}
            <PlayerTable data={players} add={addPlayer} remove={removePlayer}/>
            
        
            <button className="custom-button-start" onClick={startGame}>
                Lancer le jeu
            </button>
            {/*<div style={{display: "flex"}}>*/}
            {/*    <input type="text" id="name" onChange={(e) => setText(e.target.value)}/>*/}
            {/*    <button onClick={() => text !== "" && addTask(text)}>AddTask</button>*/}
            {/*</div>*/}

            {/*<button onClick={() => setGameState("config_done")}>Done</button>*/}
        </>

    );
}

export default LandingPage;