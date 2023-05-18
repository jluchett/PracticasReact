import React from "react";
import { useEffect, useState } from "react";
import './App.css'

const CAT_ENDPOINT_RANDOM = "https://catfact.ninja/fact";
const CAT_URL_PREFIX = "https://cataas.com";
function App() {
  const [pal, setPal] = useState();
  const [imageUrl, setImageUrl] = useState();

  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM)
      .then((res) => res.json())
      .then(data => {
        const { fact } = data
        setPal(fact)
        const firstWord = fact.split(' ')[0]
        console.log(firstWord)
        fetch(`https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`)
            .then(res => res.json())
            .then(data => {
                const { url} = data
                setImageUrl(url)
            })
    })
  }, []);
  return (
    <main>
      <h1>App gatitos</h1>
      {pal && <p>{pal}</p>}
      {imageUrl && <img src={`${CAT_URL_PREFIX}${imageUrl}`} alt='imagen extraida de la url'/>}
    </main>
  );
}

export default App;
