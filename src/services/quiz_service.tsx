import { QuestionType } from "../types/quiz_types";

const shuffleArray = (array: any[]) => 
    [...array].sort(() => Math.random() - 0.50)

export const getQuizDetails = async(totalQuestions: number,category: string, difficulty: string, type: string): Promise<QuestionType[]> => {
    const { results } = await (await fetch(`https://opentdb.com/api.php?amount=${totalQuestions}&category=${category}&difficulty=${difficulty}&type=multiple`)).json();

    const quiz: QuestionType[] = results.map((questionObj: QuestionType) => {
        return {
            question: questionObj.question,
            option: shuffleArray(questionObj.incorrect_answers.concat(questionObj.correct_answer)),
            correct_answer: questionObj.correct_answer,
            answer: questionObj.incorrect_answers, 
            userAnswer:questionObj.option,
            category: questionObj.category,            
            difficulty: questionObj.difficulty,  
            type: questionObj.type,
        }
    })
    return quiz;
}