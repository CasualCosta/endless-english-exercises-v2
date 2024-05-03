import QuestionCard from './QuestionCard';
import { Activity } from '../types/pageTypes';

const ActivityCard = ({activity, index}: {activity:Activity, index: number}) => {
    const {description, example, getQuestion, amount } = activity;
    const questionAmount =  amount ? amount : 4;
    const questions = [];

    for(let i = 0; i < questionAmount; i++)
        questions.push(getQuestion());
    return (
        <div className='text-slate-200 md:m-4 pb-2 px-8 rounded-xl mx-auto'>
            <h3 className='text-xl md:text-4xl text-center my-2'>{index + 1}. {description}</h3>
            <h4 className='text-center px-2 my-2'>{example.answer} ({example.prompt})</h4>
            <div className='flex gap-2 md:gap-4 my-8 flex-wrap justify-center'>
                {questions.map((question, index) => {
                    return <QuestionCard key={index} num={index + 1} question={question} />
            })}
            </div>
        </div>
    )
}

export default ActivityCard