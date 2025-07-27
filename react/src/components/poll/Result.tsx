export default function Result({votes}: {votes: Array<{label: string, vote: number}>}){

    const totalVotes = votes.reduce((a,v) => {
        return a + v.vote; 
    }, 0);
    const results = votes
    .toSorted((a,b)=> {
        return a.vote > b.vote ? -1 : 1; 
    })
    .map((o, i) => {
        const percent = Math.round(o.vote / totalVotes * 100);
        return <tr key={i}>
            <th>{o.label}</th>
            <td>{o.vote} ({percent}%)</td>
        </tr>
    })
    
    return (
      <>
        <h2>Résultat</h2>
        <p>
          Nombre de votes : <b>{totalVotes}</b>
        </p>
        <table>
          <tbody>{results}</tbody>
        </table>
      </>
    );
}