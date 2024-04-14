import React from 'react'
import LessonCard from './LessonCard'
import cardData from '../database/cardData'
import { Link } from 'react-router-dom'

const LessonCardSection = () => {
  return (
    <section className='px-2'>
        <h2 className='text-center text-slate-300 text-2xl md:text-6xl my-8'>LESSONS</h2>
        <div className='flex flex-wrap gap-2 md:gap-8 justify-center'>
            {cardData.map(card => {
                return <LessonCard key={card.id} card={card} />
            })}
        </div>
    </section>
  )
}

export default LessonCardSection