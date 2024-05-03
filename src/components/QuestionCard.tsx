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
            return 'bg-gradient-to-l from-green-700/50 to-green-800/50'
        if(check === "Wrong")
            return 'bg-gradient-to-l from-red-700/50 to-red-800/50'
        if(check === "Check")
            return 'bg-gradient-to-l from-sky-700/50 to-sky-800/50'
        const unhandled:never = check
        throw new Error(`Unhandled exception: ${unhandled}.`)
    }

    const buttonClasses = "w-7/12 rounded-lg text-slate-200"

    return (
        <div className='border-4 border-slate-400 bg-gradient-to-b from-sky-900/60 via-cyan-950/60 to-sky-900/60  md:w-2/5 px-4 py-4 flex flex-col gap-2 justify-between flex-grow-0  text-slate-300 rounded-lg overflow-y-auto'>
            <div className='flex justify-between gap-1 md:gap-4 pt-4'>
                <p className='mx-2'>{num}. </p>
                {/* <form onSubmit={handleSubmit}> */}
                    <input className='rounded w-4/5 md:flex-grow text-slate-950 px-2 placeholder:text-slate-500 bg-slate-400'
                        placeholder='Insert answer here'
                        type='text'
                        value={input}
                        onChange={(e) => type(e)}
                    />
                {/* </form> */}
            </div>
            <p className='h-16 text-center flex justify-center items-center'>{prompt}</p>
            <div className='flex justify-between gap-4 h-12'>
                <button 
                    type='button' 
                    className={`${buttonClasses} ${getClassName()}`} 
                    onClick={handleCheck}
                >
                    {check}
                </button>
                <button 
                    className={`${buttonClasses} bg-gradient-to-l from-sky-700/50 to-sky-800/50`}
                    type='button' 
                    onClick={toggleAnswer}
                >
                    {showAnswer ? 'Hide' : 'Show'}
                </button>
            </div>
            <div className='flex justify-center items-center h-20 bg-gradient-to-l from-sky-700/50 to-sky-800/50 rounded-xl mt-2 text-center my-auto px-2'>{showAnswer ? answer : ' '}</div>
        </div>
    )
}

export default QuestionCard