import { useState } from 'react';
import '../../assets/todolist.scss';
import Task from './Task';
import Add from './Add';

type task = {
    label: string;
    done: boolean;
    date: number;
};

export default function List()
{
    function handleToggle(date: number)
    {
        const updatedTasks = tasks.slice().map((task) => {
            return task.date === date ? {...task, done: !task.done} : task;
        });
        setTasks(updatedTasks);
    }

    function addTask(task)
    {
        if (!task) return;
        const newList = tasks.slice();
        newList.push({label: task, done: false, date: Date.now()});
        setTasks(newList);
    }

    function deleteTask(date:number)
     {
        const newTasks = tasks.filter((t) => t.date !== date);
        setTasks(newTasks);
     }

    const [tasks, setTasks] = useState([
      { date: 1, label: "lorem", done: false },
      { date: 2, label: "ipsum", done: false },
      { date: 3, label: "sit", done: false },
      { date: 4, label: "dolor", done: false },
      { date: 5, label: "amet", done: false },
    ]);

    const list = tasks
        .toSorted((a,b) => {
            if(a.done) return 1;
            if(b.done) return -1;
            return a.date < b.date;
        }).map((t, i) => {
            return <li key={t.date}><Task label={t.label} done={t.done} onToggle={() => handleToggle(t.date)} deleteTask={() => deleteTask(t.date)} /></li>;
        });
    
    return (
      <div className="list">
        <h1>Todo list</h1>
        <Add addTask={addTask} />
        <ul>{list}</ul>
      </div>
    );
}