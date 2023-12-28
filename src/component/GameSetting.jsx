import "../resource/style/gamessetting.css";

import { ReactComponent as StartSvg } from "../resource/svg/start.svg";

import Table from "./Table";

const GameSetting = ({config, hooks, start}, context) => {

    const [phook, thook, mhook] = hooks;

    const [mode, setMode] = mhook;

    const startGame = () => {
        // Check if the necessary conditions are met (e.g., minimum players, tasks)
        if (phook[0].length < 2 || thook[0].length === 0) {
            alert("Ajouter au moins 2 joueurs et quelques tâches avant de lancer le jeu.");
            return;
        }

        // Update the game state to indicate that the configuration is done
        start();
    };

    return (
        <div className="flex flex-col h-full w-full justify-center align-center karanrina">
            <div className="flex flex-col gap-20 align-center master">
                <span className="text-4xl">Poker planning</span>
                <div className="flex gap-20">
                    <div className="flex flex-col h-400 cell gap-10">
                        <span className="text-3xl text-center foo">Task</span>
                        <Table hook={thook} clazz="task"/>
                    </div>
                    <div className="flex flex-col h-400 cell gap-10">
                        <span className="text-3xl text-center foo">Player</span>
                        <Table hook={phook} clazz="player" limit={4}/>
                    </div>
                </div>
                <div className="flex gap-20 f">
                    <div className="flex cell gap-10 mode-selector">
                        <span className="text-3xl text-center">Game mode</span>
                            {
                                config.modes.map((mode, index) => {
                                    return (
                                        <span className="mode-button text-2xl">
                                            {mode}
                                        </span>
                                    )
                                })
                            }
                    </div>


                    <div className="cell">
                        <StartSvg width={80} height={80}/>
                    </div>

                    {/*<button className="pilule-btn" onClick={startGame}>*/}
                    {/*    Lancer le jeu*/}
                    {/*</button>*/}
                </div>
            </div>

        </div>

    );
}

export default GameSetting;