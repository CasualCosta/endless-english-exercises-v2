import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from '../types/pageTypes'

const LessonCard = ({ card }:{card:Card}) => {
    const { id, image, title, vocabulary, grammar} = card
    return (
    <Link className='w-full md:w-72 min-h-44 md:h-96 bg-gradient-to-b from-sky-900 to-sky-950 rounded-lg py-4 md:py-8 px-4 md:px-4 flex md:flex-col gap-4 md:gap-0 md:items-center text-white md:text-center hover:scale-105 border-8 border-radius-2 border-slate-300' to={`/lesson/${id}`}> 
        <div className=''>
            <img src={image} className='w-24 md:w-32 h-24 md:h-32 rounded-full border-slate-300 border-4' loading='lazy' />
        </div>
        <div>
            <h2 className='text-2xl md:mt-4 text-slate-200'>{title}</h2>
            <div className='my-1'>
                {vocabulary.map((voc, index) => {
                    return <p className={`mb-1 ${index % 2 == 0 ?'text-rose-400' : ''}`} key={index}>{voc}</p>
                })}
            </div>
            <div className='mt-1'>
                {grammar.map((gram, index) => {
                    return <p className={`mb-1 ${index % 2 == 0 ?'text-cyan-400' : ''}`} key={index}>{gram}</p>
                })}
            </div>
        </div>
    </Link>
  )
}

export default LessonCard