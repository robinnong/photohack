import React, { useState, useEffect } from 'react';  
import { createClient } from 'pexels';
import ApiKey from './components/ApiKey.js';
import Form from './components/Form.js';
import Gallery from './components/Gallery.js';
import Footer from './components/Footer.js';
import ReactLoading from 'react-loading';
import './App.css'; 

const client = createClient(ApiKey);

const App = () => {
  const [isPageLoaded, setLoadStatus] = useState(false);
  const [imageResults, setImageResults] = useState([]);
  const [userInput, setInput] = useState("");
  const [likedImages, setLikedImages] = useState([]); 
  const [counter, setCounter] = useState(0);
  const [imageSearched, isSearched] = useState(false);
  const [galleryDisplay, isDisplayed] = useState(false);
  const [errorMessage, setErrorMessage] = useState(""); 
  const [featuredImage, setFeaturedImage] = useState({ photog: "Elina Sazonova", url: "https://www.pexels.com/@elina-sazonova"} );

  // Effect runs only on the first render - Gets the first featured image of the hour and sets it as the background image
  useEffect(() => {  
    client.photos.curated({ per_page: 6 })
    .then(result => {
      // Get a random index between 0 and 6
      const index = Math.floor(Math.random() * 6);
      const photoMeta = result.photos[index];

      setTimeout(() => {
        setFeaturedImage(
          {
            photog: photoMeta.photographer,
            url: photoMeta.photographer_url
          }
        );
  
        setLoadStatus(true);
      }, 3000);

      document.documentElement.style.setProperty(
        "--background-image-full",
        `url(${photoMeta.src.landscape})`
      );
    });
  }, [])

  // Effect runs whenever the counter updates - When the user reaches the end of the results, then display all of their liked images
  useEffect(() => { 
    if (counter === imageResults.length - 1) {
      isDisplayed(true);
      isSearched(false);
      setCounter(0);
    }
  }, [counter])
  
  // Makes a API call via the Pexels client
  const getPhotos = (e) => { 
    e.preventDefault();
    // Error handling - request will be made as long as the query string is not empty
    if (userInput !== "") {  
      const query = userInput; 
      client.photos.search({ query, per_page: 15 })
      .then(results => { 
        // If not results were returned, display an error message
        if(results.photos.length === 0) {
          setErrorMessage("Sorry, we couldn't find any images based on your search 😭 Check your spelling for try a new search term.")
        // If results are returned, save them to the list of results and clear the search bar
        } else { 
          setImageResults(results.photos); 
          isSearched(true);
          setLikedImages([]);
          setErrorMessage("");
          setInput("");
        }
      }).catch((error)=>{
        setErrorMessage("Sorry, a problem occurred. Please try again later.")
      })
    }
  } 

  // Sets the input field state on each input change
  const handleUserInput = (e) => setInput(e.target.value); 

  // Adds the current images to the list of liked images
  const addToLiked = () => {
    let likeCopy = [...likedImages];
    likeCopy.push(imageResults[counter]);
    setLikedImages(likeCopy);
  }

  return (
    <div className="App">
      {!isPageLoaded
      ? 
      <div className="loadingBackground">
        <ReactLoading className="loadingAnimation" type="bars" color="white" height={90} width={100} />
      </div>
      :
      <>
        <header>
          <h1>Photo Inspo</h1>
        </header>
        <main>
          <div className="fadeIn">
            <div className="wrapper">
              <p>Want to create some art but can't decide if you want to paint a landscape or practice drawing portraits? Get inspired with powerful reference images, and narrow down your favourites.</p>  

              <p>Search ideas: a subject, colour, emotion or multiple words.</p>

              <Form 
              getPhotos={(e) => getPhotos(e)}
              handleUserInput={(e) => handleUserInput(e)}
              />

              <p className="errorMessage">{errorMessage}</p>
            </div>
          </div>

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

              <a href={imageResults[counter].url} target="_blank" rel="noopener noreferrer">@{imageResults[counter].photographer}</a>
            </div>
          : null}

          {galleryDisplay? <Gallery images={likedImages}/> :null}
        </main>
      </>
      }
      <Footer 
          link={featuredImage.url}
          photographer={featuredImage.photog}
      />
    </div>
  );
}

export default App;
