import React, { useEffect, useState } from 'react'
import "./style.css"
import CreateEventHeader from '../create-event-header/CreateEventHeader'
import ContinueButton from '../continue_button/ContinueButton'
import trash_icon from "../../images/trash-01.png";

import add_icon from "../../images/AddIcon.png"
function EventQuestion({handleQuestion}) {
  const [eventquestionlist, setEventquestionlist] = useState([
    "What is your current role?",
    "What are you really good at?",
    "What are a few things you need?",
    "What is one thing you are really proud of?"
  ]);
  const [selectedQuestions, setSelectedQuestions]=useState([]);
  const [customQuestion,setCustomQuestion]=useState("");
  const addQuestion=(question)=>{
    setSelectedQuestions([...selectedQuestions,question]);
  }
  const removeQuestion=(question)=>{
    console.log(question,typeof(question));
    setSelectedQuestions(selectedQuestions.filter(q=>q!==question));
    console.log(selectedQuestions);
  }
  useEffect(()=>{
    handleQuestion(selectedQuestions);
    console.log(selectedQuestions);
  },[selectedQuestions]);
  return (
    <div className="event_question_container">
      <CreateEventHeader destination={"/eventimage"}/>
      <h2>Event Questionaire</h2>
      <section className="event_question_list">
        <h4>Select from existing list</h4>
        <ul>
          {eventquestionlist.map((questions,index)=>(
            <li key={index} onClick={(e)=>{addQuestion(questions)}}>{questions}</li>
          ))}
        </ul>
      </section>
      <section className="custom_question_container">
        <h4>Write your own question</h4>
        <div className="input_container">
          <input value={customQuestion} onChange={(e)=>{setCustomQuestion(e.target.value)}}type="text" className="custom_quesion_input"/>
          <img src={add_icon} alt="icon" onClick={(e)=>{addQuestion(customQuestion); setCustomQuestion('');}}/>
        </div>
      </section>
      <section className="selected_questions_container">
        <h2>Pre-Event Questionaire</h2>
        <ul>
          {selectedQuestions.map((question,index)=>(
            <li key={index}>{question} <img src={trash_icon} alt="icon" onClick={(e)=>{removeQuestion(question)}}/></li>
          ))}
        </ul>
      </section>

      <div className="continue_button_container">
        <ContinueButton location={"/eventreview"}/>
      </div>
    </div>
  )
}

export default EventQuestion