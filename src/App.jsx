import { useState } from 'react';
import Header from './mainConsept/Header/Header'
import Burgurmenu from './mainConsept/Header/Burgurmenu';
import TopBody from './mainConsept/Body/TopBody';

import './App.css'

function App() {
  const [openMenu, setOpenMenu] = useState(false);


  return (
    <div className='mx-[16px] sm:mx-[50px] lg:mx-[108px] '>
      <div className=' border-b-2 border-b-customgray '>
        <Header openMenu={openMenu} setOpenMenu={setOpenMenu} />
        <form action="" className=' flex items-center bg-customgray2 rounded-lg py-1.5 px-3 gap-2 mb-3 md:hidden' >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className='text-customgray3'>
            <path d="M15.755 14.255H14.965L14.685 13.985C15.665 12.845 16.255 11.365 16.255 9.755C16.255 6.165 13.345 3.255 9.755 3.255C6.165 3.255 3.255 6.165 3.255 9.755C3.255 13.345 6.165 16.255 9.755 16.255C11.365 16.255 12.845 15.665 13.985 14.685L14.255 14.965V15.755L19.255 20.745L20.745 19.255L15.755 14.255ZM9.755 14.255C7.26501 14.255 5.255 12.245 5.255 9.755C5.255 7.26501 7.26501 5.255 9.755 5.255C12.245 5.255 14.255 7.26501 14.255 9.755C14.255 12.245 12.245 14.255 9.755 14.255Z" fill="currentColor" />
          </svg>
          <input type="text" className='outline-0 text-customgray3 w-full' placeholder='جستجو گیاه' maxLength={20} />
        </form>
        <Burgurmenu isOpen={openMenu} setOpenMenu={setOpenMenu} />
      </div>
      <section className='mt-16'>
        <TopBody />
      </section>
    </div>
  )
}

export default App
