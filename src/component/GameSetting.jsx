import "../resource/style/style.css";

import Table from "./Table";
import PlayerTable from "./PlayerTable";

const GameSetting = ({config, hooks, start}, context) => {

    const startGame = () => {
        // Check if the necessary conditions are met (e.g., minimum players, tasks)
        if (players.length < 2 || tasks.length === 0) {
            alert("Ajouter au moins 2 joueurs et quelques tâches avant de lancer le jeu.");
            return;
        }
    
        // Update the game state to indicate that the configuration is done
        start();
    };

    const [phook, thook, mhook] = hooks;

    const [players, addPlayer, removePlayer] = phook;
    const [tasks,   addTask,   removeTask]   = thook;

    const [mode, setMode] = mhook;

    return (
        <>
            <Table hook={thook} classSize="task-table"/>
            <Table hook={phook} classSize="player-table"/>
            {/*Faire attention a la longueur des taches, on peut définir un max de caractères peut être ? Comme pour le nom un max de joueur*/}
            {/*<PlayerTable data={players} add={addPlayer} remove={removePlayer}/>*/}
            
        
            <button className="custom-button-start" onClick={startGame}>
                Lancer le jeu
            </button>
        </>

    );
}

export default GameSetting;