import React, { ChangeEventHandler } from 'react';

export type Quiz = {
    category: string
    correct_answer: string
    difficulty: string
    incorrect_answers: string[]
    question: string
    type: string
}

export type QuestionType = {
    category: string
    correct_answer: string   
    difficulty: string
    incorrect_answers: string[]
    question: string
    type: string 
    option: string[]  
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void     
}


export type questionPropsType = {
    question: string,
    options: string[],
    callback: (e: React.MouseEvent<HTMLButtonElement>, ans: string) => void    
}

export type Props = {
    question: string;
    answers: string[];
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: AnswerObject | undefined;
    questionNr: number;
    totalQuestions: number;
  };

export type AnswerObject = {
    question: string;
    answer: string;
    correct: boolean;
    correctAnswer: string;
  };