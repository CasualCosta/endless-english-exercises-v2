import { useEffect } from 'react'
import ActivityCard from './ActivityCard';
import { useParams } from 'react-router-dom'
import data from '../database/lessonData';
import { Activity } from '../types/pageTypes';

const Lesson = () => {
  const id = useParams().id!
  const lesson = data[parseInt(id)]

  const { title, activities } = lesson;

  useEffect(() => {
    window.scrollTo(0,0)
  })
  
  return (
    <section>
      <h2 className='text-center mx-auto text-slate-300 my-8 text-4xl'>{title}</h2>
      {activities.map((activity: Activity, index: number) => {
        return <ActivityCard key={index} activity={activity} index={index} />
      })}
    </section>
  )
}

export default Lesson