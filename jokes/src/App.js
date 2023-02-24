import './App.css';
import React, { useEffect, useState } from 'react';
import Chuck from './chuck.png';
import axios from 'axios';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [joke, setJoke] = useState({ joke: ''});
  const [wordToSearch, setWordToSearch] = useState('');
  const [searched, setSearched] = useState('');
  
  const handleChange = (event) => {
    setWordToSearch(event.target.value);
  };

  const handleSearch = async () => {
    const data = await fetchData(wordToSearch);
    setSearched(data?.joke);
  };

  useEffect(() => {  
    fetchData();
  }, []); // when you want the function to run, [] only one time

  const fetchData = async (searchText) => {
    try {
      setIsLoading(true);
      const result = await axios.get(`https://api.chucknorris.io/jokes/search?query=${searchText}`);
      setJoke({
        ...joke, // all values that it has before
        joke: result.data.value
      });
    } catch(error) {
      setError('Error, try again!');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <h1 className="title">Chuck Norris API</h1>
          <img src={Chuck} alt="Chuck Norris" />
        </div>
        <div className="col-6 searchJokeCol">
          <div className="card">
            <div className="car-header">
              Search for a word
            </div>
            <div className="card-body">
              <input placeholder="Word to search" value={wordToSearch} type="text" onChange={handleChange}/>
            </div>
          </div>
          <div>
            <button className="btn btn-warning btn-lg" onClick={handleSearch}>Generate Joke</button>
          </div>
        </div>
      </div>
      <h2 className="subtitle">Here is the Joke</h2>
      <h4>{joke.joke}</h4> 
    </div>
  );
}

export default App;
