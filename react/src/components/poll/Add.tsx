import { useState } from "react";

export default function Add({addOption}: {addOption: CallableFunction})
{
    const [newChoice, setNewChoice] = useState('');
    
    function handleNew()
    {
        if (!newChoice) return;
        addOption(newChoice);
        setNewChoice('');
    }

    return (
      <div>
        <input
          type="text"
          value={newChoice}
          onChange={(e) => setNewChoice(e.target.value)}
        />
        <button type="button" onClick={handleNew}>
          Ajouter
        </button>
      </div>
    );
}