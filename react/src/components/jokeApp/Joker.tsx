import { useEffect, useState } from "react"

export default function Joker()
{
    const [joke, setJoke] = useState('');
    const [error, setError] = useState(false);

    useEffect(() => {
        loadJoke();
    }, []);

    function loadJoke()
    {
        setJoke("");
        fetch("https://api.chucknorris.io/jokes/random")
          .then((res) => {
            if(!res.ok) throw new Error(`Error ${res.status} ${res.statusText}`);
            return res.json();
          })
          .then((data) => {
            setJoke(data.value);
          })
          .catch((e) => {
            console.error(e);
            setJoke('');
            setError(e.message);
          });
    }

    return (
      <section>
        <h1>Joke App</h1>
        <p>{error ? error : joke ? joke : "loading..."}</p>
        <button type="button" onClick={loadJoke}>
          {error ? "retry" : "new joke"}
        </button>
      </section>
    );
}