import { Link } from 'react-router-dom'
import { Card } from '../types/pageTypes'

const LessonCard = ({ card }:{card:Card}) => {
    const { id, image, title, vocabulary, grammar} = card
    return (
    <Link className='w-full md:w-36 min-h-32 md:h-60 bg-gradient-to-b from-sky-900/60 to-cyan-950/60 rounded-lg py-4 md:py-4 px-4 md:px-4 flex md:flex-col gap-4 md:gap-0 md:items-center text-white md:text-center hover:scale-105 border-4 border-radius-2 border-slate-400' to={`/lesson/${id}`}> 
        <div className=''>
            <img src={image} className='w-24 md:w-16 h-24 md:h-16 rounded-full border-slate-300 border-4' loading='lazy' />
        </div>
        <div className='text-xs'>
            <h2 className='md:mt-4 text-slate-300 uppercase text-sm'>{title}</h2>
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