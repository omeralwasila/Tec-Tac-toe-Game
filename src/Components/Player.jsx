import { useState } from "react";

export default function Player({
  initialname,
  symbol,
  isActive,
  onChangeName,
}) {
  const [PlayerName, setPlayerName] = useState(initialname);
  const [isEditing, setIsEditing] = useState(false);

  function handelEditClick() {
    setIsEditing(!isEditing);
    if (isEditing) {
      onChangeName(symbol, PlayerName);
    }
  }
  function handelChange(event) {
    setPlayerName(event.target.value);
  }

  let EditingPlayerName = <span className="player-name"> {PlayerName}</span>;
  //   let btnCaption ='Edit';
  if (isEditing) {
    EditingPlayerName = (
      <input type="text" required value={PlayerName} onChange={handelChange} />
    );
    //    btnCaption ='Save';
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {EditingPlayerName}

        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handelEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
