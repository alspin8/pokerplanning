import {useState} from "react";

const usePlayer = (initialState = []) => {
    const [players, setPlayers] = useState(initialState);

    const add = (name, card = undefined) => {
        setPlayers(prev => [...prev, {name, card}]);
    }

    const remove = (idx) => {
        setPlayers(prev => prev.filter((_, i) => i !== idx))
    }

    const setCard = (idx, card) => {
        setPlayers(prev => {
            prev[idx].card = card;
            return [...prev];
        })
    }

    return [players, add, remove, setCard];
}

export default usePlayer;