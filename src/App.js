import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import Counter from './components/Counter';
import RatingCard from './components/RatingCard';
import RatingInput from './components/RatingInput';

function App() {

  const ratings = useSelector(state => state.ratings);
  
  return (
    <div className="">
      <div className="row">
        <div className="col-md-6 bg-warning">
          <h1>Counting "Hello World" Example</h1>
          <Counter/>
        </div>
        <div className="col-md-6">
          <h1>Create/Delete Album Rating Example</h1>
          <RatingInput/>
        </div>
      </div>

      <br/>

      <div className="d-flex flex-wrap">
        {ratings.map((rating) => <RatingCard artist={rating.artist} album={rating.album} rating={rating.rating} id={rating.id}/>)}
      </div>
    </div>
  );
}

export default App;
