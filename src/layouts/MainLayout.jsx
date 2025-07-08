import Header from '../mainConsept/Header/Header';
import Burgurmenu from '../mainConsept/Header/Burgurmenu';
import HomePage from '../mainConsept/Body/TopBody';
import { useState } from 'react';
import { Outlet } from 'react-router';


function MainLayout() {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <div className='mx-[16px] sm:mx-[50px] lg:mx-[108px] '>
            <div className=' border-b-2 border-b-customgray '>
                <Header openMenu={openMenu} setOpenMenu={setOpenMenu} />
                <form className=' flex items-center bg-customgray2 rounded-lg py-1.5 px-3 gap-2 mb-3 md:hidden'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className='text-customgray3'>
                        <path d="..." fill="currentColor" />
                    </svg>
                    <input type="text" className='outline-0 text-customgray3 w-full' placeholder='جستجو گیاه' maxLength={20} />
                </form>
                <Burgurmenu isOpen={openMenu} setOpenMenu={setOpenMenu} />
            </div>
            <section className='mt-16'>

                <Outlet />
            </section>
        </div>
    );
}

export default MainLayout;