import React from 'react';
import {examsList} from '../data/data'

const Exam = ({examId}) => {
  let videosList=[{
        title:"SSC MTS 2002, Notification Out",
        id:"1",
        youtube_link:"https://www.youtube.com/embed/1qFyOCLVzNc"
    },{
        title:"SSC HSL Syllabus",
        id:"2",
        youtube_link:"https://www.youtube.com/embed/FLIS0o6DLBc"
    },{
        title:"SSC HSL Syllabus 2",
        id:"3",
        youtube_link:"https://www.youtube.com/embed/YCQq2sVlIpk"
    },{
        title:"UPSC Syllabus 2021",
        id:"4",
        youtube_link:"https://www.youtube.com/embed/tVQePNlD3F8"
    },{
        title:"Book list and syllabus for UPSC",
        id:"5",
        youtube_link:"https://www.youtube.com/embed/eqXFqA1Yg_0"
    },,{
      title:"Book list and syllabus for SSC",
      id:"6",
      youtube_link:"https://www.youtube.com/embed/eqXFqA1Yg_0"
  }]

    console.log('exam id ',typeof(examId))
    const exam=examsList.filter((ex)=>{
        return ex.id+''===examId
    });
    if(!exam){
        return (
            <h1 className='center-text'>Nothing</h1>
        )
    }
    const {title,fullform,teacher,description,eligibility,takers,subjects,poster}=exam[0]
    console.log('exam details for ',exam);
    
    return (
        <section className='exam-section'>
        <h2 className='center-text best-seller'>{title}</h2>
        <div className='exam' style={{marginTop:"1rem"}}>
          <img src={poster} alt={title}></img>
          <div className='exam-info'>
            <p>
              <span className='exam-data'>Full Form :</span> {fullform}
            </p>
            <p>
              <span className='exam-data'>Eligibility :</span> {eligibility}
            </p>
            <p>
              <span className='exam-data'>Takers :</span> {takers}
            </p>
            <p>
              <span className='exam-data'>Subjects :</span>
              {subjects.map((item, index) => {
                return item ? <span key={index}> {item}</span> : null
              })}
            </p>
            <p>
              <span className='exam-data'>Taught by :</span> {teacher}
            </p>
          </div>
        </div>
        <h3 className='center-text best-seller'>Description</h3>
        <p className='center-text' style={{marginTop:"1rem",marginBottom:"2rem"}}>
            {description}
        </p>

        <h3>Video Lectures</h3>
                <div className="all-videos-wrapper">
                    {videosList
                    ? videosList.map((video) => {
                        return (
                            <div className="a-video-news" key={video.id}>
                            <iframe title={video.title} src={video.youtube_link} />
                            <p>{video.title}</p>
                            </div>
                        );
                        })
                    : ""}
                </div>

                <div className="container grey-wrapper"></div>

      </section>
    )
  }
  
export default Exam