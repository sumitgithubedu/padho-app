import React from 'react';
import { useHistory } from "react-router-dom";
const url =
  'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png'

const CardsWrapper = ({data,inBetweenText,route}) => {
    const history = useHistory();
    return (
        <div className='course-container'>
          {data.map((eachItem)=>{
            const { id, poster,title,teacher } = eachItem
            return (
              <div className="course-card" key={id}>
                <img
                  alt="course"
                  src={poster? poster:url}
                  onClick={() => {
                    history.push(
                      `/${route}/` +id                      
                    );
                  }}
                />
                <p>{title} {inBetweenText} {teacher}</p>
              </div>
            )
          })}
        </div >
    )
  }
  
export default CardsWrapper;