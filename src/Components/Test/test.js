import React from "react";

const Test = (props) => {

    var questions = props.test.questions;

    return (
        <form>
            <h1 className="text-center">{props.test.name}</h1>
            <div className="row" id="quiz">
                <hr/>
                {questions?.map(question => {
                    return (
                        <div key={question.id} id="question">
                            <h2 id="questionText">{question.questionText}</h2>
                            <ul>
                                {question.answers?.map(answer => {
                                    return (
                                        <li key={answer.id} className="form-check">
                                            <input type="radio" className="form-check-input" name={question.id}
                                                   id="{answer.id}" value={answer.answerText}/>
                                            <label className="form-check-label" name={question.id}
                                                   htmlFor="{answer.id}">{answer.answerText}</label>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    );
                })}
                <hr/>
                    <button type="submit" className="btn btn-lg w-100" style={{backgroundColor: "#ba19d4", color: "white"}}>Заврши</button>
            </div>
        </form>
    );

}

export default Test;
