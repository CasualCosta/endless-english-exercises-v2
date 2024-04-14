import React, {useState} from 'react'
import { Question } from '../types/pageTypes'

const QuestionCard = ({num, question}:{num:number, question:Question}) => {
    const [check, setCheck] = useState<"Check" | "Right" | "Wrong">("Check")
    const [showAnswer, setShowAnswer] = useState(false)
    const [input, setInput] = useState('')
    const {prompt, answer} = question;

    const handleCheck = () => {
        const correct = input === answer;
        setCheck(correct ? "Right" : "Wrong")
    }
    const toggleAnswer = () => {
        setShowAnswer(!showAnswer);
    }

    const type = (e:React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value)
        if(check != "Check")
            setCheck("Check")
    }

    const getClassName = () => {
        if(check === "Right")
            return 'bg-emerald-800'
        if(check === "Wrong")
            return 'bg-rose-800'
        if(check === "Check")
            return 'bg-sky-800'
        const unhandled:never = check
        throw new Error(`Unhandled exception: ${unhandled}.`)
    }

    const buttonClasses = "w-7/12 rounded-lg text-slate-200"

    return (
        <div className='bg-sky-900 min-w-64 w-2/5 px-4 py-4 flex flex-col gap-2 justify-between flex-grow-0  text-slate-300 rounded-lg overflow-y-auto'>
            <div className='flex justify-between gap-1 md:gap-4 pt-4'>
                <p className='mx-2 text-lg'>{num}. </p>
                {/* <form onSubmit={handleSubmit}> */}
                    <input className='rounded w-4/5 md:flex-grow text-slate-900 text-xl px-2'
                        placeholder='Insert answer here'
                        type='text'
                        value={input}
                        onChange={(e) => type(e)}
                    />
                {/* </form> */}
            </div>
            <p className='text-xl h-16 text-center my-1 flex justify-center items-center'>{prompt}</p>
            <div className='flex justify-between gap-4 h-16'>
                <button 
                    type='button' 
                    className={`${buttonClasses} ${getClassName()}`} 
                    onClick={handleCheck}
                >
                    {check}
                </button>
                <button 
                    className={`${buttonClasses} bg-sky-800`}
                    type='button' 
                    onClick={toggleAnswer}
                >
                    {showAnswer ? 'Hide' : 'Show'}
                </button>
            </div>
            <div className='flex justify-center items-center h-16 text-lg bg-sky-800 rounded-xl mt-2 text-center my-auto px-2'>{showAnswer ? answer : ' '}</div>
        </div>
    )
}

export default QuestionCard