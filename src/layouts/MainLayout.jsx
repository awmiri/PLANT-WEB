import Header from '../mainConsept/Header/Header';
import HomePage from '../mainConsept/Body/TopBody';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router';
import Burgurmenu from '../mainConsept/Header/Burgurmenu';
import Footer from '../mainConsept/Footer/Footer';
import Lenis from 'lenis';


function MainLayout() {
    const [openMenu, setOpenMenu] = useState(false);
    function SmoothScrollWrapper({ children }) {
        useEffect(() => {
            const lenis = new Lenis({
                duration: 1.2,
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                direction: 'vertical',
                gestureDirection: 'vertical',
                smooth: true,
                smoothTouch: false,
                touchMultiplier: 2,
            });

            function raf(time) {
                lenis.raf(time);
                requestAnimationFrame(raf);
            }

            requestAnimationFrame(raf);

            return () => {
                lenis.destroy();
            };
        }, []);

        return children;
    }

    return (
        <SmoothScrollWrapper>
            <header className=' border-b-2 border-b-customgray '>
                <div className='mx-[16px] sm:mx-[50px] lg:mx-[108px]'>
                    <Header openMenu={openMenu} setOpenMenu={setOpenMenu} />
                    <form className=' flex items-center bg-customgray2 rounded-lg py-1.5 px-3 gap-2 mb-3 md:hidden'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className='text-customgray3'>
                            <path d="..." fill="currentColor" />
                        </svg>
                        <input type="text" className='outline-0 text-customgray3 w-full' placeholder='جستجو گیاه' maxLength={20} />
                    </form>
                    <Burgurmenu isOpen={openMenu} setOpenMenu={setOpenMenu} />
                </div>
            </header>
            <main className='mt-16'>
                <div className='mx-[16px] sm:mx-[50px] lg:mx-[108px]'>
                    <Outlet />

                </div>
            </main>
            <footer className='bg-[#F6F6F6] mt-20'>
                <div className='mx-[16px] sm:mx-[50px] lg:mx-[108px]'>
                    <Footer />
                </div>
            </footer>
        </SmoothScrollWrapper>
    )
}

export default MainLayout;