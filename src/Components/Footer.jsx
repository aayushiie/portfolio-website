import React from 'react'
import EyeFollowButton from './EyeFollowButton';

const Footer = () => {
  const date = new Date();

  return (
    <>

      <div className='w-[92vw] md:w-[80vw] border border-gray-300 mx-auto md:my-6 my-4'></div>
      <footer
        id='footer'
        // className='relative w-[60vw] flex flex-row justify-between items-center m-6 overflow-visible'
        className='relative w-[92vw] md:w-[60vw] flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 mx-auto my-6 overflow-visible md:m-6'
        >
        <EyeFollowButton />
        <div className='flex flex-col items-center gap-2'>
          <div className='text-sm mb-3'>
            &copy; {date.getFullYear()} Aayushi Singh &lt;3
          </div>
        </div>
      </footer>
        
    </>
  )
}

export default Footer