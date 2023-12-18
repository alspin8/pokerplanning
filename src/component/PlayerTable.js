import React, { useState } from "react";
import { ReactComponent as AddIcon } from "../resource/svg/add.svg";
import { ReactComponent as RemoveIcon } from "../resource/svg/remove.svg";
import {ReactComponent as CheckmarkIcon} from "../resource/svg/checkmark.svg";
import "../resource/style/style.css";

const PlayerTable = ({ data, add, remove }) => {
  const [isAdding, setAdding] = useState(false);
  const [name, setName] = useState("");
  const maxPlayers = 4;

  const handleAddPlayer = () => {
    if (name !== "") {
        if (data.length < maxPlayers) {
            add(name);
            setName("");
            setAdding(false);
          } else {
            alert("Nombre de joueurs max atteint !");
          }
    }
  };

  return (
    <div className="flex flex-col wrap player-table-container">
        <div className="flex flex-col wrap">
        <div className="karanrina text-l">Player list</div>
        <table>
            <tbody>
            {data.map((row, index) => (
                <tr key={index} className="karanrina text-md">
                <td>{index + 1}</td>
                <td className="pl-2">{row}</td>
                <td className="pl-2" onClick={() => remove(index)}>
                    <RemoveIcon />
                </td>
                </tr>
            ))}
            {isAdding ? (
                <>
                <tr className="karanrina text-md">
                    <td>{data.length + 1}</td>
                    <td className="pl-2">
                    <input
                        className="input-reset karanrina text-md"
                        placeholder="Add player"
                        type="text"
                        onChange={(e) => setName(e.target.value)}
                    />
                    </td>
                    <td className="pl-2" onClick={() => setAdding(false)}>
                    <RemoveIcon />
                    </td>
                </tr>
                <tr className="text-md">
                    <td></td>
                    <td></td>
                    <td className="pl-2">
                        <CheckmarkIcon onClick={handleAddPlayer}/>
                    </td>
                </tr>
                </>
            ) : (
                <tr className="text-md">
                <td></td>
                <td></td>
                <td className="pl-2">
                    <AddIcon onClick={() => setAdding(true)} />
                </td>
                </tr>
            )}
            </tbody>
        </table>
        </div>
    </div>
  );
};

export default PlayerTable;
