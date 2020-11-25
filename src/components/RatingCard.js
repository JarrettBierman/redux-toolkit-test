import React from 'react';
import { useDispatch } from "react-redux";
import {removeSpec} from '../features/ratingsSlice';

function RatingCard(props) {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(removeSpec(props.id));
    }

    console.log(props);

    return (
        <div className={"alert alert-info m-2 p-2 text-center"} style={{width: "200px", height:"200px"}}>
            <button type="button" className="close" aria-label="Close" onClick={handleClick}>
                <span aria-hidden="true">&times;</span>
            </button>
            <h5>{props.album}</h5>
            <h6>{props.artist}</h6>
            <p>{props.rating} / 10</p>
        </div>
    )
}
export default RatingCard;