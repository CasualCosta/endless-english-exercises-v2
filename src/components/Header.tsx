import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <Link to='/'>
      <header className='bg-gradient-to-b from-sky-900/60 to-sky-950/60 text-slate-300 text-center py-8 md:w-5/6 mt-4 mx-auto rounded-xl'>
          <h1 className='text-2xl md:text-6xl lato-light'>
              Endless English Exercises
          </h1>
          {/* <h2 className='text-xl md:text-4xl my-2'>
              Practice as much as you want!
          </h2> */}
      </header>
    </Link>
  )
}

export default Header