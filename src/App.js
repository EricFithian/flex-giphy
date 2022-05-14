import SearchResults from './components/SearchResults';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [images, setImages] = useState([]);
  const [searchString, setSearchString] = useState('minions');

  const searchOptions = {
    key: 'lWUvv26cHLgGk6bC3SBotuqU9dO2wq8i',
    limit: 25,
    rating: 'G',
    api: 'https://api.giphy.com/v1/gifs',
    endpoint: '/search'
  };

  function handleChange(event) {
    setSearchString(event.target.value);
  }

  function handleSubmit(event) {
      event.preventDefault();
      getImages();
  }


  function getImages() {
    /* Build a URL from the searchOptions object */
    const url = `${searchOptions.api}${searchOptions.endpoint}?api_key=${searchOptions.key}&q=${searchString}&limit=${searchOptions.limit}&offset=${searchOptions.offset}&rating=${searchOptions.rating}&lang=en`;
  
    fetch(url)
      .then(response => response.json())
      .then(response => {
        setImages(response.data);
      })
      .catch(console.error);
  }

  useEffect(() => {
    getImages()
  }, [])

  console.log(`My search string is ${searchString}`)

  return (
    <>
      <div className="App">
        <h1>GIPHY SEARCHER!</h1>
        <form onSubmit={handleSubmit} className="form-horizontal">
            <input
                placeholder="Search"
                type="text"
                name="searchString"
                required
                onChange={handleChange}
                value={searchString}
            />
        </form>
        <SearchResults images={images}/>
      </div>
    </>
  );
}

export default App;
