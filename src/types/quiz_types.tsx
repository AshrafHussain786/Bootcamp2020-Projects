export type QuestionType = {
    category: string
    difficulty: string
    type: string 
    correct_answer: string 
    incorrect_answers: string[]
    question: string    
    option: string[]  
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void     
}

export type Props = {    
    question: string;    
    userAnswer: AnswerObject | undefined;
    answers: string[];
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    questionNo: number;
    totalQuestions: number;
  };

export type AnswerObject = {
    question: string;
    answer: string;
    correct: boolean;
    correctAnswer: string;
  };