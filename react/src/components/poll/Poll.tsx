import { useState } from 'react';
import '../../assets/poll.scss';
import Add from './Add';
import Option from './Option';
import Result from './Result';

export default function Poll()
{
    function addOption(option: string) {
      const list = options.slice();
      list.push({ label: option, vote: 0 });
      setOptions(list);
    }

    function onVote(index){
        const list = options.slice();
        list.map((o, i) => {
            if(i===index) o.vote++;
            return o;
        });
        setOptions(list);
    }

    function handleReset()
    {
        setOptions([]);
    }

    const [options, setOptions] = useState([]);
    const list = options.map((option, index) => {
            return (
              <li key={index}>
                <Option label={option.label} onVote={() => onVote(index)} />
              </li>
            );
    });

    return (
      <>
        <h1>Sondage</h1>
        <hr />
        <Add addOption={addOption} />
        <button type='button' onClick={handleReset}>Reset</button>
        <hr />
        <div>
          <ul className='choices'>{list}</ul>
          <hr />
          <Result votes={options} />
        </div>
      </>
    );
}