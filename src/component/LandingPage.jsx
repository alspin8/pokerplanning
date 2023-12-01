import {useState} from "react";
import TaskTable from "./TaskTable";

const LandingPage = ({config, playersHook, tasksHook, modeHook, gStateHook}, context) => {

    const [name, setName] = useState("");
    const [text, setText] = useState("");

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

            {/*<div style={{display: "flex"}}>*/}
            {/*    <input type="text" id="name" onChange={(e) => setText(e.target.value)}/>*/}
            {/*    <button onClick={() => text !== "" && addTask(text)}>AddTask</button>*/}
            {/*</div>*/}

            {/*<button onClick={() => setGameState("config_done")}>Done</button>*/}
        </>
    );
}

export default LandingPage;