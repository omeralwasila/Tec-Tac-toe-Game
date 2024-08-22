import { useState } from "react";

export default function Player({ initialname, symbol }) {
  const [PlayerName, setPlayerName] = useState(initialname);
  const [isEditing, setIsEditing] = useState(false);

  function handelEditClick() {
    setIsEditing(!isEditing);
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
    <li>
      <span className="player">
        {EditingPlayerName}

        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handelEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
