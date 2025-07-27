import { useState } from "react";

export default function Add({addTask}: {addTask: CallableFunction})
{
    function handleClick()
    {
        addTask(label);
        setLabel('');
    }

    const [label, setLabel] = useState('');
    
    return <div className="form">
        <input type="text" placeholder="new task" value={label} onChange={(e) =>setLabel(e.target.value)} />
        <button type="button" onClick={handleClick}>Add</button>
    </div>
}