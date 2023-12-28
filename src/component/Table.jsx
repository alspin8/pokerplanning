import "../resource/style/table.css"

import {useEffect, useState} from "react";

import {ReactComponent as AddIcon      } from "../resource/svg/add.svg";
import {ReactComponent as RemoveIcon   } from "../resource/svg/remove.svg";
import {ReactComponent as CheckmarkIcon} from "../resource/svg/checkmark.svg";

const Table = ({hook, limit, clazz}, context) => {

    const [data, add, remove] = hook;

    const [isAdding, setAdding] = useState(false);
    const [text,       setText]   = useState("");

    useEffect(() => {
        if (data.length <= 0)
            setAdding(true);
    }, []);

    const handleAdd = () => {
        if (text !== "") {
            if (limit && data.length > limit) {
                alert("Limite d'entrées atteinte.")
            }
            else {
                add({text: text})
                setText("");
                setAdding(false);
            }
        }
    }

    return (
        <div className={`flex`}>
            <table className={`input-table ${clazz}`}>
                <tbody>
                    {
                        data.map((row, index) => {
                            return (
                                <tr key={index}>
                                    <td> {index + 1} </td>
                                    <td> {row.text } </td>
                                    <td
                                        onClick={() => {
                                            setAdding(data.length <= 1);
                                            remove(index);
                                        }}
                                    >
                                        <RemoveIcon/>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    {
                        isAdding ?
                            <>
                                <tr>
                                    <td> {data.length + 1} </td>
                                    <td>
                                        <input
                                            placeholder="New"
                                            type="text"
                                            onChange={(e) => setText(e.target.value)}
                                        />
                                    </td>
                                    <td onClick={() => setAdding(data.length < 1)}>
                                        <RemoveIcon/>
                                    </td>
                                </tr>
                                <tr>
                                    <td> </td>
                                    <td> </td>
                                    <td>
                                        <CheckmarkIcon onClick={handleAdd}/>
                                    </td>
                                </tr>
                            </>
                        :
                            <tr>
                                <td></td>
                                <td></td>
                                <td>
                                    <AddIcon onClick={() => setAdding(true)}/>
                                </td>
                            </tr>
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Table;