// // import React from 'react'
// import "./Result.css"
// import SearchIcon from "@mui/icons-material/Search";

// function Result() {
//   return (

//     <>
//     <div className="prent_container">
//     <div className="container1">
//         {/* JSX content in your React component */}
//         <div className="border-box">
//           <span className="homepage-label">Homepage</span>
//           <div className="auth-links">
//             <span className="login">Login</span>
//             <span className="create-account">Create Account</span>
//           </div>
//         </div>

//         <div className="search">
//           <span>
//             <SearchIcon />
//           </span>
//           <input type="text" className="input" placeholder="Search..." />
//         </div>

//         <div className="Trending">
//           <strong>Results:</strong>
//           {/* //! >TODO : which i search input box  */}
//           <strong>TODO : which i search input box  </strong>
//         </div>
//       </div>

// <div className="container2">

// {/* //! TODO : hear add hestory */}

// <button type="none">abcd</button>
// <button type="none">abcd</button>
// <button type="none">abcd</button>
// <button type="none">abcd</button>
// <button type="none">abcd</button>
// <button type="none">abcd</button>

// <dir className = "img_container">

// <div className="img1">

// </div>

// </dir>

// </div>

//       </div>

//     </>
//   )
// }

// export default Result

// useEffect

import { useState , useEffect } from "react";
import "./Result.css";
import SearchIcon from "@mui/icons-material/Search";
import { Modal } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress"; // Import the loading spinner from MUI
import DownloadIcon from '@mui/icons-material/Download';
import ShareIcon from '@mui/icons-material/Share';
import HistoryIcon from '@mui/icons-material/History';


const apiKey = "41881327-4f297a7078b5f188f3e70ca09"; // Replace with your actual API key

function Result() {
  // State variables
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // New state variable for loading status




  // Handle search input change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Perform search using Pixabay API
  const performSearch = async () => {
    setIsLoading(true); // Set loading to true when the API call starts
    try {
      const url = `https://pixabay.com/api/?key=${apiKey}&q=${encodeURIComponent(
        searchQuery
      )}&image_type=photo`;
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setResults(data.hits);
        });
    } catch (error) {
      console.error("Error fetching data: ", error);
    } finally {
      setIsLoading(false); // Set loading to false when the API call finishes
    }
  };

  // Handle image click and open modal
  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  // Handle modal close
  const handleCloseModal = () => {
    setSelectedImage(null);
  };



const handleShare = async () => {
  if (navigator.share) {
    try {
      await navigator.share({
        title: 'Check out this image!',
        url: window.location.href, // You might want to create a route that opens the modal directly
      });
      console.log('Image shared successfully');
    } catch (error) {
      console.error('Error sharing the image', error);
    }
  } else {
    // Fallback for browsers that do not support the Web Share API
    // You can copy the link to clipboard or show a modal with the link
    console.log('Web Share not supported in this browser.');
  }
};








  // Initialize favorites from localStorage or an empty array
  const [favorites, setFavorites] = useState(() => {
    const localFavorites = localStorage.getItem('favorites');
    return localFavorites ? JSON.parse(localFavorites) : [];
  });

 // When the component mounts, sync the favorites state with localStorage
 useEffect(() => {
  localStorage.setItem('favorites', JSON.stringify(favorites));
}, [favorites]);

const addToFavorites = (image) => {
  // Prevent adding duplicates
  if (!favorites.some(fav => fav.id === image.id)) {
    const updatedFavorites = [...favorites, image];
    setFavorites(updatedFavorites);
    
  }
};















// // Step 1: Update the state to include a `favorites` array
// const [favorites, setFavorites] = useState(() => {
//   // Retrieve favorites from local storage if available
//   const localFavorites = localStorage.getItem('favorites');
//   return localFavorites ? JSON.parse(localFavorites) : [];
// });
// // Step 2: Create a function to handle adding to favorites
// const addToFavorites = (image) => {
//   // Prevent adding duplicates
//   if (!favorites.find(fav => fav.id === image.id)) {
//     const updatedFavorites = [...favorites, image];
//     setFavorites(updatedFavorites);
//     // Save to local storage
//     localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
//   }
// };






