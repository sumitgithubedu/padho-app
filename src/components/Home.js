import React from 'react';
import CardsWrapper from './CardsWrapper'
import {examsList,testList} from '../data/data'


const Home = () => {
    return (
      <main>
        <div className='container'>
        <h1 className='center-text'>Padho Initiative</h1>
        <div className='underline'></div>
        <h3 className='center-text best-seller'>Best Seller courses</h3>
        <CardsWrapper data={examsList} inBetweenText="Taught by" route='exams'/>
      
        <h3 className='center-text best-seller'>Take mock tests</h3>
        <CardsWrapper data={testList} inBetweenText="" route='tests'/>
      </div>
      </main>
    )
  }
  
export default Home
  