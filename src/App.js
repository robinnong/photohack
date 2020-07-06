import React, { useState, useEffect } from 'react';  
import { createClient } from 'pexels';
import ApiKey from './ApiKey.js';
import './App.css';

const client = createClient(ApiKey);

const App = () => {
  const [imageResults, setImageResults] = useState([]);
  const [userInput, setInput] = useState("");
  const [likedImages, setLikedImages] = useState([]); 
  const [counter, setCounter] = useState(0);
  const [imageSearched, isSearched] = useState(false);
  const [galleryDisplay, isDisplayed] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    // When the user reaches the end of the results, then display all of their liked images
    if (counter === imageResults.length - 1) {
      isDisplayed(true);
      isSearched(false);
    }
  }, [counter])
  
  // Makes a API call via the Pexels cliet
  const getPhotos = (e) => { 
    e.preventDefault();
    // Error handling - request will be made as long as the query string is not empty
    if (userInput !== "") {  
      const query = userInput;
      client.photos.search({ query, per_page: 10 })
      .then(results => {
        // If not results were returned, display an error message
        if(results.photos.length === 0) {
          setErrorMessage("Sorry, we couldn't find any images based on your search 😭 Check your spelling for try a new search term.")
        // If results are returned, save them to the list of results and clear the search bar
        } else { 
          setImageResults(results.photos); 
          isSearched(true);
          setErrorMessage("")
          setInput("");
        }
      })
    }
  } 

  // Sets the input field state on each input change
  const handleUserInput = (e) => setInput(e.target.value); 

  // Adds the current images to the list of liked images
  const addToLiked = () => {
    let likeCopy = [...likedImages];
    likeCopy.push(imageResults[counter])
    setLikedImages(likeCopy)
  }

  return (
    <div className="App">
      <header className="wrapper">
        <h1>Photohack</h1>
      </header>
      <main className="wrapper">
        <p>Want to create some art but can't decide if you want to paint a landscape or practice drawing portraits? Get inspired with powerful reference images, and narrow down your favourites. Let's get started!</p> 

        <h2>Search ideas: a subject, colour, emotion or multiple words.</h2>
        
        <form action="" className="searchForm" onSubmit={getPhotos}>
          <label htmlFor="search" className="sr-only">Search</label>
          <input onChange={handleUserInput} type="text" id="search" placeholder="'Mountains'"></input>
          <button type="submit" aria-label="Search">
            <i className="fas fa-search" aria-hidden="true"></i>
          </button>
        </form> 

        <p className="errorMessage">{errorMessage}</p>

        {imageSearched? 
          <div className="votingContainer">
            <img src={imageResults[counter].src.large} alt=""/>
            <button onClick={() => setCounter(counter + 1)} className="dislike" aria-label="dislike">
              <span role="img" aria-hidden="true">👎</span>
            </button>
            <button onClick={() => { addToLiked(); setCounter(counter + 1) }}
            className="like" aria-label="like">
              <span role="img" aria-hidden="true">👍</span>
            </button>
            <a href={imageResults[counter].photographer_url} target="_blank" rel="noopener noreferrer">@{imageResults[counter].photographer}</a>
          </div>
        : null}

        {galleryDisplay? 
          <>
            <p>Here are the images for today's creative inspiration:</p>
            <ul className="gallery">
              {likedImages.map((image, key) => {
                return (
                  <li key={key}> 
                    <div className="imageContainer">
                      <img src={image.src.large} alt=""/>
                    </div> 
                    <a href={image.photographer_url} target="_blank" rel="noopener noreferrer">@{image.photographer}</a>
                  </li>
                )
              })} 
            </ul>
          </>
        :null}

      </main>
      <footer>
        © 2020 <a href="https://github.com/robinnong">Robin Nong</a>. Photos provided by <a href="https://www.pexels.com">Pexels.</a>
      </footer>
    </div>
  );
}

export default App;
