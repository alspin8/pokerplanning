import "../resource/style/gamessetting.css";

import { ReactComponent as StartSvg } from "../resource/svg/start.svg";
import { ReactComponent as UploadSvg } from "../resource/svg/upload.svg";

import Table from "./Table";
import {useRef} from "react";

const GameSetting = ({config, hooks, start}, context) => {

    const [phook, thook, mhook] = hooks;

    const [mode, setMode] = mhook;

    const file = useRef(null);

    const handleFileUpload = () => {
        const fr = new FileReader();
        fr.readAsText(file.current.files[0], "UTF-8");
        fr.onload = e => {
            const json = JSON.parse(e.target.result)
            thook[4]()
            for (const task of json) {
                thook[1]({text: task.text})
            }
        }
    }

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
        <div className="flex flex-col h-screen w-screen justify-center align-center karanrina">
            <div className="flex flex-col gap-20 align-center master">
                <span className="text-4xl">Poker planning</span>
                <div className="flex gap-20">
                    <div className="flex flex-col h-450 cell gap-10">
                        <div className="flex justify-center align-center foo">
                            <span className="text-3xl text-center task-text">Task</span>
                            <div className="dl-button" onClick={() => file.current.click()}>
                                <UploadSvg height={25} width={25}/>
                            </div>
                            <input onChange={handleFileUpload} multiple={false} ref={file} type='file' accept=".json,application/json" hidden/>
                        </div>
                        <Table hook={thook} clazz="task"/>
                    </div>
                    <div className="flex flex-col h-450 cell gap-10">
                        <span className="text-3xl text-center foo">Player</span>
                        <Table hook={phook} clazz="player" limit={config.maxPlayer}/>
                    </div>
                </div>
                <div className="flex gap-20 f">
                    <div className="flex cell gap-10 mode-selector align-center">
                        <span className="text-3xl pr-2">Game mode</span>
                            {
                                config.modes.map((_mode, index) => {
                                    return (
                                        <span key={index} className={`${mode === _mode && "mode-button-active"} mode-button text-2xl`} onClick={() => setMode(_mode)}>
                                            {_mode}
                                        </span>
                                    )
                                })
                            }
                    </div>


                    <div className="cell" onClick={() => startGame()}>
                        <StartSvg width={80} height={80}/>
                    </div>
                </div>
            </div>

        </div>

    );
}

export default GameSetting;