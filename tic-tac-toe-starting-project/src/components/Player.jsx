import { useState } from 'react'
export default function ({ name, symbol, isActive, onChangeName }) {
    const [newPlayerName, setPlayerName] = useState(name);
    const [isEditing, setIsEditing] = useState(false);

    function editButtonHandle() {
        setIsEditing((isEditing) => !isEditing);
        if (isEditing) {
            onChangeName(symbol, newPlayerName)
        }
    }

    function setPlayerNameHandle(event) {
        setPlayerName(event.target.value);
    }

    let playerName = <span className="player-name">{newPlayerName}</span>

    if (isEditing) {
        playerName = <input type='text' required value={newPlayerName} onChange={setPlayerNameHandle}></input>
    }

    return (<li className={isActive ? 'active' : undefined}>
        <span className="player">
            {playerName}
            <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={editButtonHandle}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>)
}