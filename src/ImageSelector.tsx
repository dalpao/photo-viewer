import React from 'react';
import { imageUrls } from './imageUrls'

export function ImageSelector(props: {changeImg: React.Dispatch<React.SetStateAction<string>>}) {   

    return (
        <>

            <h2>Select your image</h2>
            <div className="img-gallery">
                <ul>
                    {imageUrls.map(function(url, index) {
                        return (
                            <li key={index}>
                                <img src={url} alt={`Image ${index}`} onClick={() =>props.changeImg(url)} />
                            </li>
                        )
                    })} 
                </ul>
            </div>
        </>
    );

}
