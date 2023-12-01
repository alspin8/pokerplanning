import {useState} from "react";

import {ReactComponent as AddIcon} from "../resource/svg/add.svg";
import {ReactComponent as RemoveIcon} from "../resource/svg/remove.svg";
import {ReactComponent as CheckmarkIcon} from "../resource/svg/checkmark.svg";

const TaskTable = ({data, add, remove}, context) => {

    const [isAdding, setAdding] = useState(false);
    const [text, setText] = useState("");

    const handleAddTask = () => {
        console.log("handle add")
        text !== "" && add(text);
        setText("");
        setAdding(false);
    }

    return (
        <div className="flex flex-col wrap">
            <div className="karanrina text-l">
                Task list
            </div>
            <table>
                <tbody>
                    {data.map((row, index) => {
                        return (
                            <tr key={index} className="karanrina text-md">
                                <td>{index + 1}</td>
                                <td className="pl-2">{row.text}</td>
                                <td className="pl-2" onClick={() => remove(index)}><RemoveIcon/></td>
                            </tr>
                        )
                    })}
                    {
                        isAdding ?
                            <>
                                <tr className="karanrina text-md">
                                    <td>{data.length + 1}</td>
                                    <td className="pl-2">
                                        <input className="input-reset karanrina text-md" placeholder="Add your taks" type="text" onChange={(e) => setText(e.target.value)}/>
                                    </td>
                                    <td className="pl-2" onClick={() => setAdding(false)}><RemoveIcon/></td>
                                </tr>
                                <tr className="text-md">
                                    <td></td>
                                    <td></td>
                                    <td className="pl-2">
                                        <CheckmarkIcon onClick={handleAddTask}/>
                                    </td>
                                </tr>
                            </>
                        :
                            <tr className="text-md">
                                <td></td>
                                <td></td>
                                <td className="pl-2">
                                    <AddIcon onClick={() => setAdding(true)}/>
                                </td>
                            </tr>
                    }
                </tbody>
            </table>
        </div>
    )
}

export default TaskTable;