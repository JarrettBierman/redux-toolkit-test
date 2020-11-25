import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import {addRating, removeRating, removeAll} from '../features/ratingsSlice';
import { v4 as uuidv4 } from "uuid";

function RatingInput() {
    const [artist, setArtist] = useState("");
    const [album, setAlbum] = useState("");
    const [rating, setRating] = useState(10);

    const dispatch = useDispatch();

    const handleSubmit = () => {
        if(artist.length > 0 && album.length > 0) {
            dispatch(addRating({id: uuidv4(), artist: artist, album: album, rating: rating}));
            setArtist("");
            setAlbum("");
            document.getElementById("artist").value = "";
            document.getElementById("album").value = "";
        }
    }

    return(
        <div className="col-lg-8">
        <div className="form-group">
            <label for="artist">Artist</label>
            <input type="text" id="artist" className="form-control" placeholder="Artist" onChange={(e) => setArtist(e.target.value)}/>
        </div>
        
        <div className="form-group">
            <label for="album">Album</label>
            <input type="text" id="album" className="form-control" placeholder="Album" onChange={(e) => setAlbum(e.target.value)}/>
        </div>

        <div className="form-group">
            <label for="rating">Rating: {rating}</label>
            <input type="range" id="rating" min="0" max="10" step="0.1" className="form-control-range" onChange={(e) => setRating(e.target.value)}/>
        </div>

        <button className="btn btn-primary mx-2" onClick={handleSubmit}>Add Artist Rating</button>
        <button className="btn btn-warning mx-2" onClick={() =>{dispatch(removeRating())}}>Remove Last Rating</button>
        <button className="btn btn-danger mx-2" onClick={() =>{dispatch(removeAll())}}>Remove All</button>
      </div>
    )
}
export default RatingInput;