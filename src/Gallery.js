import React from 'react';

const Gallery = (props) => {
    return (
        <div className="galleryContainer">
            <p>Here are the images for today's creative inspiration:</p>
            <ul className="gallery">
                {props.images.map((image, key) => {
                    return (
                        <li key={key} >
                            <a href={image.photographer_url} target="_blank" rel="noopener noreferrer">
                                <div className="imageContainer">
                                    <img src={image.src.large} alt={`Photo by ${image.photographer} from Pexels`} />
                                </div>
                                
                                <p>@{image.photographer}</p>
                            </a>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Gallery; 