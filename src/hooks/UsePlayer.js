import {useState} from "react";

const usePlayer = (initialState = []) => {
    const [players, setPlayers] = useState(initialState);

    // to add new player : add({text: "", ...})
    const add = (player) => {
        setPlayers(prev => [...prev, player]);
    }

    const remove = (idx) => {
        setPlayers(prev => prev.filter((_, i) => i !== idx))
    }

    // to set new player : set(index, {text: "", ...})
    const set = (idx, player) => {
        setPlayers(prev => {
            prev[idx] = {...prev[idx], ...player};
            return [...prev];
        })
    }

    return [players, add, remove, set];
}

export default usePlayer;