const handleDownload = (image) => {
  // Save the download history to local storage
  const history = JSON.parse(localStorage.getItem('downloadHistory') || '[]');
  const newHistory = [image, ...history];
  localStorage.setItem('downloadHistory', JSON.stringify(newHistory));

  // Continue with the download process
  window.open(image.pageURL);
};




  return (
    <>
      {isLoading ? (
        <div
          style={{ display: "flex", justifyContent: "center", margin: "20px" }}
        >
          <CircularProgress />
        </div>
      ) : (
        <div className="prent_container">
          <div className="container1">
            {/* Header */}
            <div className="border-box">
              <span className="homepage-label">Homepage</span>
              <div className="auth-links">
                <span className="login">Login</span>
                <span className="create-account">Create Account</span>
              </div>
            </div>

            {/* Search input */}
            <div className="search">
              <span>
                <SearchIcon />
              </span>
              <input
                type="text"
                className="input"
                placeholder="Search..."
                value={searchQuery}
                onChange={handleSearchChange}
                onKeyPress={(event) => {
                  if (event.key === "Enter") {
                    performSearch();
                  }
                }}
              />
            </div>

            {/* Search results */}
            <div className="Trending">
              <strong>Results:</strong>
              {searchQuery && <strong>{searchQuery}</strong>}
            </div>

            {/*//! Toggle button for search history */}
            {/* <button onClick={() => setShowHistory(!showHistory)}>
            Toggle Search History
          </button> */}

            {/* Search history panel */}
            {/* {showHistory && (
            <div className="search-history">
              <h3>Search History</h3>
              <ul>
                {searchHistory.map((term, index) => (
                  <li key={index}>{term}</li>
                ))}
              </ul> */}
            {/* </div> */}
            {/* )} */}

            {/* Image grid */}
            <div className="img_container">
           
              {results.map((image) => (
                <div
                  key={image.id}
                  className="img1"
                  onClick={() => handleImageClick(image)}
                >
                  <img src={image.webformatURL} alt={image.tags} />
                  <p>{image.tags.split(",").join(" ")}</p>



                  <button onClick={(e) => {
            e.stopPropagation(); // Prevents the handleImageClick from being called
            addToFavorites(image);
          }}>
            {favorites.some(fav => fav.id === image.id) ? 'In Favorites' : 'Add to Favorites'}


          </button>


                </div>
              ))}
            </div>

            <Modal open={!!selectedImage} onClose={handleCloseModal}>
              <div className="popup">
                {selectedImage && (
                  <div className="popup-content">
                    <div className="image-id">
                      {`ID: ${selectedImage.id}`}
                      <div className="popup-left">
                        <img
                          src={selectedImage.largeImageURL}
                          alt={selectedImage.tags}
                        />
                      </div>
                      <div>
                        <div className="image-tags">{`TAGS : ${selectedImage.tags}`}</div>{" "}
                      </div>
                    </div>

                    <div className="popup-right">
                      <div className="popup-info">
                        <div className="download">Download</div>

                        {/* make a radio type button and every button indecate different size which come from api */}
                        <form className="size-form">
                          <div className="table">
                            <label className="size-option">
                              Small:
                              <span id="Big_gap" className="size-label">
                                {`${selectedImage.previewHeight}*${selectedImage.previewWidth}`}
                              </span>
                              <input
                                type="radio"
                                name="size"
                                value="small"
                                // checked={selectedSize === 'small'}
                                // onChange={handleSizeChange}
                              />
                            </label>

                            <label className="size-option">
                              Medium:
                              <span className="size-label">
                                {`${selectedImage.webformatHeight}*${selectedImage.webformatWidth}`}{" "}
                              </span>
                              <input
                                type="radio"
                                name="size"
                                value="medium"
                                // checked={selectedSize === 'medium'}
                                // onChange={handleSizeChange}
                              />
                            </label>

                            <label className="size-option">
                              Big:
                              <span id="Big_gap"  className="size-label">
                                {` ${selectedImage.imageHeight}*${selectedImage.imageWidth}`}{" "}
                              </span>
                              <input
                                type="radio"
                                name="size"
                                value="large"
                                // checked={selectedSize === 'large'}
                                // onChange={handleSizeChange}
                              />
                            </label>

                            <label className="size-option">
                              Original:
                              <span className="size-label">
                                {` ${selectedImage.previewHeight}*${selectedImage.previewWidth}`}{" "}
                              </span>
                              <input
                                type="radio"
                                name="size"
                                value="original"
                                // checked={selectedSize === 'original'}
                                // onChange={handleSizeChange}
                              />
                            </label>
                          </div>
                        </form>



                     
                   <button onClick={() => handleDownload(selectedImage)}>
                     Download For Free! <DownloadIcon/>
                   </button>

                        {/* <button
                          onClick={(handleDownload) => window.open(selectedImage.pageURL)}
                        >
                          Download For Free !
                        </button> */}
<button onClick={handleShare}>Share <ShareIcon/></button>

<button onClick={() => window.location.href = '/history'}>View Download History <HistoryIcon/></button>



{/* {results.map((image) => (
      <div key={image.id}> */}




{/* <div className="img_container">
           
           {results.map((image) => (
             <div
               key={image.id}
               className="img1"
               onClick={() => handleImageClick(image)}
             >
               <img src={image.webformatURL} alt={image.tags} />
               <p>{image.tags.split(",").join(" ")}</p>
             </div>
           ))}
         </div> */}

        {/* ...image display code... */}
        {/* <button onClick={() => addToFavorites(image)}>Add to Favorite</button>
      </div>
    ))} */}



                        {/* ... Additional options ... */}
                        <div className="Information">
                          <strong id="one">Information </strong>
                          <div className="image-details">
                            <div className="detail-header">User</div>
                            <div className="detail-header">User Id</div>
                            <div id="ww" className="detail-header">Type</div>

                            <div className="detail">{selectedImage.user}</div>
                            <div className="detail">
                              {selectedImage.user_id}
                            </div>
                            <div id="ww" className="detail">{selectedImage.type}</div>

                            <div className="detail-header">Views</div>
                            <div className="detail-header">Downloads</div>
                            <div className="detail-header">Likes</div>

                            <div className="detail">{selectedImage.views}</div>
                            <div className="detail">
                              {selectedImage.downloads}
                            </div>
                            <div className="detail">{selectedImage.likes}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button className="close-modal" onClick={handleCloseModal}>
                      &times;
                    </button>
                  </div>
                )}
              </div>
            </Modal>
          </div>
        </div>
      )}
    </>
  );
}

export default Result;
