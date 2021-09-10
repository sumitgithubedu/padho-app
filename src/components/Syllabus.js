import React from 'react';
import {examSyllabusAndMore} from '../data/data'

const Syllabus =({examName})=>{

    let examId=-1
    if(examName==='SSC'){
        examId=3
    }else if(examName==='Bank PO'){
        examId=2
    }else if(examName==='UPSC'){
        examId=1
    }
    if(examId===-1)
        return <h3 className='text-center'>No Such Exam</h3>
    let examDetails=examSyllabusAndMore.filter((exam)=> exam.examId===examId)[0]
    return (
        <div>
            <h3 className='text-center'>Syllabus for {examName}</h3>
            <div className='underline'></div>
            <div className='container'>
                <h3 className='text-center' style={{marginTop:'4rem'}}>{examDetails.description.heading}</h3>
                <p style={{marginTop:'2rem'}}>{examDetails.description.content}</p>
            
                <h3 className='text-center' style={{marginTop:'4rem'}}>Marks Distribution</h3>
                {  examDetails.markDistribution ? <table className="syllabus-table">
                        <tr>
                            <th>SNo. </th>
                            <th>Section</th>
                            <th>No of Questions</th>
                            <th>Maximum Marks</th>
                            <th>Duration</th>
                        </tr>
                        {examDetails.markDistribution.map((row)=>{
                            return <tr>
                                <td>{row.no}</td>
                                <td>{row.section}</td>
                                <td>{row.Questions}</td>
                                <td>{row.maximumMarks}</td>
                                <td>{`${row.duration ? row.duration+' mins' :'NA' } `  }</td>
                            </tr>
                        })}
                    </table>
                    :<p className='text-center'>Not Available</p>
                }                

                <h3 className='text-center' style={{marginTop:'4rem'}}>Syllabus</h3>
                {examDetails.syllabus.map((section)=>{
                    return <div style={{marginBottom:'2rem'}}>
                            <h3>{section.section}</h3>
                            {section.topics.map((topic)=>{
                                return <span className='exam-topic'>{topic}</span>
                            })}
                        </div>
                })}
            </div>
        </div>
    )
}

export default Syllabus