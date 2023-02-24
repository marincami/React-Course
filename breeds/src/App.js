import { useEffect, useState } from 'react';

function App() {
  const[isLoading, setIsLoading] = useState(true); // to load the page
  const[imageUrl, setImageUrl] = useState(null);

  // useEffect gets the data
  useEffect(() => {
    if(isLoading) {
      fetch('https://dog.ceo/api/breeds/image/random') // call the API, FETCH returns a promise(object)
      .then((response) => response.json()) // response to json, async for this we use two then, object with the response, then to response and other then to convert to json
        .then((dog) => {
          setImageUrl(dog.message); // save data
          setIsLoading(false); // loading mode off
        }); // object with the response, then to response and other then to convert to json
    }
  }, [isLoading]); // [], call the API once after first render, if not each time component is rendered the useEffect will be executed again.

  const randomDog = () => { // gets random dogs
    setIsLoading(true);
  }

  if(isLoading) { // when is loading show a text
    return (
      <div className='App'>
        <h1>Loading...</h1>
      </div>
    ); 
  }

  return (
    <div className='App'>
      <img src={imageUrl} alt='Random dogs'></img>
      <button onClick={randomDog}>
        Next !{" "}
        <span role="img" aria-label="hearth">❤️</span>
      </button>
    </div>
  ); 
}

export default App;
