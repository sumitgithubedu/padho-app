import React from 'react';

const QuestionComponent = ({question,listener}) => {
    const {text,id,option1,option2,option3,option4,selected,correct}=question;
    //listener takes question selected's id and option selected 
    return (
        <div className='mcq-wrapper'>
                <p>{text}</p>
                <div className='options'>
                    <div className={`option ${selected? `${correct===1? 'correct':''}`:'na'} ${selected===1? `${selected!==correct? 'wrong':''}`:`` } `} onClick={()=>listener(id,1)}>
                        <div className='option-number'>A. </div>
                        <div className='option-val'>{option1}</div>
                    </div>
                    <div className={`option ${selected? `${correct===2? 'correct':''}`:'na'} ${selected===2? `${selected!==correct? 'wrong':''}`:`` } `} onClick={()=>listener(id,2)}>
                        <div className='option-number'>B. </div>
                        <div className='option-val'>{option2}</div>
                    </div>
                    <div className={`option ${selected? `${correct===3? 'correct':''}`:'na'} ${selected===3? `${selected!==correct? 'wrong':''}`:`` } `} onClick={()=>listener(id,3)}>
                        <div className='option-number'>C. </div>
                        <div className='option-val'>{option3}</div>
                    </div>
                    <div className={`option ${selected? `${correct===4? 'correct':''}`:'na'} ${selected===4? `${selected!==correct? 'wrong':''}`:`` } `} onClick={()=>listener(id,4)}>
                        <div className='option-number'>D. </div>
                        <div className='option-val'>{option4}</div>
                    </div>
                </div>
            </div>
    )
  }
  
export default QuestionComponent;