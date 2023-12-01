import {useState} from "react";

const usePlayer = (initialState = []) => {
    const [players, setPlayers] = useState(initialState);

    const add = (name) => {
        setPlayers(prev => [...prev, name]);
    }

    const remove = (idx) => {
        setPlayers(prev => prev.filter((_, i) => i !== idx))
    }

    return [players, add, remove];
}

export default usePlayer;