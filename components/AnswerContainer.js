import React, { useRef, useState } from "react";

export default function AnswerContainer({ value, handleAnswer }) {
  const [checked, setChecked] = useState(false);

  return (
    <div
      className={checked ? "answer-container  active" : "answer-container"}
      onClick={(e) => {
        setChecked(true);
        setTimeout(() => {
          handleAnswer(value);
        }, 150);
      }}
    >
      <input
        id={value}
        type="radio"
        name="answer"
        checked={checked ? true : false}
        onChange={() => {}}
      />
      <label htmlFor={value} onClick={(e) => e.preventDefault()}>
        {value}
      </label>
    </div>
  );
}
