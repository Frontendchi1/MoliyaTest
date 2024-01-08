// Question.js
import React from 'react';

const Question = ({ question, answer }) => {
  return (
    <div className="bg-white p-4 rounded-md shadow-md mb-4">
      <h3 className="text-lg font-semibold mb-2">{question}</h3>
      <p>{answer}</p>
    </div>
  );
};

export default Question;
